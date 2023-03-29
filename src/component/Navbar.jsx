import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Menu,
  MenuItem 
} from "@mui/material";
// import PetsIcon from '@mui/icons-material/Pets';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

let TB = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "theme.shape.borderRadius",
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: 'none',
  alignItems:'center',
  gap:'20px',
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: 'flex',
  alignItems:'center',
  gap:'10px',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <TB>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Minmin
        </Typography>
        <DarkModeIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error"> 
          <Notifications/>
          </Badge>
          <Avatar sx={{width:40, height:40}} onClick={(e)=>setOpen(true)} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </Icons>

        <UserBox onClick={(e)=>setOpen(true)} >
        <Avatar sx={{width:40, height:40}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <Typography variant="span">Punpun</Typography>

        </UserBox>
      </TB>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // ให้อ้างอิงจาก state
        open={open}
        //=====================
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
