import styled from "styled-components";

export const Container = styled.button`
  border: 1px solid var(--c-lGreen);
  border-radius: 100rem;
  padding: 0.5rem 1rem;

  color: var(--c-lGreen);
  transition: 0.1s ease-in-out;

  span {
    margin-left: 0.5rem;
    font-size: var(--fz-sm);
  }

  &:hover {
    background-color: var(--c-lGreen);
    color: var(--c-dGreen);
  }
`;
