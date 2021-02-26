import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import { Container, Social, CopyRights } from './styles';

function Footer() {
  return (
    <Container>
      <Social>
        <p>Green Orb St. 88 62382 Berlin, Germany</p>
        <p>admin@greenorb.org</p>
        <FaInstagram size={25} style={{ marginRight: '1rem' }} />
        <FaFacebookSquare size={25} style={{ marginRight: '1rem' }} />
        <FaLinkedin size={25} style={{ margin: '1rem 1rem 0 0' }} />
      </Social>

      <CopyRights>
        All rights reserved @ <span>GREENORB</span> {new Date().getFullYear()}
      </CopyRights>
    </Container>
  );
}

export default Footer;
