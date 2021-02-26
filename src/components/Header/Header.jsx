import { HeaderContainer, Content, Search, HeaderImage } from './styles';
import GoodImg from '../../images/good.jpg';
import ModerateImg from '../../images/moderate.jpg';
import BadImg from '../../images/bad.jpg';
import Logo from '../../images/logo.png';

function Header({ geocodeData, airData, AQI, city, setCity }) {
  return (
    <HeaderContainer>
      <HeaderImage
        src={
          AQI === 1 || AQI === 2
            ? GoodImg
            : AQI === 3 || AQI === 4
            ? ModerateImg
            : BadImg
        }
        alt='Logo'
      />
      <Content>
        <img src={Logo} alt='Logo' />
        <Search
          type='search'
          placeholder='Search city air quality...'
          onChange={(e) => setCity(e.target.value)}
        />
        {city ? (
          <>
            <h1>{city.toUpperCase()}</h1>
            <h2>
              {geocodeData.adminArea3
                ? geocodeData.adminArea3
                : city.toUpperCase()}
              , {geocodeData.adminArea1}
            </h2>
            <p>
              {AQI === 1 || AQI === 2
                ? 'Good'
                : AQI === 3 || AQI === 4
                ? 'Average'
                : 'Bad'}{' '}
              air quality.
            </p>
          </>
        ) : null}
      </Content>
    </HeaderContainer>
  );
}

export default Header;
