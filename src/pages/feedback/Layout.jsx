import "react-quill/dist/quill.snow.css";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

import Column from "../../components/kanban/Column";
import Feedback from "./Feedback";
import ReactQuill from "react-quill";
import styles from "./Layout.module.css";

const dialogStyle = {
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      height: "80vh",
      backgroundColor: "rgb(25, 25, 25)",
      backgroundImage: "none"
    },
  },
};

const columns = [
  {
    status: "todo",
    title: "Not Started",
    color: "rgb(40, 85, 184)",
  },
  {
    status: "doing",
    title: "In Progress",
    color: "rgb(44, 185, 44)",
  },
  {
    status: "testing",
    title: "Testing",
    color: "rgb(185, 48, 48)",
  },
  {
    status: "done",
    title: "Done",
    color: "rgb(27, 172, 128)",
  },
];

const data = [
  {
    id: "0",
    user: "george",
    comments: [
      {
        user: "jack",
        created: "1 day ago",
        content: "Anim ex reprehenderit do fugiat aliquip excepteur occaecat id eiusmod commodo est do cillum consectetur. Labore ipsum incididunt exercitation duis reprehenderit dolore enim non adipisicing. Laborum quis irure enim aliqua fugiat dolore. Sit reprehenderit sunt non sunt veniam consectetur enim irure reprehenderit esse aliqua sit. Ea culpa irure sit veniam mollit dolore ex sint duis non reprehenderit reprehenderit. Tempor irure magna ut eiusmod pariatur qui.",
      },
      {
        user: "jordan",
        created: "7 hours ago",
        content: "Anim ex reprehenderit do fugiat aliquip excepteur occaecat id eiusmod commodo est do cillum consectetur. Labore ipsum incididunt exercitation duis reprehenderit dolore enim non adipisicing. Laborum quis irure enim aliqua fugiat dolore. Sit reprehenderit sunt non sunt veniam consectetur enim irure reprehenderit esse aliqua sit. Ea culpa irure sit veniam mollit dolore ex sint duis non reprehenderit reprehenderit. Tempor irure magna ut eiusmod pariatur qui.",
      },
      {
        user: "jack",
        created: "2 hours ago",
        content: "Anim ex reprehenderit do fugiat aliquip excepteur occaecat id eiusmod commodo est do cillum consectetur. Labore ipsum incididunt exercitation duis reprehenderit dolore enim non adipisicing. Laborum quis irure enim aliqua fugiat dolore. Sit reprehenderit sunt non sunt veniam consectetur enim irure reprehenderit esse aliqua sit. Ea culpa irure sit veniam mollit dolore ex sint duis non reprehenderit reprehenderit. Tempor irure magna ut eiusmod pariatur qui.",
      },
      {
        user: "george",
        created: "10 minutes ago",
        content: "Anim ex reprehenderit do fugiat aliquip excepteur occaecat id eiusmod commodo est do cillum consectetur. Labore ipsum incididunt exercitation duis reprehenderit dolore enim non adipisicing. Laborum quis irure enim aliqua fugiat dolore. Sit reprehenderit sunt non sunt veniam consectetur enim irure reprehenderit esse aliqua sit. Ea culpa irure sit veniam mollit dolore ex sint duis non reprehenderit reprehenderit. Tempor irure magna ut eiusmod pariatur qui.",
      },
    ],
    tags: ["ui"],
    created: "5 days ago",
    status: "todo",
    title: "Dolor reprehenderit aliqua sit qui laboris anim eiusmod.",
    content: "Mollit sunt culpa dolore nulla minim commodo est minim est id enim ipsum aliquip veniam. Ad do ipsum commodo dolore et ea sint laborum cillum ut fugiat excepteur veniam. Irure qui sunt nisi adipisicing ex exercitation eiusmod. Non in amet ullamco sunt culpa minim nisi voluptate officia pariatur consequat mollit ipsum.",
  },
  {
    id: "1",
    user: "jack",
    comments: [],
    tags: [],
    created: "1 month ago",
    status: "doing",
    title: "Ea nisi in et laboris labore Lorem sint laborum.",
    content: "Laborum consequat do voluptate consectetur do nisi.",
  },
  {
    id: "2",
    user: "george",
    comments: [],
    tags: [],
    created: "2 days ago",
    status: "testing",
    title: "Sunt in nulla aliqua ad sint cillum occaecat labore et consectetur anim incididunt.",
    content: "Laboris ipsum nulla voluptate labore adipisicing veniam pariatur incididunt voluptate. Enim duis eiusmod ex eu in qui. Ad sint ullamco pariatur tempor non eiusmod mollit laborum irure. Reprehenderit anim nisi ea velit mollit aliqua consectetur deserunt consequat et non irure ex. Ullamco mollit laborum ut velit sint duis incididunt veniam in minim consectetur nisi. In cillum officia cillum elit velit voluptate esse aliquip consequat.",
  },
  {
    id: "3",
    user: "jordan",
    comments: [],
    tags: ["tags", "previews"],
    created: "32 minutes ago",
    status: "done",
    title: "Esse commodo reprehenderit irure quis exercitation adipisicing nisi cupidatat enim adipisicing proident.",
    content: "Mollit id proident culpa incididunt ad. Dolore quis deserunt velit veniam. Eiusmod consectetur nisi commodo ex aliqua nisi qui magna ullamco proident enim cupidatat anim. Sunt id minim aute eu nostrud enim fugiat. Tempor exercitation labore tempor do anim do. Adipisicing et sunt esse eu nulla occaecat adipisicing.",
  },
  {
    id: "4",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "5",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "6",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "7",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "8",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
];

export const Layout = () => {
  const [activeEntry, setActiveEntry] = useState(data[0]);
  const [value, setValue] = useState('');

  const user = "george";

  const getDialogContent = () => {
    if (!activeEntry) return null;
    const userIsAuthor = activeEntry.user === user;
    const column = columns.find(column => column.status === activeEntry.status);
    return <>
      {userIsAuthor ?
        <Button color="success" variant="outlined" sx={{position: "absolute", right: 10, top: 10}}>
          Edit
        </Button>
      : null}
      <DialogTitle>
        {activeEntry.title}
        <div className={styles.dialogRow}>
          <Typography color={column.color}>{column.title}</Typography>
          <Typography color="grey">{activeEntry.created} by {activeEntry.user}</Typography>
        </div>
      </DialogTitle>
      <DialogContent dividers sx={{flexShrink: 0}}>
        <div className={styles.dialogContent}>
          <Typography>
            {activeEntry.content}
          </Typography>
        </div>
      </DialogContent>
      <DialogTitle>
        Comments
      </DialogTitle>
      <DialogContent sx={{}}>
        <div className={styles.comments}>
          {activeEntry.comments.map((comment, index) =>
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
              {index < activeEntry.comments.length - 1 ?
                <div key={`${index}-connector`} className={styles.commentConnector} />
                : null
              }
            </>
          )}
        </div>
        {!activeEntry.comments.length ? <Typography color="grey">No comments</Typography> : null}
        <Typography variant="h6" sx={{mt: 2}}>New Comment</Typography>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </DialogContent>
    </>
  };

  return (
    <div className={styles.container}>
      <Dialog
        open={!!activeEntry}
        fullWidth
        maxWidth="lg"
        onClose={() => setActiveEntry()}
        sx={dialogStyle}
      >
        {getDialogContent()}
      </Dialog>
      <Typography variant="h4" textAlign="center">Feedback</Typography>
      <div className={styles.row}>
        {columns.map(column =>
          <Column key={column.status} title={column.title} color={column.color}>
            {data.filter(entry => entry.status === column.status).map(entry =>
              <Feedback key={entry.id} data={entry} onClick={() => setActiveEntry(entry)} />
            )}
          </Column>
        )}
      </div>
    </div>
  )
}

export default Layout;
