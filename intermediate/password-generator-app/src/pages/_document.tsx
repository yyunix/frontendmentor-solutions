import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-very-dark-gray text-almost-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
