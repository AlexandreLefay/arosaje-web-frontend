import { Button, Stack, Typography } from '@mui/material';
import { availableLanguages } from '@utils/constants/AvailableLanguages';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '@hooks/contexts/useStore';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';

/**
 * Page that contains all the components displayed on the application homepage
 */
export const Welcome = observer(() => {
  const { t, i18n } = useTranslation();
  const authStore = useAuthStore();

  /**
   * Handle the translation of our app by giving the corresponding language key
   * @param lng key used to switch the i18n language according to the translation file located in /translations/${lng}/${lng}.json
   */
  const handleTranslate = (lng: string | undefined) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  if (!authStore.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Typography variant="h2">{t('common.message.welcome')}</Typography>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h6">{t('common.message.selectLanguage')} :</Typography>
          {availableLanguages.map((lng) => (
            <Button
              key={lng}
              variant={i18n.language === lng ? 'contained' : 'outlined'}
              onClick={() => handleTranslate(lng)}
            >
              {t(`language.${lng}`)}
            </Button>
          ))}
        </Stack>
      </Stack>
    </>
  );
});
