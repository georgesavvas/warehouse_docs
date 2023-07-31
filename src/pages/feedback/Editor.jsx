import React, {useState, useEffect} from "react";
import {Dialog, DialogTitle, DialogContent, Button, Typography, TextField} from "@mui/material";
import {serverRequest} from "../../services";
import styles from "./Editor.module.css";
import ReactQuill from "react-quill";

const dialogStyle = {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      height: "80vh",
      backgroundColor: "rgb(25, 25, 25)",
      backgroundImage: "none"
    },
  },
};

const Editor = props => {
  const [editMode, setEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const {title, created, user, content, comments, status} = props.entry || {};

  useEffect(() => {
    if (!props.open) return;
    if (!props.entry?.id) {
      setEditMode(true);
      return;
    }
    setEditMode(false);
  }, [props.open, props.entry]);

  useEffect(() => {
    if (!editMode) return;
    setTitleValue(title);
    setContentValue(content);
  }, [editMode]);

  const isNew = !props.entry?.id;

  const readerIsAuthor = props.reader === user;
  const column = props.columns.find(column => column.status === status);

  const renderTitle = () => {
    if (editMode) return <TextField placeholder="Title" fullWidth size="small" value={titleValue} onChange={e => setTitleValue(e.target.value)} />
    return title;
  };

  const renderSubtitle = () => {
    if (!column) return null;
    return (
      <div className={styles.row}>
        <Typography color={column.color}>{column.title}</Typography>
        <Typography color="grey">{created} by {user}</Typography>
      </div>
    );
  };

  const renderContent = () => {
    if (editMode) return <ReactQuill theme="snow" value={contentValue} onChange={setContentValue} />
    return <Typography>{content}</Typography>;
  }

  const handleCommentPost = () => {
    serverRequest("get_posts", {kind: "rfe"}).then(resp => setData([...resp.data, ...extraData]));
  };

  const renderComments = () => {
    if (isNew) return null;
    return (
      <DialogContent sx={{}}>
        <div className={styles.comments}>
          {comments.map((comment, index) =>
            <>
              <div key={index} className={styles.commentContainer}>
                <div className={styles.commentHeader}>
                  <Typography>{comment.created} by {comment.user}</Typography>
                </div>
                <div className={styles.commentContent}>
                  <Typography>
                    {comment.content}
                  </Typography>
                </div>
              </div>
              {index < comments.length - 1 ?
                <div key={`${index}-connector`} className={styles.commentConnector} />
                : null
              }
            </>
          )}
        </div>
        <Typography variant="h6" sx={{mt: 2}}>New Comment</Typography>
        <div className={styles.quillContainer}>
          <ReactQuill theme="snow" value={commentValue} onChange={setCommentValue} />
        </div>
        <div className={styles.postContainer}>
          <Button
            disabled={!commentValue}
            onClick={handleCommentPost}
            variant="outlined"
            color="success"
            sx={{minWidth: "150px"}}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    );
  };

  return (
    <Dialog
      open={props.open}
      fullWidth
      maxWidth="lg"
      onClose={props.onClose}
      sx={dialogStyle}
    >
      {readerIsAuthor ?
        <Button color="success" variant="outlined" sx={{position: "absolute", right: 10, top: 10}}>
          Edit
        </Button>
      : null}
      <DialogTitle>
        {renderTitle()}
        {renderSubtitle()}
      </DialogTitle>
      <DialogContent dividers sx={{flexShrink: 0}}>
        <div className={styles.content}>
          {renderContent()}
        </div>
      </DialogContent>
      <DialogTitle>
        {comments && comments.length > 0 ? "Comments" : "No comments"}
      </DialogTitle>
      {renderComments()}
    </Dialog>
  );
};

export default Editor;
