import "react-quill/dist/quill.snow.css";

import {AnimatePresence, motion} from "framer-motion";
import {Button, Typography} from "@mui/material";
import React, {useState} from "react";

import Column from "../../components/kanban/Column";
import Editor from "./Editor";
import Feedback from "./Feedback";
import { serverRequest } from "../../services";
import styles from "./Layout.module.css";
import { useEffect } from "react";

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

const extraData = [
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
    content: {
      title: "Dolor reprehenderit aliqua sit qui laboris anim eiusmod.",
      content: "Mollit sunt culpa dolore nulla minim commodo est minim est id enim ipsum aliquip veniam. Ad do ipsum commodo dolore et ea sint laborum cillum ut fugiat excepteur veniam. Irure qui sunt nisi adipisicing ex exercitation eiusmod. Non in amet ullamco sunt culpa minim nisi voluptate officia pariatur consequat mollit ipsum.",
    },
  },
  {
    id: "1",
    user: "jack",
    comments: [],
    tags: [],
    created: "1 month ago",
    status: "doing",
    content: {
      title: "Ea nisi in et laboris labore Lorem sint laborum.",
      content: "Laborum consequat do voluptate consectetur do nisi.",
    },
  },
  {
    id: "2",
    user: "george",
    comments: [],
    tags: [],
    created: "2 days ago",
    status: "testing",
    content: {
      title: "Sunt in nulla aliqua ad sint cillum occaecat labore et consectetur anim incididunt.",
      description: "Laboris ipsum nulla voluptate labore adipisicing veniam pariatur incididunt voluptate. Enim duis eiusmod ex eu in qui. Ad sint ullamco pariatur tempor non eiusmod mollit laborum irure. Reprehenderit anim nisi ea velit mollit aliqua consectetur deserunt consequat et non irure ex. Ullamco mollit laborum ut velit sint duis incididunt veniam in minim consectetur nisi. In cillum officia cillum elit velit voluptate esse aliquip consequat.",
    },
  },
  {
    id: "3",
    user: "jordan",
    comments: [],
    tags: ["tags", "previews"],
    created: "32 minutes ago",
    status: "done",
    content: {
      title: "Esse commodo reprehenderit irure quis exercitation adipisicing nisi cupidatat enim adipisicing proident.",
      description: "Mollit id proident culpa incididunt ad. Dolore quis deserunt velit veniam. Eiusmod consectetur nisi commodo ex aliqua nisi qui magna ullamco proident enim cupidatat anim. Sunt id minim aute eu nostrud enim fugiat. Tempor exercitation labore tempor do anim do. Adipisicing et sunt esse eu nulla occaecat adipisicing.",
    },
  },
  {
    id: "4",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "doing",
    content: {
      title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
      description: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
    },
  },
  {
    id: "5",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "done",
    content: {
      title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
      description: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
    },
  },
  {
    id: "6",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "testing",
    content: {
      title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
      description: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
    },
  },
  {
    id: "7",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    content: {
      title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
      description: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
    },
  },
  {
    id: "8",
    user: "willm",
    comments: [],
    tags: [],
    created: "1 day ago",
    status: "todo",
    content: {
      title: "Aute labore laborum sunt tempor voluptate eiusmod est commodo sint commodo ullamco reprehenderit nulla anim.",
      description: "Ullamco eiusmod proident irure voluptate magna nostrud duis ullamco elit culpa sit. Culpa do ea quis non id occaecat Lorem dolor. Aliqua sint minim velit ipsum eu est.",
    },
  },
];

export const Layout = () => {
  const [activeEntry, setActiveEntry] = useState();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (user.name && user.address) return;
    const data = localStorage.getItem("warehouseUser");
    if (!data) {
      console.log
      return;
    }
    const userData = localStorage.getItem("warehouseUser");
    const parsedUser = JSON.parse(userData);
    if (!parsedUser.name || !parsedUser.email) {
      console.log("Failed to parse user data", userData);
      return;
    }
    parsedUser.username = parsedUser.email.split("@")[0];
    setUser(parsedUser);
  }, []);

  useEffect(() => {
    serverRequest("get_posts", {kind: "rfe"}).then(resp => {
      if (resp?.data) setData(resp.data);
      else setData(extraData);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Editor
        reader={user.username || "george"}
        columns={columns}
        entry={activeEntry}
        open={!!activeEntry}
        onClose={() => setActiveEntry()}
        setData={setData}
      />
      <Typography variant="h4" textAlign="center">Feedback</Typography>
      <div className={styles.row}>
        {columns.map(column =>
          <Column key={column.status} title={column.title} color={column.color}>
            <AnimatePresence>
              {column.status === "todo" ?
                <div
                  className={styles.newContainer}
                  key={`${column.status}-new`}
                  onClick={() => setActiveEntry({})}
                >
                  <Typography variant="h5" textAlign="center">Create</Typography>
                </div>
                : null
              }
              {data.filter(entry => entry.status === column.status).map(entry =>
                <Feedback key={entry.id} data={entry} onClick={() => setActiveEntry(entry)} />
              )}
            </AnimatePresence>
          </Column>
        )}
      </div>
    </div>
  );
};

export default Layout;
