import { useAuth0 } from '@auth0/auth0-react';
import { observer } from 'mobx-react-lite';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import styles from './SignInSide.module.scss';

export const SignInSide = observer(() => (
  <Box className={styles.container}>
    <AuthCard />
  </Box>
));

const AuthCard = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h4" className={styles.title}>
          Arosaje
        </Typography>
        <Button variant="contained" color="primary" fullWidth onClick={() => loginWithRedirect()}>
          Log In with Google
        </Button>
      </CardContent>
    </Card>
  );
};
