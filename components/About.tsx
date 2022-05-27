import { Box, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => (
  <Box
    id="about"
    className="p-8 md:p-20 min-h-screen flex flex-col gap-16 items-center justify-center"
  >
    {/* <Typography variant="h2"></Typography> */}
    <h2
      style={{ color: "#7B36FA" }}
      className="h2 text-6xl font-bold uppercase text-center"
    >
      About US
    </h2>
    <Typography className="max-w-4xl text-center" variant="body1">
      We are a bunch of hard-core music enthusiasts from IIT Roorkee. The Indian
      music Industry has never been fair for the artist and talents. There has
      been a sheer lack of basic motivation, resources and infrastructure for an
      aspiring musician to produce and market their songs. We identified the
      problems of musicians of finding the right community, right mentorship,
      networks, unavailability of jobs, underpaid gigs, delayed payements,
      unawareness around the business aspect of their art. These loopholes let
      the established labels, management companies take advantage of artists. We
      are building a community for musicians for them to
      Connect-Collaborate-Create seamlessly. Hire musicians and also get hired
      eliminating the mediators. Musicians can boost their discoverability via
      portfolios and curated feeds simultaneously learning and growing in a
      stong community.
    </Typography>
    <Typography className="text-center" variant="h4">
      Are you pumped to grow with us ?
    </Typography>
  </Box>
);

export default AboutUs;
