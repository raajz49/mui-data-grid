// components/Header.tsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

interface HeaderProps {
  onToggleDrawer: () => void; // No arguments
  drawerOpen: boolean; // Prop to determine if the drawer is open
}

const Header: React.FC<HeaderProps> = ({ onToggleDrawer, drawerOpen }) => {
  return (
    <AppBar position="fixed">
      <Toolbar
        style={{
          marginLeft: drawerOpen ? 240 : 0,
          transition: "margin-left 0.3s",
        }}
      >
        {" "}
        {/* Move header with drawer */}
        <IconButton edge="start" color="inherit" onClick={onToggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">My Application</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
