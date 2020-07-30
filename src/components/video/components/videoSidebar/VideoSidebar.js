import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="video_sidebar">
      <div className="sidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="Large" className="liked" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="Large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="sidebar_button">
        <ChatRoundedIcon fontSize="Large" />
        <p>{messages}</p>
      </div>
      <div className="sidebar_button">
        <WhatsAppIcon fontSize="Large" className="whatsapp" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
