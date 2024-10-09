import React from 'react';

export default function DefaultMetatags(): JSX.Element {
  return (
    <head>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
    </head>
  );
}
