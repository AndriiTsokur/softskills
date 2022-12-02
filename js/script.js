"use strict";

let screenWidth = document.documentElement.clientWidth;
let screenHeight = document.documentElement.clientHeight;

let iframe = document.querySelector("iframe");
iframe.width = screenWidth;
iframe.height = screenHeight;
