"use client";
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Head from "next/head";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <Head>
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
    </Head>
  )
}