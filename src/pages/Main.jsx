import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";

function Main() {
  const [postList, setPostList] = useState([]);
  const [postText, setPostText] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8082/select`,
    })
      .then((response) => {
        setPostList(response.data.BoardList);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChangePostRegisterInput = (e) => {
    setPostText(e.target.value);
  };

  const handleClickRegisterButton = () => {
    axios({
      method: "post",
      url: `http://localhost:8082/insert`,
      data: {
        content: postText,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <MainWrapper>
      <PageTitle>게시글 목록</PageTitle>
      <PostListContainer>
        {postList.map(({ id, content }) => (
          <PostItem key={id} content={content} />
        ))}
      </PostListContainer>
      <PostRegisterWrapper>
        <PostInput
          placeholder="게시글을 입력해주세요"
          onChange={handleChangePostRegisterInput}
        />
        <RegisterButton onClick={handleClickRegisterButton}>
          등록
        </RegisterButton>
      </PostRegisterWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const PageTitle = styled.p`
  margin-top: 10rem;
  font-size: 3.5rem;
  font-weight: 600;
`;

const PostListContainer = styled.div`
  width: 50rem;
  margin-top: 3rem;

  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
`;

const PostRegisterWrapper = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-content: space-between;

  width: 50rem;
  margin-top: 10rem;
`;

const PostInput = styled.input`
  width: 40rem;
  height: 4rem;
  padding-left: 1.5rem;

  border: 1.5px solid black;
  border-radius: 0.5rem;

  font-size: 1.5rem;
`;

const RegisterButton = styled.button`
  width: 7rem;

  border: 1.5px solid black;
  border-radius: 0.5rem;

  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    background-color: lightgray;
  }
`;

export default Main;
