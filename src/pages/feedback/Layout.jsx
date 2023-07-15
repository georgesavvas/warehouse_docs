import "@mdxeditor/editor/style.css";

import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

import Column from "../../components/kanban/Column";
import Feedback from "./Feedback";
import {MDXEditor} from "@mdxeditor/editor";
import styles from "./Layout.module.css";

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
    comments: 5,
    tags: ["ui"],
    created: "5 days ago",
    status: "todo",
    title: "Dolor reprehenderit aliqua sit qui laboris anim eiusmod.",
    content: "Mollit sunt culpa dolore nulla minim commodo est minim est id enim ipsum aliquip veniam. Ad do ipsum commodo dolore et ea sint laborum cillum ut fugiat excepteur veniam. Irure qui sunt nisi adipisicing ex exercitation eiusmod. Non in amet ullamco sunt culpa minim nisi voluptate officia pariatur consequat mollit ipsum.",
  },
  {
    id: "1",
    user: "jack",
    comments: 1,
    tags: [],
    created: "1 month ago",
    status: "doing",
    title: "Ea nisi in et laboris labore Lorem sint laborum.",
    content: "Laborum consequat do voluptate consectetur do nisi.",
  },
  {
    id: "2",
    user: "george",
    comments: 2,
    tags: [],
    created: "2 days ago",
    status: "testing",
    title: "Sunt in nulla aliqua ad sint cillum occaecat labore et consectetur anim incididunt.",
    content: "Laboris ipsum nulla voluptate labore adipisicing veniam pariatur incididunt voluptate. Enim duis eiusmod ex eu in qui. Ad sint ullamco pariatur tempor non eiusmod mollit laborum irure. Reprehenderit anim nisi ea velit mollit aliqua consectetur deserunt consequat et non irure ex. Ullamco mollit laborum ut velit sint duis incididunt veniam in minim consectetur nisi. In cillum officia cillum elit velit voluptate esse aliquip consequat.",
  },
  {
    id: "3",
    user: "jordan",
    comments: 0,
    tags: ["tags", "previews"],
    created: "32 minutes ago",
    status: "done",
    title: "Esse commodo reprehenderit irure quis exercitation adipisicing nisi cupidatat enim adipisicing proident.",
    content: "Mollit id proident culpa incididunt ad. Dolore quis deserunt velit veniam. Eiusmod consectetur nisi commodo ex aliqua nisi qui magna ullamco proident enim cupidatat anim. Sunt id minim aute eu nostrud enim fugiat. Tempor exercitation labore tempor do anim do. Adipisicing et sunt esse eu nulla occaecat adipisicing.",
  },
  {
    id: "4",
    user: "willm",
    comments: 0,
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "5",
    user: "willm",
    comments: 0,
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "6",
    user: "willm",
    comments: 0,
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "7",
    user: "willm",
    comments: 0,
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
  {
    id: "8",
    user: "willm",
    comments: 0,
    tags: [],
    created: "1 day ago",
    status: "todo",
    title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
    content: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
  },
];

export const Layout = () => {
  const [activeEntry, setActiveEntry] = useState(data[0]);

  const getDialogContent = () => {
    if (!activeEntry) return null;
    return <>
      <DialogTitle>{activeEntry.title}</DialogTitle>
      <DialogContent>
        {activeEntry.content}
        <MDXEditor markdown="Hello **world**!" />
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
      >
        {getDialogContent()}
      </Dialog>
      <Typography variant="h4" textAlign="center">Feedback</Typography>
      <div className={styles.row}>
        {columns.map(column =>
          <Column key={column.status} title={column.title} color={column.color}>
            {data.filter(entry => entry.status === column.status).map(entry =>
              <Feedback key={data.id} data={entry} onClick={() => setActiveEntry(entry)} />
            )}
          </Column>
        )}
      </div>
    </div>
  )
}

export default Layout;
