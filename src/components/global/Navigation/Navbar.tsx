import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import YardIcon from '@mui/icons-material/Yard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Navbar.module.scss';
import { logout } from '@api/login/AuthAPI';
import { useTranslation } from 'react-i18next';

/**
 * Navbar component that renders the application's navigation bar.
 *
 * @returns {JSX.Element} The rendered Navbar component.
 */
export const Navbar = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();

  /**
   * Used to store the pages and settings that will be displayed in the navigation bar.
   */
  const pages = [
    { route: '/mes-plantes', name: t('menu.plant'), image: '/assets/menu/plant.png' },
    { route: '/gardes', name: t('menu.guard'), image: '/assets/menu/guard.png' },
    { route: '/tickets', name: t('menu.ticket'), image: '/assets/menu/gant.png' }
  ];

  const settings = [
    { name: t('menu.profile'), action: () => console.log('Profil...') },
    { name: t('menu.logout'), action: logout }
  ];

  /**
   * Handles opening the navigation menu.
   *
   * @param {React.MouseEvent<HTMLElement>} event - The event triggered when the navigation menu is opened.
   */
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  /**
   * Handles opening the user menu.
   *
   * @param {React.MouseEvent<HTMLElement>} event - The event triggered when the user menu is opened.
   */
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  /**
   * Handles closing the navigation menu.
   */
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /**
   * Handles closing the user menu.
   */
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={styles.container}>
        <Toolbar disableGutters>
          <YardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Box className={`${styles.navMenu} ${styles.mobile}`}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <YardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box className={styles.navMenu} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ButtonBase
                key={page.name}
                onClick={() => (window.location.href = page.route)}
                className={styles.cardButton}
              >
                <Card className={styles.card}>
                  <CardContent className={styles.test}>
                    <img src={page.image} alt={page.name} className={styles.plantImage} />
                    <Typography textAlign="center" variant="h6">
                      {page.name}
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} className={styles.avatar}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={() => {
                    handleCloseUserMenu();
                    setting.action();
                  }}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
