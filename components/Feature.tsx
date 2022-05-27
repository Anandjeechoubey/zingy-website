import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Feature = ({ name, text, image, img2, odd = false }) => (
  <Box
    className={`p-8 md:p-20 min-h-screen gap-12 flex flex-col-reverse md:flex-row items-center justify-center ${
      odd ? "flex-col-reverse md:flex-row-reverse" : "bg-indigo-100"
    }`}
  >
    <Box className="max-w-lg">
      <Typography
        className="font-bold mb-4"
        sx={{ color: "#7B36FA" }}
        variant="h2"
      >
        {name}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
    <Box className="relative">
      <Image
        className="relative"
        width={280}
        height={530}
        src={image}
        alt={name}
      />
      <Image
        className="absolute"
        width={280}
        height={530}
        src={img2}
        alt={name}
      />
    </Box>
  </Box>
);

export default Feature;
