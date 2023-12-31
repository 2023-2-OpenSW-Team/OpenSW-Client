import React from "react";
import styled from "styled-components";

function PostItem({ content }) {
  return (
    <PostItemWrapper>
      <PostItemInfo>{content}</PostItemInfo>
    </PostItemWrapper>
  );
}

const PostItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5rem;

  border-top: 2px solid black;
`;

const PostItemInfo = styled.p`
  font-size: 2rem;
`;

export default PostItem;
