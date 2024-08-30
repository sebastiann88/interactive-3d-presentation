"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

// COMPONENTS
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { PageQuery } from "tina/__generated__/types";

export function PageComponent(props: {
  data: PageQuery
  variables: {
    relativePath: string;
  }
  query: string;
}) {
  return (
    <>
      <Navbar />
        <main>
          <div id="container-wrap">
            <div id="container">
              <ul className="pages paper-vertical" id="slider">
                <li className="page" data-name="1">
                  <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style="width:1584px;height:1224px;">
                    <div id="item299" className="pageItem" alt="NVisionIT Interactive">
                      <img src="assets/images/blank.gif" style="top:-188px" alt="NVisionIT Interactive" className="svg-img pageItem" data-src="assets/images/item_299.svg"/>
                    </div>
                    <div id="item336" className="pageItem" alt="Slides.com">
                      <img src="assets/images/blank.gif" style="top:-85px" alt="Slides.com" className="svg-img pageItem" data-src="assets/images/item_336.svg"/>
                    </div>
                    <div id="item700" className="pageItem" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In...">
                      <img src="assets/images/blank.gif" style="top:-6px" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In..." className="svg-img pageItem" data-src="assets/images/item_700.svg"/>
                    </div>
                    <div id="item730" className="pageItem embed-container" alt="HTML"><iframe src="https://slides.com/sebastiann45/deck-e273c9/embed" width="1235" height="750" title="Copy of deck" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen="allowfullscreen"></iframe></div>
                  </div>
                </li>
                <li className="page" data-name="2">
                  <div className="page-scale-wrap mq-none mq-default" role="region" data-layout-name="undefined" style="width:1584px;height:1224px;">
                    <div id="item425" className="pageItem embed-container" alt="HTML"><iframe width="918" height="555" allowfullscreen src="https://v3d.net/12p4"></iframe></div>
                    <div id="item430" className="pageItem" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In...">
                      <img src="assets/images/blank.gif" style="top:-6px" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In..." className="svg-img pageItem" data-src="assets/images/item_430.svg"/>
                    </div>
                    <div id="item676" className="pageItem" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In...">
                      <img src="assets/images/blank.gif" style="top:-6px" alt="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In..." className="svg-img pageItem" data-src="assets/images/item_676.svg"/>
                    </div>
                    <div id="item454" className="pageItem" alt="Swiss Army Knife">
                      <img src="assets/images/blank.gif" style="top:-85px" alt="Swiss Army Knife" className="svg-img pageItem" data-src="assets/images/item_454.svg"/>
                    </div>
                    <div id="item515" className="pageItem" alt="Venetian Mask">
                      <img src="assets/images/blank.gif" style="top:-85px" alt="Venetian Mask" className="svg-img pageItem" data-src="assets/images/item_515.svg"/>
                    </div>
                    <div id="item615" className="pageItem embed-container" alt="HTML"><iframe width="918" height="610" allowfullscreen src="https://v3d.net/12p7"></iframe></div>
                  </div>
                </li>
                <li className="page">
                  <div className="page-scale-wrap mq-none mq-default" style="width:1584px;height:1224px;"><div id="demoNote" className="pageItem">This is a limited preview of <a href="http://in5.ajar.pro" target="_blank">in5</a>. To unlock in5 completely, please <a href="https://ajarproductions.com/pages/products/in5/purchase.php?src=dialog&level=-1" target="_blank">purchase a license</a>.</div></div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      <Footer />
    </>
  );
};
