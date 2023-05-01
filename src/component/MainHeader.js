import * as React from 'react';
 import search from '@mui/icons-material/Search';
 import { styled, alpha } from '@mui/material/styles';
 import AppBar from '@mui/material/AppBar';
 import Box from '@mui/material/Box';
 import Toolbar from '@mui/material/Toolbar';
 import IconButton from '@mui/material/IconButton';
 import Typography from '@mui/material/Typography';
 import InputBase from '@mui/material/InputBase';
 import Badge from '@mui/material/Badge';
 import MenuItem from '@mui/material/MenuItem';
 import Menu from '@mui/material/Menu';
 import MenuIcon from '@mui/icons-material/Menu';
 import SearchIcon from '@mui/icons-material/Search';
 import AccountCircle from '@mui/icons-material/AccountCircle';
 import MailIcon from '@mui/icons-material/Mail';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import MoreIcon from '@mui/icons-material/MoreVert';

 const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));


const MainHeader = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  

  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ marginLeft: 2 ,marginRight:5 }}
          >
            <MenuIcon />
          </IconButton>
         
          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase sx={{width:400}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <img src='data:image/png;base64,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'></img>
           
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>

  )
}

export default MainHeader
