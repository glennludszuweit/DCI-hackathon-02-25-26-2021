import { Container, Content } from './styles';

function About() {
  return (
    <Container>
      <Content>
        <div>
          <h2>Mission</h2>
          <h1>Clean Air is your birthright!</h1>
          <p>
            We believe in a world where everyone breathes clean, fresh air. Air
            Pollution is a massive crisis. But together as Communities, we can
            tackle it. Join the Green Orb communities to donate and participate
            to make the earth green.Now is your chance to make your mark and
            bring about a definitive change in your own community all around the
            world!
          </p>
        </div>
      </Content>
      <Content style={{ background: '#268b0f' }}>
        <div>
          <h2>About us</h2>
          <h1>Communities are our Strength.</h1>
          <p>
            Green Orb is an organization that brings together all the local
            communities all over the world to work on the mission of solving the
            Air pollution crisis. We are a platform for the local communities to
            work together with like-minded people, city planners, and subject
            matter experts to approach the problem in a holistic way. We
            guarantee that all the donations will be used for the local
            communities and maintain an open book for transparency and
            accountability.
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default About;
