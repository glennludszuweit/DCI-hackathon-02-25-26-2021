import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

import { Container, Social, CopyRights } from './styles';

function Footer() {
  return (
    <Container>
      <Social>
        <p>Green Orb St. 88 62382 Berlin, Germany</p>
        <p>admin@greenorb.org</p>
        <a
          href='https://www.instagram.com/greenorb.community/'
          target='_blank'
          rel='noreferrer'
        >
          <FaInstagram size={25} style={{ marginRight: '1rem' }} />
        </a>
        <a
          href='https://www.facebook.com/Green-Orb-105292428281088'
          target='_blank'
          rel='noreferrer'
        >
          <FaFacebookSquare size={25} style={{ marginRight: '1rem' }} />
        </a>
        <FaLinkedin size={25} style={{ margin: '1rem 1rem 0 0' }} />
      </Social>

      <CopyRights>
        All rights reserved @ <span>GREENORB</span> {new Date().getFullYear()}
      </CopyRights>
    </Container>
  );
}

export default Footer;
