import { Grid, Typography, useMediaQuery } from "@mui/material";
import React, { ReactNode } from "react";
import { theme } from "./customtheme";

const Cgrid: React.FC<CgridProps> = ({
  title,
  children,
  isSingleComponent = false,
  width,
  totalItemInRow,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const childrenArray = React.Children.toArray(children);

  return (
    <div>
      {isSingleComponent ? (
        <Grid className={`${isMobile ? "w-full" : width}`}>
          {childrenArray.map((child, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography>{title}</Typography>
              {child}
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="py-2">
          <Grid container spacing={2}>
            {childrenArray.map((child, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={totalItemInRow == null ? 4 : 0}
                key={index}
              >
                <Typography className="pb-2">{title[index]}</Typography>
                {child}
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Cgrid;

interface CgridProps {
  title: string[];
  children: ReactNode[] | ReactNode;
  isSingleComponent?: boolean;
  width?: string;
  totalItemInRow?: number;
  // sx?: SxProps<Theme>;
}
