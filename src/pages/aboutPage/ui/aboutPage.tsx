import { Container } from '@mui/material';
import { WorkersList } from 'entities/workersList';
import { PageTitle } from 'entities/pageTitle';

const AboutPage = () => {
  return (
    <Container>
      <PageTitle text="We're creating for you" isAuthorizated={true} />
      <WorkersList />
    </Container>
  );
};

export default AboutPage;
