import { HeaderContainer } from './styles';

function Header({ geocodeData, airData, city, setCity }) {
  return (
    <div style={{}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div>
          <input type='search' onChange={(e) => setCity(e.target.value)} />
          <h1>{city.toUpperCase()}</h1>
          <h2>
            {geocodeData.adminArea3}, {geocodeData.adminArea1}
          </h2>
        </div>
        <div>
          <h1>Air Pollution Rate</h1>
          <ul>
            <li>{airData.co}</li>
            <li>{airData.no}</li>
            <li>{airData.no2}</li>
            <li>{airData.o3}</li>
            <li>{airData.no2}</li>
            <li>{airData.no2}</li>
            <li>{airData.no2}</li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
