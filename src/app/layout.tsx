import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import AppBar from "../components/AppBar"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { colours } from '../themes/global';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isabe11e",
  description: "Welcome to my site!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background: 'rgb(0,25,25)'}}>
        <AppBar/>
        <Container maxWidth ="xl">
          <Box sx={{ bgcolor: colours.background, minHeight: '100vh'}}>
            {children}
          </Box>
        </Container>
      </body>
    </html>
  );
}
