const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Herve\\Documents\\React\\styledGatsby\\gatsbyData\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\Herve\\Documents\\React\\styledGatsby\\gatsbyData\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\Herve\\Documents\\React\\styledGatsby\\gatsbyData\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Herve\\Documents\\React\\styledGatsby\\gatsbyData\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Herve\\Documents\\React\\styledGatsby\\gatsbyData\\src\\pages\\page-2.js")))
}

