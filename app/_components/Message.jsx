function Message(msgType, message) {
  if (msgType === "error") return <div className="bg-red-300">{message} </div>;
  return <div className="bg-green-400">{message}</div>;
}

export default Message;
