(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(151),o=a(153);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},145:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return m}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(144),s=a.n(u);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return u.withPrefix}),a.d(e,"navigate",function(){return u.navigate}),a.d(e,"push",function(){return u.push}),a.d(e,"replace",function(){return u.replace}),a.d(e,"navigateTo",function(){return u.navigateTo});var c=a(146),l=a.n(c);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,a){var n;t.exports=(n=a(148))&&n.default||n},147:function(t,e,a){"use strict";var n=a(0),r=a.n(n);e.a=function(t){return r.a.createElement("h1",null,t.headerText)}},148:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(54),s=a(2),c=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(u.a,Object.assign({location:e,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},151:function(t,e,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),u=a.n(o),s=a(145),c=a(147),l=function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})};l.propTypes={children:u.a.node.isRequired},e.a=l},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(t,e,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),u=a.n(o),s=a(155),c=a.n(s),l=a(145);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,u=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:u},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},e.a=d;var p="1025518380"},154:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-37a0874dca667944248d.js.map