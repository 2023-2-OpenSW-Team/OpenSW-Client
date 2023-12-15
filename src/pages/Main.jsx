import styled from "styled-components";
import IssueItem from "../components/IssueItem";

function Main() {
  return (
    <MainWrapper>
      <PageTitle>이슈 목록</PageTitle>
      <IssueContainer>
        <IssueItem issue={"이재현 바보"} />
        <IssueItem issue={"이재현 바보2"} />
        <IssueItem issue={"이재현 바보3"} />
        <IssueItem issue={"이재현 바보4"} />
        <IssueItem issue={"이재현 바보5"} />
      </IssueContainer>
      <IssueRegisterWrapper>
        <IssueInput placeholder="이슈를 입력해주세요" />
        <RegisterButton>등록</RegisterButton>
      </IssueRegisterWrapper>
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

const IssueContainer = styled.div`
  width: 50rem;
  margin-top: 3rem;

  border-left: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
`;

const IssueRegisterWrapper = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-content: space-between;

  width: 50rem;
  margin-top: 10rem;
`;

const IssueInput = styled.input`
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
