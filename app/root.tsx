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
import splash from "./styles/splash.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "The Yardist Lawn Services",
  "og:title": "The Yardist Lawn Services",
  "twitter:title": "The Yardist Lawn Services",
  viewport: "width=device-width,initial-scale=1",
  name: "The Yardist Lawn Services",
  "og:name": "The Yardist Lawn Services",
  "twitter:name": "The Yardist Lawn Services",
  description:
    "We handle all season maintenance including lawn, leaf, snow and ice in Montgomery, Delaware, Bucks, Berks and Chester counties.",
  "og:description":
    "We handle all season maintenance including lawn, leaf, snow and ice in Montgomery, Delaware, Bucks, Berks and Chester counties.",
  "twitter:description":
    "We handle all season maintenance including lawn, leaf, snow and ice in Montgomery, Delaware, Bucks, Berks and Chester counties.",
  keywords:
    "pennsylvania, pa, montgomery, delaware, bucks, berks, chester, service, stuck, lawn, grass, mow, mowing, trim, trimming, edge, edging, landscape, landscaping, clean, clean-up, rake, raking, blow, blowing, mulch, mulching, leaf, leaves, snow, snowing, plow, plowing, shovel, shoveling, salt, salting, spread, spreading, sidewalk, ice, spring, fall, winter, summer, top, top-rated, satisfaction, customers",
  "og:keywords":
    "pennsylvania, pa, montgomery, delaware, bucks, berks, chester, service, stuck, lawn, grass, mow, mowing, trim, trimming, edge, edging, landscape, landscaping, clean, clean-up, rake, raking, blow, blowing, mulch, mulching, leaf, leaves, snow, snowing, plow, plowing, shovel, shoveling, salt, salting, spread, spreading, sidewalk, ice, spring, fall, winter, summer, top, top-rated, satisfaction, customers",
  "twitter:keywords":
    "pennsylvania, pa, montgomery, delaware, bucks, berks, chester, service, stuck, lawn, grass, mow, mowing, trim, trimming, edge, edging, landscape, landscaping, clean, clean-up, rake, raking, blow, blowing, mulch, mulching, leaf, leaves, snow, snowing, plow, plowing, shovel, shoveling, salt, salting, spread, spreading, sidewalk, ice, spring, fall, winter, summer, top, top-rated, satisfaction, customers",
  "og:site_name": "The Yardist Lawn Services",
  "twitter:site_name": "The Yardist Lawn Services",
  "og:type": "website",
  "twitter:card": "summary",
  "twitter:creator": "@TheYardist",
  "og:creator": "@TheYardist",
  "og:image": "https://seansawsbucket.s3.amazonaws.com/icon.png",
  "twitter:image": "https://seansawsbucket.s3.amazonaws.com/icon.png",
  "og:image:alt": "The Yardist Lawn Services",
  "twitter:image:alt": "The Yardist Lawn Services",
  "og:image:width": "1200",
  "og:image:height": "630",
  "twitter:image:width": "1200",
  "twitter:image:height": "630",
  "og:url": "https://yardist.netlify.app",
  "twitter:url": "https://yardist.netlify.app",
  "twitter:domain": "yardist.netlify.app",
  "og:locale": "en_US",
  "twitter:locale": "en_US",
  robots: "index, follow",
  language: "en",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheeet", href: index },
    { rel: "stylesheet", href: splash },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="scroll-smooth relative min-h-[340vh]">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
