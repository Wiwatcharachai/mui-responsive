import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
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
}));

function Navbar() {
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
          <Avatar sx={{width:30, height:30}} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
        </Icons>
      </TB>
    </AppBar>
  );
}

export default Navbar;
