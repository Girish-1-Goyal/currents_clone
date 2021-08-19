import React, {forwardRef} from 'react'
import { Avatar } from "@material-ui/core";
import "./PostRecv.css";
import BusinessIcon from "@material-ui/icons/Business";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LaunchIcon from "@material-ui/icons/Launch";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import TrendingFlatOutlinedIcon from "@material-ui/icons/TrendingFlatOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const PosrRecv = forwardRef(({name, title, message}, ref) => {
  const user = useSelector(selectUser)

    return (
      <div ref={ref} className="post_recv_main">
        <div className="main_sec">
          <div className="set">
            <Avatar
              className="main_avatar"
            > {user.displayName[0]}</Avatar>
            <div className="info_sec">
              <h3>{user.displayName}</h3>
              <p>
                4W ago in <span style={{ color: "green" }}>Unix/Linux</span>{" "}
                <BusinessIcon className="business" />
              </p>
            </div>
          </div>
          <div className="end_icon">
            <LaunchIcon className="launch" />
            <MoreVertIcon className="more" />
          </div>
        </div>
        <div className="main_title">
          <p>React/Redux Google Currents Clone</p>
        </div>
        <div className="main_message">
          <p>{message}</p>
        </div>
        <div className="bottom_div">
          <div className="bottom_icon">
            <ThumbUpOutlinedIcon className="Thumb_icon" />
            <TrendingFlatOutlinedIcon className="Trending" />
          </div>
          <div className="last">
            <EqualizerOutlinedIcon className="Equalizer" />
          </div>
        </div>
        <div className="comment_bar">
          <div className="comment">
            <form>
              <Avatar
                className="final_avatar"
              >{user.displayName[0]}</Avatar>
              <input type="text" placeholder="Add a comment" />
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    );
})

export default PosrRecv
