import Thread from "../components/Threads";
import React, { useState, useEffect } from "react";
import { database, DEV_DB_ID, COLLECTION_ID_THREADS } from "../appwriteConfig";

const feed = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads();
  }, []);

  const getThreads = async () => {
    const response = await database.listDocuments(
      DEV_DB_ID,
      COLLECTION_ID_THREADS
    );
    setThreads(response.documents);    
  };

  return (
    <>
      <div className="container mx-auto max-w-[600px]">
        {threads.map((thread) => (
          <Thread key={thread.$id} thread={thread}/>
        ))}
      </div>
    </>
  );
};

export default feed;
