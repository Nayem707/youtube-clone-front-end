import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';

const Container = styled.div`
  display: flex;
  gap: 15px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Comment = () => {
  // const [channel, setChannel] = useState({});

  // useEffect(() => {
  //   const fetchComment = async () => {
  //     const res = await axios.get(`/users/find/${comment.userId}`);
  //     setChannel(res.data);
  //   };
  //   fetchComment();
  // }, [comment.userId]);

  return (
    <Container>
      <Avatar src='/img/1.jpg' />
      <Details>
        <Name>
          Nasir hassan <Date>1 day ago</Date>
        </Name>
        <Text>Comment description in here!</Text>
        <Buttons>
          <Button>
            <ThumbUpIcon />
          </Button>
          <Button>
            <ThumbDownOffAltOutlinedIcon />
          </Button>
        </Buttons>
      </Details>
    </Container>
  );
};

export default Comment;
