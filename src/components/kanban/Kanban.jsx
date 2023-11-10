import "react-quill/dist/quill.snow.css";

import {AnimatePresence, motion} from "framer-motion";
import {Button, Typography} from "@mui/material";
import React, {useMemo, useState} from "react";

import Column from "./Column";
import Editor from "./Editor";
import Feedback from "./Feedback";
import { jwtDecode } from "jwt-decode";
import { serverRequest } from "../../services";
import styles from "./Kanban.module.css";
import { useEffect } from "react";

const columns = [
  {
    status: "todo",
    title: "Not Started",
    colour: "rgb(40, 85, 184)",
  },
  {
    status: "doing",
    title: "In Progress",
    colour: "rgb(44, 185, 44)",
  },
  {
    status: "testing",
    title: "Testing",
    colour: "rgb(185, 48, 48)",
  },
  {
    status: "done",
    title: "Done",
    colour: "rgb(27, 172, 128)",
  },
];

const sortPosts = (a, b) => {
  return a.created > b.created ? -1 : 1;
};

export const Kanban = ({service, kind, title}) => {
  const [activeEntry, setActiveEntry] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [admins, setAdmins] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    if (user.name && user.address) return;
    const userData = localStorage.getItem(`${service}User`);
    if (!userData) {
      setUser({});
      return;
    }
    const decodedData = jwtDecode(userData);
    if (!decodedData.name || !decodedData.email) {
      console.log("Failed to parse user data", userData);
      return;
    }
    decodedData.username = decodedData.email.split("@")[0];
    setUser(decodedData);
  }, []);

  useEffect(() => {
    serverRequest("get_admins", {service: service}).then(resp => {
      if (resp?.data) setAdmins([...resp.data, "george"]);
      else setAdmins(["george"]);
    })
  }, []);

  useEffect(() => {
    serverRequest("get_posts", {service: service, kind: kind}).then(resp => {
      if (resp?.data) setData(resp.data.sort(sortPosts));
      else setData([]);
    });
  }, [forceUpdate]);

  const activeEntryData = useMemo(() => {
    if (!activeEntry) return {};
    return data.find(post => post.id === activeEntry) || {};
  });

  const isAdmin = admins.includes(user.username);

  return (
    <div className={styles.container}>
      <Editor
        service={service}
        kind={kind}
        reader={user}
        columns={columns}
        entry={activeEntryData}
        open={!!activeEntry}
        onClose={() => setActiveEntry("")}
        setData={setData}
        isAdmin={isAdmin}
        forceUpdate={() => setForceUpdate(prev => prev + 1)}
      />
      <Typography variant="h4" textAlign="center">{title}</Typography>
      <div className={styles.row}>
        {columns.map(column =>
          <Column key={column.status} title={column.title} color={column.colour}>
            {column.status === "todo" ?
              <div
                className={styles.newContainer}
                key={`${column.status}-new`}
                onClick={() => setActiveEntry("new")}
              >
                <Typography variant="h5" textAlign="center">Create</Typography>
              </div>
              : null
            }
            <AnimatePresence mode="popLayout">
              {data.filter(entry => entry.status === column.status).map(entry =>
                <motion.div
                  layout
                  key={entry.id}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                >
                  <Feedback
                    service={service}
                    kind={kind}
                    data={entry}
                    reader={user}
                    onClick={() => setActiveEntry(entry.id)}
                    forceUpdate={() => setForceUpdate(prev => prev + 1)}
                    columns={columns}
                    isAdmin={isAdmin}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Column>
        )}
      </div>
    </div>
  );
};

export default Kanban;
