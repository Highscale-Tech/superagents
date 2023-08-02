import { Link } from "react-router-dom";
import { styled } from "styled-components";

function IndexPage() {
  return (
    <Wrapper>
      <Container>
        <img src="/logo-dark.png" alt="" />
        <StyledLink to="/explore">Get Started</StyledLink>
      </Container>
    </Wrapper>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
const StyledLink = styled(Link)`
  background-color: #172554;
  color: white;
  width: fit-content;
  font-weight: 500;
  padding: 8px 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  // This adds a subtle animation when hovering
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  // On Hover change background color
  &:hover {
    background: #183174;
  }
`;
const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IndexPage;
