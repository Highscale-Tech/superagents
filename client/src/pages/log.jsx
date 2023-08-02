import Navbar from "../components/navbar";
import styles from "./log.module.css";
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
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.logList}>
          {logs.map((log) => (
            <div
              className={styles.logItem}
              key={log.id}
              onClick={() => {
                setSelectedLog(log.id);
              }}
            >
              <strong>{log.agentName}</strong>: {log.message}
            </div>
          ))}
        </div>
        <div className={styles.logDetails}>
          {selectedLog == null && <h1>No Log Selected</h1>}
          {selectedLog !== null && (
            <>
              <h2>{selectedLogData.message}</h2>
              <h1>Details</h1>
              <h3>{selectedLogData.details}</h3>
              <div className={styles.buttonWrapper}>
                <button className={styles.button}>Interact!</button>
                <button className={styles.button}>Report!</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Log;
