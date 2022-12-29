import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html >
          <title>Slash.ly</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="slash.ly - link shortener" />
      <link rel="icon" href="/favicon.ico" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}