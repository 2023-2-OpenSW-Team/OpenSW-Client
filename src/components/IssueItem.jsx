import React from "react";
import styled from "styled-components";

function IssueItem({ issue }) {
  return (
    <IssueItemWrapper>
      <IssueItemInfo>{issue}</IssueItemInfo>
    </IssueItemWrapper>
  );
}

export default IssueItem;

const IssueItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 5rem;

  border-top: 2px solid black;
`;

const IssueItemInfo = styled.p`
  font-size: 2rem;
`;
