function ASSetCookie(e,o,t){var n=new Date;n.setDate(n.getDate()+t);var i=escape(o)+(0==t?";path=/":"; expires="+n.toUTCString())+";path=/";document.cookie=e+"="+i}function ASGetCookie(e){var o,t,n,i=document.cookie.split(";");for(o=0;o<i.length;o++)if(t=i[o].substr(0,i[o].indexOf("=")),n=i[o].substr(i[o].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))==e)return unescape(n)}function ASSetCookieAds(e,o){var t=ASGetCookie(e);null!=t&&""!=t?(ASTheCookieInt=parseInt(t)+1,ASSetCookie(e,ASTheCookieInt.toString(),0)):ASSetCookie(e,"1",o)}function ASMaxClick(e,o){var t=ASGetCookie(e);return null!=t&&parseInt(t)>=o}jQuery(document).ready(function(e){var o="adsShield",t=7,n=3,i=".adsShield",a=!1;ASMaxClick(o,n)&&e(i).hide("fast"),e(i).bind("mouseover",function(){a=!0}).bind("mouseout",function(){a=!1}),e(window).on("beforeunload",function(){a&&(ASMaxClick(o,n)?e(i).hide("fast"):ASSetCookieAds(o,t))})});