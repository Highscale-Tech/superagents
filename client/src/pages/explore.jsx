import Navbar from "../components/navbar";
import AnimatedSelect from "../components/select";
import { SelectValueContext } from "../components/selectValueContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./explore.module.css";

// Emulating a database by using an array (temporary)
const Explore = () => {
  const [packs, setPacks] = useState([]);
  const [talents, setTalents] = useState([]);

  let selectValues = [
    { id: "talents", label: "Talents" },
    { id: "packs", label: "Packs" },
  ];

  useEffect(() => {
    const func = async () => {
      const talentsResult = await axios.get("http://127.0.0.1:5000/talents");
      setTalents(talentsResult.data);

      const packsResult = await axios.get("http://127.0.0.1:5000/packs");
      setPacks(packsResult.data);
    };
    func();
  }, []);
  const talentGrid = talents.map((talent) => (
    <div className={styles.teamItem} key={talent}>
      {talent.type}
    </div>
  ));
  const packGrid = packs.map((pack) => (
    <div className={styles.teamItem} key={pack}>
      {pack.type}
    </div>
  ));
  const { selectedValue, setSelectedValue } = useContext(SelectValueContext);
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Build Your Team</h1>
          <AnimatedSelect values={selectValues} />
        </header>
        <div className={styles.teamGrid}>
          {selectedValue == "talents" ? talentGrid : packGrid}
        </div>
      </div>
    </div>
  );
};

export default Explore;
