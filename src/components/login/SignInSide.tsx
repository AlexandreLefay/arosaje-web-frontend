import React, { useState } from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import styles from './SignInSide.module.scss';
import { useAuthStore } from '@hooks/contexts/useStore';
import { login } from '@api/login/AuthAPI';

export const SignInSide = observer(() => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    await login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/welcome" />;
  }

  return (
    <Grid container component="main" className={styles.container}>
      <Grid item xs={false} sm={4} md={7} className={`${styles.background}`} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('login.title')}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} className={styles.form}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('login.form.email')}
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t('login.form.password')}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('login.form.rememberMe')}
            />
            {error && <Alert severity="error">{error}</Alert>}
            <Button type="submit" fullWidth variant="contained" className={styles.submit} disabled={loading}>
              {loading ? <CircularProgress size={24} /> : t('login.form.submit')}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {t('login.signup')}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" align="center" className={styles.copyright}>
              {'Copyright © '}
              <Link color="inherit" href="alexandrelefay.com">
                Alexandre Lefay
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
});
