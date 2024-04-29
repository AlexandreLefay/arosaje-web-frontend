import { ConfirmDialogContext } from '@contexts/ConfirmDialogContext';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

/** Define component props */
ConfirmDialog.propTypes = {
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.string.isRequired,
  agreeMessageKey: PropTypes.string.isRequired,
  disagreeMessageKey: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onRefuse: PropTypes.func.isRequired
};

/**
 * The appearance of the confirm dialog button
 * To be used with confirm dialog context {@link ConfirmDialogContext}
 * @returns A simple dialog with a title, description and two buttons
 */
export default function ConfirmDialog({
  titleKey,
  descriptionKey,
  agreeMessageKey,
  disagreeMessageKey,
  onAccept,
  onRefuse
}) {
  const { t } = useTranslation();
  const { open } = useContext(ConfirmDialogContext);
  return (
    <Dialog
      open={open}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
          onAccept();
        }
      }}
    >
      <DialogTitle>{t(titleKey)}</DialogTitle>

      <DialogContent>
        <DialogContentText>{t(descriptionKey)}</DialogContentText>
      </DialogContent>

      <DialogActions>
        {/* Closes the dialog without any change */}
        <Button onClick={onRefuse}>{t(disagreeMessageKey)}</Button>

        {/* Closes the dialog and continues */}
        <Button onClick={onAccept}>{t(agreeMessageKey)}</Button>
      </DialogActions>
    </Dialog>
  );
}
