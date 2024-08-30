"use client";
import React from "react";
import Script from 'next/script';

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Example() {
  return (
    <>
    <div id="prefooter" style="float:left;height:1px;">&nbsp;</div>
    </div>
    <footer id="in5footer"><a href="http://ajarproductions.com/pages/products/in5/?ref=footer" target="_blank" >Built with in5</a>.</footer>
    <Script type="text/javaScript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"/>
    <Script type="text/javaScript" strategy="beforeInteractive" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
    <Script type="text/javaScript" strategy="beforeInteractive" src="assets/js/vmouse.min.js"></Script>
    <Script type="text/javaScript" strategy="beforeInteractive" src="assets/js/jquery.scrollTo.min.js"></Script>
    <Script type="text/javaScript" strategy="beforeInteractive" src="assets/js/in5.config.js"></Script>
    </>
  )
}
