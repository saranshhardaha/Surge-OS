/* eslint-disable */
export let getOS = () => {
  let navig = window.navigator;
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    OSName = null;
  if (macosPlatforms.includes(platform)) {
    OSName = "Mac OS";
  } else if (navig.userAgent.indexOf("Windows NT 10.0") != -1)
    OSName = "Windows 10";
  else if (navig.userAgent.indexOf("Windows NT 6.2") != -1)
    OSName = "Windows 8";
  else if (navig.userAgent.indexOf("Windows NT 6.1") != -1)
    OSName = "Windows 7";
  else if (navig.userAgent.indexOf("Windows NT 6.0") != -1)
    OSName = "Windows Vista";
  else if (navig.userAgent.indexOf("Windows NT 5.1") != -1)
    OSName = "Windows XP";
  else if (navig.userAgent.indexOf("Windows NT 5.0") != -1)
    OSName = "Windows 2000";
  else if (iosPlatforms.includes(platform)) {
    OSName = "iOS";
  } else if (/Android/.test(userAgent)) {
    OSName = "Android";
  } else if (!OSName && /Linux/.test(platform)) {
    OSName = "Linux";
  }
  return OSName;
};
let browserVersion = (userAgent, regex) => {
  return userAgent.match(regex) ? userAgent.match(regex)[2] : null;
};
export let getBrowser = () => {
  const userAgent = navigator.userAgent;
  let browser = "unkown";
  // Detect browser name
  browser = /ucbrowser/i.test(userAgent) ? "UCBrowser" : browser;
  browser = /edg/i.test(userAgent) ? "Edge" : browser;
  browser = /googlebot/i.test(userAgent) ? "GoogleBot" : browser;
  browser = /chromium/i.test(userAgent) ? "Chromium" : browser;
  browser =
    /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent)
      ? "Firefox"
      : browser;
  browser =
    /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent)
      ? "IE"
      : browser;
  browser =
    /chrome|crios/i.test(userAgent) &&
    !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent)
      ? "Chrome"
      : browser;
  browser =
    /safari/i.test(userAgent) &&
    !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
      userAgent
    )
      ? "Safari"
      : browser;
  browser = /opr|opera/i.test(userAgent) ? "Opera" : browser;
  // detect browser version
  switch (browser) {
    case "UCBrowser":
      return `${browser}/${browserVersion(
        userAgent,
        /(ucbrowser)\/([\d\.]+)/i
      )}`;
    case "Edge":
      return `${browser}/${browserVersion(
        userAgent,
        /(edge|edga|edgios|edg)\/([\d\.]+)/i
      )}`;
    case "GoogleBot":
      return `${browser}/${browserVersion(
        userAgent,
        /(googlebot)\/([\d\.]+)/i
      )}`;
    case "Chromium":
      return `${browser}/${browserVersion(
        userAgent,
        /(chromium)\/([\d\.]+)/i
      )}`;
    case "Firefox":
      return `${browser}/${browserVersion(
        userAgent,
        /(firefox|fxios)\/([\d\.]+)/i
      )}`;
    case "Chrome":
      return `${browser}/${browserVersion(
        userAgent,
        /(chrome|crios)\/([\d\.]+)/i
      )}`;
    case "Safari":
      return `${browser}/${browserVersion(userAgent, /(safari)\/([\d\.]+)/i)}`;
    case "Opera":
      return `${browser}/${browserVersion(
        userAgent,
        /(opera|opr)\/([\d\.]+)/i
      )}`;
    case "IE":
      const version = browserVersion(userAgent, /(trident)\/([\d\.]+)/i);
      // IE version is mapped using trident version
      // IE/8.0 = Trident/4.0, IE/9.0 = Trident/5.0
      return version
        ? `${browser}/${parseFloat(version) + 4.0}`
        : `${browser}/7.0`;
    default:
      return `unknown/0.0.0.0`;
  }
};
export let isOnline = () => {
  return window.navigator.onLine;
};
export let ScreenSize = () => {
  return screen.width + "x" + screen.height;
};
export let ipAdress = () => {
  let ipAddr = fetch("https://api.db-ip.com/v2/free/self")
    .then((response) => response.json())
    .then((data) => {
      return data.ipAddress;
    });
  return ipAddr;
};
export let HostOS = () => {
  var os = require("os");
  let HostOS = {};
  HostOS.os = getOS();
  HostOS.hostname = os.hostname();
  HostOS.browser = getBrowser();
  return HostOS;
};
