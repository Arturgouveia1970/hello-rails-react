import React, { useEffect } from "react";
import { fetchMessage } from "./redux/message";
import { useSelector, useDispatch } from "react-redux";

export default function Message() {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);
  return (
    <div>
      <h1>{message.message}</h1>
    </div>
  );
}