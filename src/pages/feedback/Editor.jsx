import "react-quill/dist/quill.bubble.css";
import "./quill.css";

import {Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

import ReactQuill from "react-quill";
import {serverRequest} from "../../services";
import styles from "./Editor.module.css";
import {useSnackbar} from "notistack";
import { v4 as uuidv4 } from 'uuid';

const Editor = props => {
  const editorRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [tags, setTags] = useState([]);
  const [canUpdate, setCanUpdate] = useState(false);
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
    setTags(content?.tags || []);
  }, [editMode]);

  const isNew = !props.entry?.id;

  const dialogStyle = {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        height: isNew ? "50vh" : "80vh",
        backgroundColor: "rgb(25, 25, 25)",
        backgroundImage: "none",
      },
    },
  };

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
    const data = {
      id: props.entry.id,
      user: props.reader,
      comment: commentValue,
    }
    serverRequest("create_comment", data).then(resp => {
      if (!resp.ok) enqueueSnackbar("There was an issue posting your comment :(", {variant: "error"});
    })
    props.setData(prev => {
      const existing = [...prev];
      const post = existing.find(post => post.id === props.entry.id);
      post.comments.push({id: uuidv4(), user: props.reader, content: commentValue});
      return existing;
    });
    setCommentValue("");
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
          <div data-color-mode="dark" className={`editor-container ${styles.editorCommentContainer}`}>
            <ReactQuill
              ref={editorRef}
              className={styles.markdownEditor}
              theme="bubble"
              bounds=".editor-container"
              value={commentValue}
              placeholder="New Comment"
              onChange={setCommentValue}
            />
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
          </div>
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
      tags: tags,
      content: {
        title: titleValue,
        description: contentValue,
      },
    }
    serverRequest("create_post", data).then(resp => {
      if (resp.ok) enqueueSnackbar("Feedback created!", {variant: "success"});
      else enqueueSnackbar("There was an issue creating your post :(", {variant: "error"});
    })
    props.setData(prev => [...prev, {...data, id: uuidv4(), comments: []}]);
    props.onClose();
    setTitleValue("");
    setContentValue("");
  };

  const handleUpdate = () => {
    const data = {
      id: props.entry.id,
      kind: "rfe",
      service: "warehouse",
      status: "todo",
      tags: tags,
      content: {
        title: titleValue,
        description: contentValue,
      },
    }
    serverRequest("create_post", data).then(resp => {
      if (resp.ok) enqueueSnackbar("Feedback created!", {variant: "success"});
      else enqueueSnackbar("There was an issue creating your post :(", {variant: "error"});
    })
    props.setData(prev => {
      const existing = [...prev];
      const index = existing.findIndex(post => post.id === props.entry.id);
      existing[index] = data;
      return existing;
    });
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
          <Button color="secondary" variant="outlined" size="small" onClick={props.onClose}>Close</Button>
          {isNew &&
            <Button color="success" variant="outlined" size="small" onClick={handleCreate}>
              Create
            </Button>
          }
          {!isNew &&
            <Button color="success" variant="outlined" size="small" onClick={handleUpdate}>
              Update
            </Button>
          }
        </div>
      </div>
    </Dialog>
  );
};

export default Editor;
