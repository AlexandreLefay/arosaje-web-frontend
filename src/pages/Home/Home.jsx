import { Button, Stack, Typography } from '@mui/material';
import { availableLanguages } from '@utils/constants/AvailableLanguages';
import { useTranslation } from 'react-i18next';

/**
 * Page that contains all the components displayed on the application homepage
 */
export default function Home() {
  const { t, i18n } = useTranslation();

  /**
   * Handle the translation of our app by giving the corresponding language key
   * @param lng key used to switch the i18n language according to the translation file located in /translations/${lng}/${lng}.json
   */
  const handleTranslate = (lng) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

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
}
