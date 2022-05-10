import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="min-h-screen flex flex-col bg-cyan-500 bg-opacity-100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    <main className="flex-grow relative">{children}</main>
    {/* <footer className="px-16 text-slate-100">
      <hr />
      <div className="p-2">
        <h6 className="text-center">Zingy Music</h6>
      </div>
    </footer> */}
  </div>
);

export default Layout;
