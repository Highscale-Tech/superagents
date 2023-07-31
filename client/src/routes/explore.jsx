import { styled } from "styled-components";
import Navbar from "../components/navbar";
import AnimatedSelect from "../components/select";
import { SelectValueProvider } from "../components/selectValueContext";
import { SelectValueContext } from "../components/selectValueContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
const TeamGrid = styled.section`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
`;
const TeamItem = styled.div`
  border: 4px #4b4b4b solid;
  border-radius: 8px;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;
const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  gap: 6rem;
`;
const Content = styled.div`
  flex-grow: 1;
  padding: 10px;
  border-radius: 8px;
`;

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
    <TeamItem key={talent}>{talent.description}</TeamItem>
  ));
  const packGrid = packs.map((pack) => (
    <TeamItem key={pack}>{pack.name}</TeamItem>
  ));
  const { selectedValue, setSelectedValue } = useContext(SelectValueContext);
  return (
    <Wrapper>
      <Navbar />
      <Content>
        <Header>
          <h1>Build Your Team</h1>
          <AnimatedSelect values={selectValues} />
        </Header>
        <TeamGrid>
          {selectedValue == "talents" ? talentGrid : packGrid}
        </TeamGrid>
      </Content>
    </Wrapper>
  );
};

export default Explore;
