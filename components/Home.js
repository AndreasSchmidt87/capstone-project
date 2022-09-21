import styled from "styled-components";

const Main = styled.main`
  padding: 0 2rem;
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

@media (max-width: 600px) {
  grid {
    width: 100%;
    flex-direction: column;
  }
}

@media (prefers-color-scheme: dark) {
  card,
  footer {
    border-color: #222;
  }
  code {
    background: #111;
  }
  logo img {
    filter: invert(1);
  }
}
`;

export default Main;