import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  // const { currentUser } = useSelector((state) => state.user);
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const res = await axios.get(`/comments/${videoId}`);
  //       setComments(res.data);
  //     } catch (err) {}
  //   };
  //   fetchComments();
  // }, [videoId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  return (
    <Container>
      <NewComment>
        <Avatar src='/img/3.jpg' />
        <Input placeholder='Add a comment...' />
      </NewComment>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
