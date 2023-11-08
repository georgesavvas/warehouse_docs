import { Chip, Typography } from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import styles from "./Feedback.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Feedback = ({data, onClick}) => {
  const {user, content, comments, tags, created} = data;

  return (
    <div className={styles.container} onClick={onClick}>
      <Typography variant="h6">{content?.title}</Typography>
      <div className={styles.contentContainer}>
        <ReactQuill readOnly value={content?.description} theme="bubble" />
      </div>
      <Typography color="grey">
        {created} by {user}
      </Typography>
      <div className={styles.bottomBar}>
        <div className={styles.bottomElement}>
          {tags.map(tag => <Chip key={tag} label={tag} color="secondary" size="small" />)}
        </div>
        <div className={styles.bottomElement}>
          <Typography color="grey">{comments?.length}</Typography>
          <CommentIcon sx={{color: "grey"}} />
        </div>
      </div>
    </div>
  )
}

export default Feedback;
