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
  name: "The Yardist Lawn Services",
  description:
    "We handle all season maintenance including lawn, leaf, snow and ice in Montgomery, Delaware, Bucks, Berks and Chester counties.",
  keywords:
    "pennsylvania, pa, montgomery, delaware, bucks, berks, chester, service, stuck, lawn, grass, mow, mowing, trim, trimming, edge, edging, landscape, landscaping, clean, clean-up, rake, raking, blow, blowing, mulch, mulching, leaf, leaves, snow, snowing, plow, plowing, shovel, shoveling, salt, salting, spread, spreading, sidewalk, ice, spring, fall, winter, summer, top, top-rated, satisfaction, customers",
  robots: "index, follow",
  language: "en",
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
