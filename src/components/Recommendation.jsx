// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  flex: 2;
`;

const Recommendation = () => {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     const res = await axios.get(`/videos/tags?tags=${tags}`);
  //     setVideos(res.data);
  //   };
  //   fetchVideos();
  // }, [tags]);

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Recommendation;
