import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #fff;

  @media only screen and (max-width: 1096px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  padding: 10rem;
  width: 100%;
  background: #103909;
  display: flex;

  & div {
    margin: 0 auto;

    & h1 {
      font-size: 3.5rem;
      margin-bottom: 2rem;
    }

    & p {
      font-size: 1.75rem;
    }

    & h2 {
      text-align: center;
      width: 20rem;
      font-size: 2rem;
      margin: 2rem 0;
      padding: 1rem 2rem;
      border: 1px solid #49f400;
    }
  }

  @media only screen and (max-width: 850px) {
    padding: 5rem;

    & div {
      width: 100%;
    }
  }
`;
