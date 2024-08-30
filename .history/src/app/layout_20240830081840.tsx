"use client";
import React, { useEffect } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import type { Metadata } from "next";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "../../public/css/plugins/themify-icons.css";
// import "../../public/css/plugins.css";
import "../../public/css/style.css";
import "./globals.css";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

function RootLayout({ children }:{children: React.ReactNode}): JSX.Element {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
      <meta charset="utf-8">
      <title>Interactive PDF</title>
      <meta name="apple-mobile-web-app-title" content="Interactive PDF">
      <meta name="generator" content="In5 v3.8.18">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="viewport" content="initial-scale=1.0,minimum-scale=.2,maximum-scale=1.0,user-scalable=no">
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script type="text/javascript">window.jQuery || document.write('<script src="assets/js/jquery.min.js"><\/script>')</script>
      <script type="text/javascript" src="assets/js/vmouse.min.js"></script>
      <script type="text/javascript" src="assets/js/jquery.scrollTo.min.js"></script>
      <script type="text/javascript" src="assets/js/in5.config.js"></script>
      <link rel="stylesheet" href="assets/css/pages.css" media="all">
      <style media="all and (-ms-high-contrast:none)">*::-ms-backdrop,.svg-img{width:100%;}</style>
      </head>
        <body>{children}</body>
    </html>
  );
}

export default RootLayout;
