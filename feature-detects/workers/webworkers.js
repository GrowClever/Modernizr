/*!
{
  "name": "Web Workers",
  "property": "webworkers",
  "caniuse" : "webworkers",
  "tags": ["performance", "workers"],
  "notes": [{
    "name": "W3C Reference",
    "href": "http://www.w3.org/TR/workers/"
  }, {
    "name": "HTML5 Rocks article",
    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
  }, {
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
  }],
  "polyfills": [{
    "name": "fakeworker.js",
    "href": "https://code.google.com/p/fakeworker-js/"
  },{
    "name": "web worker api shim",
    "href": "http://html5-shims.googlecode.com/svn/trunk/demo/workers.html"
  }]
}
!*/
/* DOC

Detects support for the basic `Worker` API from the Web Workers spec. Web Workers provide a simple means for web content to run scripts in background threads.

*/
define(['Modernizr'], function( Modernizr ) {
  Modernizr.addTest('webworkers', !!window.Worker);
});
