import styled from 'styled-components';

export const BodyContainer = styled.div`
  text-align: center;
  background: #faffe5;
  padding: 10rem 0;
  @media only screen and (max-width: 600px) {
    padding: 5rem 0;
  }
`;

export const BodyTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  height: 30rem;
  width: 40rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  margin: 1rem;
  background: #fff;

  @media only screen and (max-width: 850px) {
    width: 30rem;
  }

  @media only screen and (max-width: 600px) {
    width: 30rem;
    height: auto;
  }
`;

export const CardTitle = styled.div`
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  color: #06160e;
  padding: 1rem 0;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const CardBody = styled.p`
  font-size: 1.9rem;
  text-align: left;
  padding: 1.5rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
`;
