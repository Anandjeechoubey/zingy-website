import { Box } from "@mui/material";
import AboutUs from "../components/About";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import HomeHero from "../components/Hero";
import Layout from "../components/Layout";
import Team from "../components/Team";

const IndexPage = () => (
  <Layout title="Home">
    <HomeHero />
    <Box id="features">
      <Feature
        name="Create"
        image="/create-1.png"
        img2="/create-2.png"
        text="Create and Share music content, create robust portfolios opening up an ocean of opportunities for you."
      />
      <Feature
        name="Connect"
        image="/connect-1.png"
        img2="/connect-2.png"
        odd
        text="Discover best musicians based on their skills, genres, artforms via portfolios and connect seamlessly. We let you build a robust network in the music industry to grow big!"
      />
      <Feature
        name="Collaborate"
        image="/collab-1.png"
        img2="/collab-2.png"
        text="Find likeminded people to work together on your unfinished music ideas, hire or get hired from the community, make your own band!"
      />
    </Box>
    <AboutUs />
    <Team />
    <Contact />
  </Layout>
);

export default IndexPage;
//Create and Share
//skills, genres, artforms via portfolios and connect
//  hire or get hired from the community
