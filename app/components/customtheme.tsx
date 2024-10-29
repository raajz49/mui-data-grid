import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
// import type {} from "@mui/x-date-pickers/themeAugmentation";

const primary = {
  main: "#009EF7",
  light: "#009EF7",
  dark: "#1565c0",
  contrastText: "#fff",
};

export const theme = createTheme({
  palette: {
    primary: primary,
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    h2: {
      fontSize: "16px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
      fontSize: "13px",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 700,
      marginBottom: "16px",
    },
    body1: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "14px",
      color: "#BEC8D0",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "'Montserrat', sans-serif";
          font-style: bold;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          alignItems: "center",

          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row:hover": {
            cursor: "default",
          },
        },
        row: {
          "&.Mui-selected": {
            backgroundColor: "rgb(247, 246, 254,0.8)",
            "&:hover": {
              backgroundColor: "#F9F9FB",
            },
          },
        },
        cell: {
          padding: "0px 0 0px 12px",
          display: "flex",
          alignItems: "center",
        },
        columnHeader: {
          backgroundColor: "rgba(0, 158, 247, 0.1)",
          fontSize: "16px",
          // alignItems: "center",
          // justifyContent: "center",
        },
        columnHeaderTitle: {
          fontSize: "13px",
          fontWeight: 600,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#BEC8D0", // Default border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009EF7", // Hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009EF7", // Focused border color
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            // height: 20,
            // padding: "10px 10px 10px 10px",
            // padding: "2px",
          },
          // "& .MuiInputBase-inputMultiline": {
          //   // height: 35,
          //   // padding: "2px", // Ensure multiline input has consistent padding
          // },
        },
      },
    },
    // MuiPickersTextField: {
    //   styleOverrides: {
    //     root: {
    //       height: 20,
    //     },
    //   },
    // },
  },
});
