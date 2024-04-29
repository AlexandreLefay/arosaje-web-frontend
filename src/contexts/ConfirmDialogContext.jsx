import ConfirmDialog from '@components/global/Dialog/ConfirmDialog';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

/** Define component props */
ConfirmDialogProvider.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * Provider that handles the confirm dialog context
 * @param param0 Rest of the app
 * @returns The prepared dialog provider for the app
 */
export function ConfirmDialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  const [dialogOptions, setDialogOptions] = useState();
  const [confirmDialogPromise, setConfirmDialogPromise] = useState(() => '');

  /**
   * Opens the confirm dialog with the specified parameter
   *
   * @param newDialogOptions Object containing the keys of the title, description, the message for agreeing and the message for disagreeing with the provided dialog.
   * @returns A promise resolved when the user agrees or disagrees.
   */
  const openConfirmDialog = (newDialogOptions) => {
    setDialogOptions({
      ...newDialogOptions
    });
    setOpen(true);
    return new Promise()((resolve) => {
      setConfirmDialogPromise(() => resolve);
    });
  };

  /**
   * Resolves the promise when the user agrees with the confirm dialog
   */
  const onAccept = () => {
    setOpen(false);
    confirmDialogPromise(true);
  };

  /**
   * Resolves the promise when the users disagrees with the confirm dialog
   */
  const onRefuse = () => {
    setOpen(false);
    confirmDialogPromise(false);
  };

  return (
    <ConfirmDialogContext.Provider
      value={{
        open,
        openConfirmDialog
      }}
    >
      {children}
      {open && dialogOptions && (
        <ConfirmDialog
          titleKey={dialogOptions.titleKey}
          descriptionKey={dialogOptions.descriptionKey}
          agreeMessageKey={dialogOptions.agreeMessageKey}
          disagreeMessageKey={dialogOptions.disagreeMessageKey}
          onAccept={onAccept}
          onRefuse={onRefuse}
        />
      )}
    </ConfirmDialogContext.Provider>
  );
}

export const ConfirmDialogContext = createContext({});
