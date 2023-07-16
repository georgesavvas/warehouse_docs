import { Chip, Typography } from "@mui/material";

import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({data, onClick}) => {
  const {user, title, content, comments, tags, created} = data;

  return (
    <div className={styles.container} onClick={onClick}>
      <Typography variant="h6">{title}</Typography>
      <div className={styles.contentContainer}>
        <Typography variant="subtitle2">{content}</Typography>
      </div>
      <Typography color="grey">
        {created} by {user}
      </Typography>
      <div className={styles.bottomBar}>
        <div className={styles.bottomElement}>
          {tags.map(tag => <Chip key={tag} label={tag} color="secondary" size="small" />)}
        </div>
        <div className={styles.bottomElement}>
          <Typography color="grey">{comments.length}</Typography>
          <CommentIcon sx={{color: "grey"}} />
        </div>
      </div>
    </div>
  )
}

export default Feedback;
