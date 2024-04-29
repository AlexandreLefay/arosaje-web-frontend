import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box className={styles.container}>
      <Stack alignItems="center" gap={2}>
        <Typography variant="h1">{t('notFound.title')}</Typography>
        <Typography variant="h6">{t('notFound.message')}</Typography>
        <Button variant="contained" endIcon={<ArrowForward />} onClick={() => navigate('/')}>
          {t('notFound.button.redirect')}
        </Button>
      </Stack>
    </Box>
  );
}
