import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import { theme } from "./customtheme";

const Cgrid: React.FC<CgridProps> = ({
  title,
  children,
  isSingleComponent = false,
  width,
  totalItemInRow,
  sidebarOpen = false,
  onClick,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const childrenArray = React.Children.toArray(children);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: "100%",
        margin: "0 auto",
        width: sidebarOpen ? "calc(100% - 250px)" : "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        {onClick && (
          <Button variant="contained" onClick={onClick}>
            Add New
          </Button>
        )}
      </Box>
      {isSingleComponent ? (
        <Grid
          container
          spacing={2}
          sx={{
            width: isMobile ? "100%" : width,
            overflowX: "auto",
          }}
        >
          {childrenArray.map((child, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {child}
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ overflowX: "auto" }}>
          {childrenArray.map((child, index) => (
            <Grid item xs={12} sm={4} md={totalItemInRow || 4} key={index}>
              <Typography sx={{ pb: 1 }}>{title[index]}</Typography>
              {child}
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Cgrid;

interface CgridProps {
  title: string | string[];
  children: ReactNode[] | ReactNode;
  isSingleComponent?: boolean;
  width?: string;
  totalItemInRow?: number;
  sidebarOpen?: boolean;
  onClick?: () => void;
}
