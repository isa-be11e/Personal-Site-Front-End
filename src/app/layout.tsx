import type { Metadata } from "next";
import { Inter } from "next/font/google";
//import "./globals.css";
import MyAppBar from "../components/MyAppBar"
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
      <body style={{background: colours.darkTeal}}>
        <MyAppBar/>
        <Container maxWidth ="xl">
          <Box sx={{ bgcolor: colours.lightTeal, minHeight: '100vh'}}>
            {children}
          </Box>
        </Container>
      </body>
    </html>
  );
}
