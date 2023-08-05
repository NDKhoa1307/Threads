import React, { useState, useEffect } from "react";
import {
  MoreHorizontal,
  Heart,
  Repeat,
  Send,
  MessageCircle,
} from "react-feather";
import { functions, FUNCTION_ID } from "../appwriteConfig";

const Thread = ({ thread }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserinfo();
  }, []);

  const getUserinfo = async () => {
    const response = await functions.createExecution([FUNCTION_ID]);
    console.log("response: ", response);
    setLoading(false);
  };

  if (loading) {
  }
  return (
    <div>
      <div className="flex py-4 border-b border-[rgba(49,49,50,1)]">
        {/* Image section*/}
        <img
          className="w-9 h-9 rounded-full object-cover"
          src="https://i.pinimg.com/originals/89/41/40/8941408fe5575d61409cd1af209445e3.jpg"
        />
        {/* Threads section */}
        <div className="w-full pl-3">
          {/* Threads header */}
          <div className="flex justify-between">
            <strong>{thread.owner_id}</strong>
            <div className="flex justify-between gap-2">
              <p className="text-[#595959]">3h</p>
              <MoreHorizontal className="pt-1" />
            </div>
          </div>

          {/* Threads body */}
          <div className="py-1">
            <span>{thread.body}</span>
          </div>

          {/* Icons */}
          <div className="flex gap-3 py-1">
            <Heart size={22} />
            <MessageCircle size={22} />
            <Repeat size={22} />
            <Send size={22} />
          </div>

          {/* Response */}
          <div className="flex gap-2">
            <p className="text-[rgb(97,97,97)]">3 replies</p>
            <p className="text-[rgb(97,97,97)]">·</p>
            <p className="text-[rgb(97,97,97)]">825 likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
