import useScrollTrigger from "@mui/material/useScrollTrigger";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { isBrowser } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ElevationScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar className="bg-white text-black px-8 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center">
        <div>
          <Image width={120} height={45} src="/logo.png" alt="logo" />
        </div>
        <div className="flex gap-4 md:gap-12 text-xl font-semibold">
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="#team">Team</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;