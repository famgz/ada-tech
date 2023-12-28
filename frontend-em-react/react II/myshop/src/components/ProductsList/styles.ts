import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  height: 100%;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    flex: 1 300px; // esticar ao maximo com no minimo 300px
  }
`