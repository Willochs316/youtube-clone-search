import React, { useState, useEffect } from "react";
import YTSearch from "youtube-api-search";
// Components
import SearchBar from "./components/SearchBar/searchBar";
import VideoList from "./components/VideoList/videoList";
import VideoDetail from "./components/VideoDetail/videoDetail";
import Nav from "./components/Nav/nav";
// styles
import { Container } from "./appStyles.js";
// Personal Key, it would be hidden for you. Get One!
import API_KEY from "./key";

const App = () => {
  // define one state to hold the user's search query and also a separate one to hold the selected video queried
  const [videos, setVideos] = useState(null),
    [selectedVideo, setSelectVideo] = useState();

  // define a function to handle user search queries
  // we call the handleSearch function with the selected term query when the user inputs a value
  // when the function is called the state is updated
  const handleSearch = (term) =>
    YTSearch({ key: API_KEY, term }, (videos) => {
      setVideos(videos);
      setSelectVideo(videos[0]);
    });

  // useEffect Hook allows you to perform side effects in your components.
  // some examples of side effects are: fetching data, directly updating the DOM, and timers.
  useEffect(() => {
    handleSearch("Rihanna");
  }, []);

  return (
    <Container>
      <Nav>
        {/* handleSearch is passed as a prop to SearchBar component */}
        <SearchBar handleSearch={handleSearch} />
      </Nav>
      {/* initial state of the query videos is passed as a prop to VideoDetail component */}
      <VideoDetail videos={selectedVideo}>
        <VideoList
          videos={videos}
          handleSelectVideo={(selectedVideo) => setSelectVideo(selectedVideo)}
        />
      </VideoDetail>
    </Container>
  );
};

export default App;
