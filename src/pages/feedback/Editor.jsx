import React, {useState, useEffect, useRef} from "react";
import {Dialog, DialogTitle, DialogContent, Button, Typography, TextField} from "@mui/material";
import {serverRequest} from "../../services";
import styles from "./Editor.module.css";
import ReactQuill from "react-quill";
import {useSnackbar} from "notistack";
import "react-quill/dist/quill.bubble.css";
import "./quill.css";

const dialogStyle = {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      height: "50vh",
      backgroundColor: "rgb(25, 25, 25)",
      backgroundImage: "none",
    },
  },
};

const Editor = props => {
  const editorRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const {enqueueSnackbar} = useSnackbar();
  const {created, user, content, comments, status} = props.entry || {};

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
    setTitleValue(content?.title || "");
    setContentValue(content?.description || "");
  }, [editMode]);

  const isNew = !props.entry?.id;

  const readerIsAuthor = props.reader === user;
  const column = props.columns.find(column => column.status === status);

  const renderTitle = () => {
    if (editMode) return <TextField placeholder="Title" fullWidth size="small" value={titleValue} onChange={e => setTitleValue(e.target.value)} />
    return <Typography variant="h6">{content?.title}</Typography>;
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
    if (editMode) return (
      <div data-color-mode="dark" className={`editor-container ${styles.editorContainer}`}>
        <ReactQuill
          ref={editorRef}
          className={styles.markdownEditor}
          theme="bubble"
          bounds=".editor-container"
          value={contentValue}
          placeholder="Description"
          onChange={setContentValue}
        />
      </div>
    );
    return <Typography>{content?.description}</Typography>;
  }

  const handleCommentPost = () => {
    serverRequest("get_posts", {kind: "rfe", service: "warehouse"}).then(resp => {
      setData([...resp.data, ...extraData]);
    });
  };

  const renderCommentEditor = () => {
    if (isNew) return null;
    return (
      <DialogContent sx={{}}>
        <div className={styles.comments}>
          {comments?.map((comment, index) =>
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
          <ReactQuill value={commentValue} onChange={setCommentValue} />
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

  const handleCreate = () => {
    const data = {
      kind: "rfe",
      service: "warehouse",
      user: props.reader,
      status: "todo",
      content: {
        title: titleValue,
        description: contentValue,
      },
    }
    serverRequest("create_post", data).then(resp => {
      if (resp.ok) enqueueSnackbar("Feedback created!", {variant: "success"});
      else enqueueSnackbar("There was an issue creating your post :(", {variant: "error"});
    })
    props.onClose();
    setTitleValue("");
    setContentValue("");
  };

  return (
    <Dialog
      open={props.open}
      fullWidth
      maxWidth="lg"
      onClose={props.onClose}
      sx={dialogStyle}
    >
      <div className={styles.container}>
        {readerIsAuthor ?
          <Button color="success" variant="outlined" sx={{position: "absolute", right: 10, top: 10}}>
            Edit
          </Button>
        : null}
        {renderTitle()}
        {renderSubtitle()}
        <div className={styles.content}>
          {renderContent()}
        </div>
        {!isNew && <Typography variant="h6">
          {comments && comments.length > 0 ? "Comments" : "No comments"}
        </Typography>}
        {renderCommentEditor()}
        <div className={styles.buttonContainer}>
          {isNew &&
            <Button color="success" variant="outlined" size="small" onClick={handleCreate}>
              Create
            </Button>
          }
          <Button color="secondary" variant="outlined" size="small">Close</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Editor;
