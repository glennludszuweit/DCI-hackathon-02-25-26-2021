import styled from 'styled-components';

export const Container = styled.div`
  background: #00261c;
  color: #fff;
  padding: 5rem;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CopyRights = styled.p`
  font-size: 1.5rem;
  padding: 2rem 0;
  & span {
    color: #4bf83f;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const Social = styled.div`
  & p {
    font-size: 1.5rem;
  }
`;
