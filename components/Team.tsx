import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const TeamMember = ({ name, image, designation }) => (
  <Grid className="pdng-0" item xs={12} sm={4} md={3} paddingLeft="0px">
    <Box className="flex flex-col items-center pt-0 ">
      <Box>
        <Image
          className="mx-auto"
          width={180}
          height={180}
          src={image}
          alt={name}
        />
        <Typography className="text-center" variant="h6">
          {name}
        </Typography>
        <Typography
          sx={{ color: "#7B36FA" }}
          className="text-center"
          variant="body1"
        >
          {designation}
        </Typography>
      </Box>
    </Box>
  </Grid>
);
const Team = () => (
  <Box
    id="team"
    className="p-8 md:p-20 min-h-screen w-full flex gap-24 flex-col items-center justify-center"
  >
    {/* <Typography variant="h2" component="h2"></Typography> */}
    <h2
      style={{ color: "#7B36FA" }}
      className="h2 font-bold uppercase text-center"
    >
      Meet the Team
    </h2>
    <Grid container justifyContent="center" spacing={2} rowGap={12}>
      <TeamMember
        name="Kaushal Chanani"
        designation="Co-founder"
        image="/kaushal.jpg"
      />
      <TeamMember
        name="Rituraj Bansal"
        designation="Co-founder"
        image="/rituraj.jpeg"
      />
      <TeamMember
        name="Anand Jee Choubey"
        designation="Technical Lead"
        image="/anand.jpg"
      />
      <TeamMember
        name="Manish Kumar"
        designation="Digital Media Lead"
        image="/manish.jpg"
      />
      <TeamMember
        name="Sujash Agarwal"
        designation="Entrepreneur in residence"
        image="/sujash.jpeg"
      />
      <TeamMember
        name="Vijay Golani"
        designation="Developer"
        image="/golani.jpeg"
      />
      <TeamMember
        name="Kanishk Singh"
        designation="Designer"
        image="/kanishk.jpeg"
      />
    </Grid>
  </Box>
);

export default Team;
