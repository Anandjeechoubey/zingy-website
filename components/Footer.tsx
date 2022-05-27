import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => (
  <Box className="p-8 md:p-20 bg-black text-white gap-12 w-full flex flex-col items-center justify-center">
    <Image width={193} height={77} src="/logo.png" alt="logo" />
    <Box className="flex flex-col md:flex-row gap-8 md:gap-36">
      <a className="flex items-center" href="tel:+919521800141">
        <Image width={45} height={30} src="/phone.svg" alt="logo" />
        <Typography variant="h6">+91 9521800141</Typography>
      </a>
      <a
        className="flex items-center"
        href="https://goo.gl/maps/5XewGKXv4iJzochv8"
      >
        <Image width={45} height={30} src="/pin.svg" alt="logo" />
        <Typography variant="h6">
          Tides Incubator, IIT Roorkee- 247667
        </Typography>
      </a>
      <a className="flex items-center" href="mailto:kaushal_c@zingymusic.com">
        <Image width={45} height={30} src="/mail.svg" alt="logo" />
        <Typography variant="h6">kaushal_c@zingymusic.com</Typography>
      </a>
    </Box>
    <Box className="flex gap-4 md:gap-12">
      <a href="https://www.linkedin.com/company/zingy001/">
        <Image width={45} height={30} src="/linkedin.svg" alt="logo" />
      </a>
      <a href="https://www.youtube.com/channel/UCOQ61YQWtXRgaoBrj8R-AOg">
        <Image width={45} height={30} src="/youtube.svg" alt="logo" />
      </a>
      <a href="https://www.instagram.com/zingy.official/">
        <Image width={45} height={30} src="/instagram.svg" alt="logo" />
      </a>
      <a href="https://www.youtube.com/channel/UCOQ61YQWtXRgaoBrj8R-AOg">
        <Image width={45} height={30} src="/discord.svg" alt="logo" />
      </a>
    </Box>
    <Typography variant="h6" component="h6" className="font-medium uppercase">
      Made with <span className="text-red-600">❤</span> from IIT Roorkee
    </Typography>
  </Box>
);

export default Footer;
