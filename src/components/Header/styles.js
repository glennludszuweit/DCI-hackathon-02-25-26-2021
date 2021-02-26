import styled from 'styled-components';

export const HeaderContainer = styled.div`
  min-height: 60vh;
  background-position: center;
  background-size: cover;
  padding: 5rem 0;
  border-bottom: 0.5rem solid #1c6d3b;
  position: relative;
`;

export const HeaderImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.7;
  filter: brightness(70%);
`;

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 50rem;
  color: #06160e;
  z-index: 10;
  white-space: initial;
  word-wrap: break-word;

  & h1 {
    font-size: 5rem;
    margin: 1rem 0;
  }
  & h2 {
    font-size: 3rem;
  }
  & p {
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    width: 30rem;

    & h1 {
      font-size: 3.5rem;
      margin: 1rem 0;
    }
    & h2 {
      font-size: 2rem;
    }
    & p {
      font-size: 2rem;
    }

    & img {
      width: 100%;
    }
  }
`;

export const Search = styled.input`
  border-color: #1c6d3b;
  color: #06160e;
  width: 100%;
  padding: 1rem;
  margin-bottom: 5rem;
  font-size: 2.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
