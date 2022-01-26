import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="http://admin.acemcbohol.ph/wp-content/uploads/2022/01/LOGO-PNG-NEW.jpg" />
          {/* <link rel="shortcut icon" href="/img/brand/favicon.ico" /> */}
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="http://admin.acemcbohol.ph/wp-content/uploads/2022/01/LOGO-PNG-NEW.jpg"
            // href="/img/brand/apple-icon.png"
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
