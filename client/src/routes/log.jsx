import { styled } from "styled-components";
import Navbar from "../components/navbar";
import { useMemo, useState } from "react";
const logs = [
  {
    id: 0,
    agentName: "James",
    message: "I've begun discussion with our new investor",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt alias quod sunt dolore deleniti nam maxime ipsum voluptatum deserunt similique! Aspernatur magnam pariatur nobis expedita at architecto incidunt facere laudantium.",
  },
  {
    id: 1,
    agentName: "Emily",
    message: "Product launch successful!",
    details:
      "The product launch was a great success, and we received overwhelming positive feedback from our customers. Sales have increased significantly, and we're looking forward to expanding our market presence.",
  },
  {
    id: 2,
    agentName: "John",
    message: "Meeting with the marketing team",
    details:
      "In the marketing team meeting, we discussed our new advertising campaign. We plan to launch it next month and target a broader audience to boost brand awareness. The team seems excited about the upcoming challenges.",
  },
  {
    id: 3,
    agentName: "Sarah",
    message: "Client meeting went well",
    details:
      "During the client meeting, we presented our latest project updates and addressed all their concerns. The client was impressed with our progress, and we managed to secure their continued partnership for the next phase of the project.",
  },
  // Add more log entries as needed...
];

const Log = () => {
  const [selectedLog, setSelectedLog] = useState(null);
  const selectedLogData = useMemo(
    () => logs.find((log) => selectedLog == log.id),
    [selectedLog]
  );

  return (
    <Wrapper>
      <Navbar />
      <Content>
        <LogList>
          {logs.map((log) => (
            <LogItem
              key={log.id}
              onClick={() => {
                setSelectedLog(log.id);
              }}
            >
              <strong>{log.agentName}</strong>: {log.message}
            </LogItem>
          ))}
        </LogList>
        <LogDetails>
          {selectedLog == null && <h1>No Log Selected</h1>}
          {selectedLog !== null && (
            <>
              <h2>{selectedLogData.message}</h2>
              <h1>Details</h1>
              <h3>{selectedLogData.details}</h3>
              <ButtonWrapper>
                <Button>Interact!</Button>
                <Button>Report!</Button>
              </ButtonWrapper>
            </>
          )}
        </LogDetails>
      </Content>
    </Wrapper>
  );
};

export default Log;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.a`
  background-color: #4d4d4d;
  color: white;
  width: 100%;
  padding: 4px;
  text-align: center;
  border-radius: 4px;
`;
const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  gap: 6rem;
`;
const Content = styled.main`
  flex-grow: 1;
  display: flex;
  gap: 3rem;
`;

const LogItem = styled.div`
  border: 3px solid #94a3b8;
  padding: 8px;
  border-radius: 8px;
  background: #f8fafc;
  &:hover {
    background: #f1f4f8;
  }
`;

const LogList = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
`;

const LogDetails = styled.div`
  width: 100%;
  background-color: #f8f7ff;
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  gap: 50px;
  flex-direction: column;
`;
