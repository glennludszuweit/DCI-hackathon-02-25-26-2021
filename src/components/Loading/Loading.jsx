import Loader from 'react-loader-spinner';
import { LoadingContainer } from './styles';

function Loading() {
  return (
    <LoadingContainer>
      <Loader
        type='Circles'
        color='#36bb00'
        height={100}
        width={100}
        timeout={5000}
      />
    </LoadingContainer>
  );
}

export default Loading;
