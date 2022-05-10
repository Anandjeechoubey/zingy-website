import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home">
    <div className="w-full h-full flex items-center justify-center absolute">
      <div className="max-w-lg bg-white p-16 md:p-36 rounded-3xl shadow-2xl">
        <img
          src="https://zingy-public-media.s3.ap-south-1.amazonaws.com/Zingy.png"
          alt="Zingy Music"
          className="mx-auto"
        />
        <h1 className="text-center text-2xl mt-4 text-zinc-600">
          🚧 Coming Soon...
        </h1>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
