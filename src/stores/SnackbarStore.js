import { create } from 'zustand';

/**
 * Method used to compare two snackbars based on severity and message properties
 * @param snackbar1 first snackbar to compare with the second
 * @param snackbar2 second snackbar to compare with the first
 */
const isSnackbarEqual = (snackbar1, snackbar2) =>
  snackbar1.message === snackbar2.message && snackbar1.severity === snackbar2.severity;

/**
 * Method used to get the autoHide duration in ms
 * @param duration provided duration
 * @returns the duration value in ms
 */
const getAutoHideDuration = (duration) => {
  switch (duration) {
    case undefined:
      return 4000;
    case 'short':
      return 4000;
    case 'normal':
      return 6000;
    case 'long':
      return 10000;
    case null:
      return null;
  }
};

export const useSnackbarStore = create((set, get) => ({
  snackbarQueue: [],
  setSnackbarQueue: (newSnackbarQueue) => set(() => ({ snackbarQueue: newSnackbarQueue })),
  showSnackbar: (severity, options) => {
    const newSnackbar = {
      severity,
      message: options.message,
      autoHideDuration: getAutoHideDuration(options.duration),
      unique: options.unique ?? true
    };

    const { snackbarQueue } = get();
    const hasSameSnackbarInQueue = snackbarQueue.some((snackbarEntry) => isSnackbarEqual(snackbarEntry, newSnackbar));
    if (!newSnackbar.unique || !hasSameSnackbarInQueue) {
      set(() => ({ snackbarQueue: [...snackbarQueue, newSnackbar] }));
    }
  },
  showSuccess: (options) => get().showSnackbar('success', options),
  showInfo: (options) => get().showSnackbar('info', options),
  showWarning: (options) => get().showSnackbar('warning', options),
  showError: (options) => get().showSnackbar('error', options)
}));
