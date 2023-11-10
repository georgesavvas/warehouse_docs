import "react-quill/dist/quill.bubble.css";
import "./quill.css";

import { Button, Chip, Typography } from "@mui/material";
import React, { useEffect } from "react";

import CommentIcon from "@mui/icons-material/Comment";
import ReactQuill from "react-quill";
import {hexToHsl} from "../../utils/hexToHsl";
import { serverRequest } from "../../services";
import stc from "string-to-color";
import styles from "./Feedback.module.css";
import timeAgo from "../../utils/timeAgo";
import { useState } from "react";

const getDelay = s => {
  switch (true) {
    case s < 60:
      return 5000;
    case s < 60 * 60:
      return 1000 * 60;
    case s < 60 * 60 * 24:
      return 1000 * 60 * 60;
    default:
      return -1;
  }
};

const Feedback = ({data, onClick, onDelete}) => {
  const [updateTime, setUpdateTime] = useState(0);
  const {user, content, comments, tags, created} = data;

  useEffect(() => {
    if (!created) return;
    const now = new Date().getTime() / 1000;
    const secondsAgo = Math.round(now - created);
    const newDelay = getDelay(secondsAgo);
    const timeout = setTimeout(() => {
      if (newDelay > 0) {
        setUpdateTime(prev => prev + 1);
      }
    }, newDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [updateTime, data]);

  const createdFormatted = timeAgo(created, 3, 1);

  const handleDelete = e => {
    e.stopPropagation();
    const _data = {
      service: "warehouse",
      kind: "rfe",
      post_id: data.id,
    }
    serverRequest("delete_post", _data).then(() => onDelete());
  };

  return (
    <div className={styles.container} onClick={onClick}>
      <Button size="small" sx={{position: "absolute", top: 0, right: 0}} onClick={handleDelete} variant="contained" color="error">
        X
      </Button>
      <Typography
        variant="h6"
        className={styles.title}
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }}
      >
        {content?.title}
      </Typography>
      <div className={styles.contentContainer}>
        <ReactQuill readOnly value={content?.description} theme="bubble" className="cursor-pointer shorten" />
      </div>
      <Typography color="grey">
        {createdFormatted} by {user.name}
      </Typography>
      <div className={styles.bottomBar}>
        <div className={styles.bottomElement}>
          {tags.map(tag =>
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{backgroundColor: hexToHsl(stc(tag), 80, 30)}}
            />
          )}
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
