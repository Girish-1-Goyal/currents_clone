import React, {useState, useEffect} from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PosrRecv from "./PosrRecv";
import { db } from "./firebase";
import firebase from "./firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
import { selectUser } from "../features/userSlice";

function Post() {
  const [Input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      title: user.email,
      message: Input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="post_top">
      <div className="post_main">
        <div className="input_field">
          <form>
            <Avatar className="post_avatar">{user.displayName[0]}</Avatar>
            <input
              value={Input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Post an update"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <PhotoIcon className="post_icon" />
      </div>
      <div className="post_title">
        <ArrowDropDownIcon className="title_icon" />
        <p>Sort by relevance</p>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, title, message } }) => (
          <PosrRecv
            key={id}
            name={name}
            title={title}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Post;
