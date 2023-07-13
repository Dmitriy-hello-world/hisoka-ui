import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Link to="/study">to study</Link>
    </Container>
  );
};

export default HomePage;
