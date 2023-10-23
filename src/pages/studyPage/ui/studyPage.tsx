import { Container } from '@mui/material';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getToken } from 'app/tanstackQuery/token';
import { PageTitle } from 'entities/pageTitle';
import { AddNewModule } from 'features/addNewModule';
import { userResponse } from 'widgets/header';

const StudyPage = () => {
  const { data: user }: UseQueryResult<userResponse, unknown> = useQuery({
    queryKey: ['user'],
  });
  const token = getToken();
  const titleText = `Hello ${user?.data?.firstName}! Are you ready to learning?`;
  console.log(!!token);
  return (
    <Container>
      <PageTitle text={titleText} isAuthorizated={!!token} />
      <AddNewModule isAuthorizated={!!token} />
    </Container>
  );
};

export default StudyPage;
