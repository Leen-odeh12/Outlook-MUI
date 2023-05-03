import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import List from '@mui/material/List';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import ModeIcon from '@mui/icons-material/Mode';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import SearchIcon from '@mui/icons-material/Search';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DirectionsIcon from '@mui/icons-material/Directions';
import ListItemButton from '@mui/material/ListItemButton';
import SendIcon from '@mui/icons-material/Send';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Tooltip } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
const drawerWidth = 240;
const Header = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <DragIndicatorIcon></DragIndicatorIcon>
                        {/* ------------ */}
                        <Paper
                            component="form"
                            sx={{ p: '2px 7px', display: 'flex', alignItems: 'center', marginLeft: "90px", marginRight: "400px", width: 350, backgroundColor: '#C7E0F4', height: '40px' }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{ backgroundColor: '#C7E0F4' }} />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search ... "
                                inputProps={{ 'aria-label': 'search ...' }}
                            />

                        </Paper>
                        {/* ------------ */}

                        <CloudOffIcon sx={{ opacity: "80%", marginRight: "20px" }}></CloudOffIcon>

                        <ChecklistIcon sx={{ opacity: "80%", marginRight: "20px" }}></ChecklistIcon>

                        <SettingsIcon sx={{ opacity: "80%", marginRight: "20px" }}></SettingsIcon>
                        <QuestionMarkIcon sx={{ opacity: "80%", marginRight: "20px" }}> </QuestionMarkIcon>

                        <PrivacyTipIcon sx={{ opacity: "80%", marginRight: "50px" }}></PrivacyTipIcon>

                        <Avatar alt="Leen Odeh" src="/broken-image.jpg" sx={{ backgroundColor: "#C7E0F4" }} />




                    </Toolbar>
                </AppBar>
      {/* ****************************************************************************************** */}
      <Drawer 
       PaperProps={{
        sx: {
          backgroundColor: "#F3F2F1",
       
        }
      }}
        variant="permanent"
        sx={{ 
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflowy: 'hidden' }}>
          <List>
          <MenuIcon sx={{color:"#005A9E",paddingTop:"7px"}}> </MenuIcon>
          <Button variant="contained" disableElevation sx={{marginLeft:"25px"}} >
  New Message
</Button>
            {[' Favorites', 'Folders ', ' Inbox','Scheduled  ', 'Deleted Items  ', 'Archive ','Notes','Sent Items', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton> 
                  <ListItemIcon>
                  {index === 0 ? <ArrowForwardIosIcon></ArrowForwardIosIcon> : <></>}
                  {index === 1? <MoveToInboxIcon></MoveToInboxIcon> : <></>}

                    {index=== 2? <FolderSharedIcon></FolderSharedIcon> : <></>}
                    {index=== 3? <DateRangeIcon></DateRangeIcon> : <></>}
                    {index=== 4? <AutoDeleteIcon></AutoDeleteIcon> : <></>}
                    {index=== 5?  <BookmarkIcon></BookmarkIcon>: <></>}
                    {index=== 6? <TextSnippetIcon></TextSnippetIcon>  : <></>}
                            {index  === 7 ? <SendIcon></SendIcon> : <></>}
                            {index === 8 ? <ModeIcon></ModeIcon> : <></>}

                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

   
      </Box>
    </Box>
    </div>
  )
}

export default Header
