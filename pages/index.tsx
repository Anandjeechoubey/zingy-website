import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <div className="w-full h-full flex flex-col absolute">
      <div className="p-8">
        <img
          src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/Zingy.png"
          alt="Zingy Music"
          style={{ height: "50%" }}
        />
      </div>
      <div className="flex grow-1 flex-col items-center justify-center w-full h-full mb-16">
        <div className="flex">
          <div className="flex items-center rotate-180 animate-three">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/3.png" />
          </div>
          <div className="flex items-center rotate-180 animate-two">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/2.png" />
          </div>
          <div className="flex items-center rotate-180 animate-one">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/1.png" />
          </div>
          <div className="flex items-center">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/hero.png" />
          </div>
          <div className="flex items-center animate-one">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/1.png" />
          </div>
          <div className="flex items-center animate-two">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/2.png" />
          </div>
          <div className="flex items-center animate-three">
            <img src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/3.png" />
          </div>
        </div>
        <h1 className="text-center text-2xl mt-1 primary-text">
          streaming starts soon <span className="animate-one">.</span>
          <span className="animate-two">.</span>
          <span className="animate-three">.</span>
        </h1>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
