import React from "react";
import {
  VideoContainer,
  Frame,
  VideoWrapper,
  VideoTitle,
  VideoChannel,
  Divider,
  VideoDescription,
} from "./videoDetailStyles";

// VideoDetail function takes in two videos and children.
// if the video query is not null return true.

// we destructure the videoId from the array of videos also along with the title, channelTitle and description.
const VideoDetail = ({ videos, children }) => {
  if (!videos) return null;

  const { videoId } = videos.id,
    { title, channelTitle, description } = videos.snippet,
    url = `https://youtube.com/embed/${videoId}`;

  return (
    <VideoContainer>
      <VideoWrapper>
        <Frame src={url} title={title} />
        <VideoTitle>{title}</VideoTitle>
        <VideoChannel>{channelTitle}</VideoChannel>
        <Divider />
        <VideoDescription>{description}</VideoDescription>
      </VideoWrapper>
      {children}
    </VideoContainer>
  );
};

export default React.memo(VideoDetail);
