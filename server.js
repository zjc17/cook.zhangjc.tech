import React from 'react';
import ReactDOM from 'react-dom/server';
import { CssBaseline } from '@nextui-org/react';
import App from './app';

export default (req, res) => {
  const app = ReactDOM.renderToString(<App />);
  const styles = CssBaseline.flush();
  const html = ReactDOM.renderToStaticMarkup(
    <html>
      <head>{styles}</head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
      </body>
    </html>
  );
  res.end('<!doctype html>' + html);
};