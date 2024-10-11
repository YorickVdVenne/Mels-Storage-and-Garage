import React from 'react';

export default function Favicons(): JSX.Element {
  return (
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/default/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/default/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/default/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/default/favicon-48x48.png"
        sizes="48x48"
      />
      <link rel="shortcut icon" href="/default/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/default/favicon.svg" />
      <meta name="msapplication-TileColor" content="#082866" />
      <meta name="msapplication-config" content="/default/browserconfig.xml" />
      <meta name="theme-color" content="#082866" />
      <link rel="manifest" href="/default/site.webmanifest" />
    </head>
  );
}
