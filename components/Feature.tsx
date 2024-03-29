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
      <h2 className="font-bold mb-4" style={{ color: "#7B36FA" }}>
        {name}
      </h2>
      <Typography variant="body1">{text}</Typography>
    </Box>
    <Box className="relative top-0 left-0">
      <Image
        className="relative top-0 left-0"
        width={280}
        height={530}
        src={image}
        alt={name}
      />
      <Box className="inline absolute top-0 left-0 animate-one">
        <Image width={280} height={530} src={img2} alt={name} />
      </Box>
    </Box>
  </Box>
);

export default Feature;
