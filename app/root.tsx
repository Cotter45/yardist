import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css"
import index from "./styles/index.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The Yardist Lawn Services",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheeet", href: index }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="scroll-smooth">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
