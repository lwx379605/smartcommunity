(function(window){var svgSprite='<svg><symbol id="icon-guanbi" viewBox="0 0 1024 1024"><path d="M540.98944 511.766528l369.568768-369.568768c7.99744-7.998464 7.99744-20.965376 0-28.962816-7.998464-7.998464-20.9664-7.998464-28.96384 0L512.026624 482.802688 142.488576 113.266688c-7.998464-7.998464-20.965376-7.998464-28.962816 0s-7.998464 20.965376 0 28.962816l369.536 369.536L113.55648 881.272832c-7.998464 7.998464-7.998464 20.9664 0 28.96384 3.99872 3.99872 9.239552 5.997568 14.481408 5.997568s10.482688-1.998848 14.481408-5.997568l369.507328-369.507328 369.539072 369.539072c3.99872 3.99872 9.240576 5.997568 14.482432 5.997568s10.482688-1.998848 14.482432-5.997568c7.99744-7.998464 7.99744-20.9664 0-28.96384L540.98944 511.766528z"  ></path></symbol><symbol id="icon-shanchu" viewBox="0 0 1024 1024"><path d="M807.657208 273.990235l0 589.423347c0 36.171828-29.321816 65.491597-65.49262 65.491597l-458.441177 0c-36.169781 0-65.491597-29.319769-65.491597-65.491597L218.231815 273.990235l-65.491597 0 0-32.745798 196.47479 0 0-65.491597c0-36.169781 29.320793-65.490573 65.491597-65.490573l196.47479 0c36.169781 0 65.491597 29.320793 65.491597 65.490573l0 65.491597 196.47479 0 0 32.745798L807.657208 273.990235zM643.927193 175.75284c0-18.085914-14.659885-32.745798-32.745798-32.745798l-196.47479 0c-18.08489 0-32.745798 14.659885-32.745798 32.745798l0 65.491597 261.966387 0L643.927193 175.75284zM774.91141 273.990235 250.977613 273.990235l0 589.423347c0 18.085914 14.660908 32.745798 32.745798 32.745798l458.441177 0c18.085914 0 32.746822-14.659885 32.746822-32.745798L774.91141 273.990235zM627.554294 388.599506l32.745798 0 0 392.950603-32.745798 0L627.554294 388.599506zM496.571101 388.599506l32.746822 0 0 392.950603-32.746822 0L496.571101 388.599506zM365.588931 388.599506l32.745798 0 0 392.950603-32.745798 0L365.588931 388.599506z"  ></path></symbol><symbol id="icon-todown" viewBox="0 0 1024 1024"><path d="M820.508 447.816c-6.518-6.518-17.381-6.518-23.899 0l-282.437 282.437-288.954-282.437c-6.518-6.518-17.381-6.518-23.899 0s-6.518 17.381 0 23.899l299.817 293.3c6.518 6.518 17.381 6.518 23.899 0l295.473-293.3c6.518-8.691 6.518-17.381 0-23.899z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)