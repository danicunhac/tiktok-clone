import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="video_footer">
      <div className="footer_text">
        <h4>@{channel}</h4>
        <p>{description}</p>
        <div className="footer_ticker">
          <MusicNoteIcon className="footer_icon" />
          <Ticker mode="smooth">
            {() => (
              <React.Fragment>
                <p>{song}</p>
              </React.Fragment>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="footer_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
