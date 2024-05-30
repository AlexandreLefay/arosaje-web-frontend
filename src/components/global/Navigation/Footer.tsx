import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { availableLanguages } from '@utils/constants/AvailableLanguages';

export const Footer = () => {
  const [value, setValue] = React.useState(0);
  const { t, i18n } = useTranslation();

  /**
   * Handle the translation of our app by giving the corresponding language key
   * @param lng key used to switch the i18n language according to the translation file located in /translations/${lng}/${lng}.json
   */
  const handleTranslate = (lng: string | undefined) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <Box className={styles.footerContainer}>
      <BottomNavigation
        className={styles.footer}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Box className={styles.languageButtons}>
          {availableLanguages.map((lng) => (
            <Button
              key={lng}
              variant={i18n.language === lng ? 'contained' : 'outlined'}
              onClick={() => handleTranslate(lng)}
            >
              {t(`language.${lng}`)}
            </Button>
          ))}
        </Box>
      </BottomNavigation>
    </Box>
  );
};
