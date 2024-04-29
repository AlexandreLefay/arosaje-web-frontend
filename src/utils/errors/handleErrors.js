import { useSnackbarStore } from '@stores/SnackbarStore';
import i18n from '@translations/i18n';

/**
 * Method used to handle HTTP error
 * and display alert snackbar error to give some context on what happened to the user
 * @param error HTTP error received
 * @param showError Method used to display an alert (error level) in a snackbar
 */
const handleErrors = (error) => {
  const { showError } = useSnackbarStore.getState();
  if (!error.response) {
    showError({ message: i18n.t('error.alert.NO_RESPONSE'), duration: 'normal' });
  } else if (error.response.status === 401) {
    showError({ message: i18n.t('error.alert.UNAUTHORIZED'), duration: 'normal' });
  } else if (error.response.status === 403) {
    showError({ message: i18n.t('error.alert.FORBIDDEN'), duration: 'normal' });
  } else if (error.response.data) {
    const { title: errorTitle } = error.response.data;

    // Show a specific message if exists in traduction file, else generic one
    const message = i18n.t([`error.alert.${errorTitle}`, 'error.alert.UNSPECIFIED']);
    showError({ message, duration: 'normal' });
  } else {
    console.error(error);
  }
};

export default handleErrors;
