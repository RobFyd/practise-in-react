import styled, { css } from "styled-components";

const Button = ({ className }) => (
  <button className={className}>
    New Btn
  </button>
);

const StyledButton = styled(Button)`
  border: 2px solid crimson;
  box-shadow: 0 0 4px black;
  padding: 10px;
  margin: 10px;
  background: white;
  color: crimson;
  text-decoration: none;
`;

function App() {
  return (
    <>
      <StyledButton>Click me</StyledButton>
    </>
  )
}

export default App;