import { createTheme } from '@mui/material/styles';
import colors from '@styles/colors.module.scss';
import fonts from '@styles/fonts.module.scss';
import variables from '@styles/variables.module.scss';

const getValueFromSassPxVar = (variable) => Number(variable.slice(0, -2));

/**
 * MUI configuration to custom the provided default theme
 */
export const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        SelectProps: {
          MenuProps: {
            disableScrollLock: false
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'flex-start',

          '&.Mui-error::before': {
            content: '""',
            width: variables.appAlertIconSize,
            height: variables.appAlertIconSize,
            backgroundSize: 'cover',
            backgroundImage: 'url(/assets/warning.svg)',
            marginRight: variables.appAlertIconMarginR,
            paddingRight: variables.appAlertIconSize
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          backgroundColor: colors.blueVariantLight
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        standardWarning: {
          backgroundColor: colors.alertWarningBg,
          color: colors.alertWarningMessage
        },
        standardInfo: {
          backgroundColor: colors.alertInfoBg,
          color: colors.alertInfoMessage
        },
        standardSuccess: {
          backgroundColor: colors.alertSuccessBg,
          color: colors.alertSuccessMessage
        },
        standardError: {
          backgroundColor: colors.alertErrorBg,
          color: colors.alertErrorMessage
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '37px',
          padding: '8px 22px'
        },
        outlinedPrimary: {
          borderColor: colors.blueVariantMain,
          '&:hover': {
            borderColor: colors.blueVariantDark
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          wordBreak: 'break-word'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: colors.appBackground,
            border: 'solid 1px',
            borderColor: colors.defaultFont
          }
        }
      }
    }
  },
  palette: {
    primary: {
      main: colors.primary
    },
    warning: {
      main: colors.muiWarningMain
    },
    info: {
      main: colors.muiInfoMain
    },
    success: {
      main: colors.muiSuccessMain
    },
    error: {
      main: colors.muiErrorMain
    },
    text: {
      primary: colors.defaultFont
    },
    background: {
      default: colors.appBackground
    }
  },
  typography: {
    fontFamily: fonts.$fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    h1: {
      fontWeight: 500,
      fontSize: '2.125rem',
      letterSpacing: '1px'
    },
    h2: {
      fontWeight: 300,
      fontSize: '2rem',
      letterSpacing: '-0.5px'
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.875rem'
    },
    h4: {
      fontWeight: 300,
      fontSize: '1.625rem'
    },
    h5: {
      fontWeight: 300,
      fontSize: '1.375rem'
    },
    h6: {
      fontWeight: 300
    },
    button: {
      fontWeight: 500,
      fontSize: '0.9375rem'
    }
  },
  breakpoints: {
    values: {
      xs: getValueFromSassPxVar(variables.breakpointExtraSmall),
      sm: getValueFromSassPxVar(variables.breakpointSmall),
      md: getValueFromSassPxVar(variables.breakpointMedium),
      lg: getValueFromSassPxVar(variables.breakpointLarge),
      xl: getValueFromSassPxVar(variables.breakpointExtraLarge)
    }
  }
});
