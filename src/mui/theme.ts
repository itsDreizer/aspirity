"use client"

import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

export const customTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});