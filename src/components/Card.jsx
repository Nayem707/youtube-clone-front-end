// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { format } from 'timeago.js';

const Container = styled.div`
  margin-bottom: ${(props) => (props.type === 'sm' ? '10px' : '40px')};
  display: ${(props) => props.type === 'sm' && 'flex'};
  width: ${(props) => props.type !== 'sm' && '300px'};
  border-radius: 5px;
  cursor: pointer;
`;
const Image = styled.img`
  height: ${(props) => (props.type === 'sm' ? '120px' : '200px')};
  background-color: #999;
  border-radius: 8px;
  width: 100%;
  flex: 1;
`;
const Details = styled.div`
  margin-top: ${(props) => props.type !== 'sm' && '5px'};
  display: flex;
  gap: 8px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`;
const Texts = styled.div`
  font-weight: 400;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 18px;
`;
const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  font-size: 15px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    // to={`/video/${video._id}`}
    <Link to={`/video/1`}>
      <Container>
        <Image src='img/1.jpg' />
        <Details>
          <ChannelImage src='img/2.jpg' />
          <Texts>
            <Title>Title here are tow deffrent way</Title>
            <ChannelName>Nayem Islam</ChannelName>
            <Info>120M views • 12 years ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
