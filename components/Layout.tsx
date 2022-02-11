import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="min-h-screen flex flex-col bg-slate-800 text-slate-100">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
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
    </header>
    <main className="flex-grow">{children}</main>
    <footer className="px-16 border-t border-b-slate-700">
      <div className="py-12">
        <span>I'm here to stay (Footer)</span>
      </div>
      <hr />
      <div className="p-2">
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  </div>
);

export default Layout;
