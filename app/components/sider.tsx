// components/AnchorTemporaryDrawer.tsx
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { blue } from "@mui/material/colors";
import { Typography } from "@mui/material";
import Header from "./header";

type Anchor = "left";

interface AnchorTemporaryDrawerProps {
  onDrawerToggle: () => void; // Accept the toggle function as a prop
}

export default function AnchorTemporaryDrawer({
  onDrawerToggle,
}: AnchorTemporaryDrawerProps) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = () => {
    setState((prevState) => ({ left: !prevState.left }));
    onDrawerToggle(); // Call the prop function to toggle the drawer in the layout
  };

  const list = (anchor: Anchor) => (
    <Box role="presentation">
      <Box bgcolor={blue[600]} p={2}>
        <Typography variant="h6" color="white">
          Dashboard
        </Typography>
      </Box>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Header onToggleDrawer={toggleDrawer} drawerOpen={state.left} />
      <Drawer
        variant="persistent"
        anchor="left"
        open={state.left}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        {list("left")}
      </Drawer>
    </div>
  );
}
