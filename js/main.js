function echo(t){var a=$("#debug-window");a.length||(a=$('<div id="debug-window"></div>'),$("body").append($('<div id="debug-window-container"></div>').append(a)).append("<style>\t\t #debug-window-container{ \t\t\tposition: fixed; \t\t\tright: 10px; \t\t\tbottom:0px; \t\t\twidth: 390px; \t\t\theight: 200px; \t\t\tz-index: 100000;\t\t\tbackground-color: #000; \t\t\tdisplay: table-cell; \t\t\tpadding: 20px; \t\t\toverflow:scroll; \t\t} \t\t\t\t\t\t#debug-window {\t\t\tposition:absolute;\t\t\tbottom:0;\t\t\tpadding:20px;\t\t}\t\t \t</style>")),$("#debug-window").append(t+"<br>")}function getRandomInt(t,a){return Math.floor(Math.random()*(a-t+1))+t}$((function(){var t,a=$(window),i=$("body"),e=$(document),n=($(".page-d"),$(".upper-d")),o=$(".page-d__hpanel"),r=$(".page-d__hboard"),l=$(".page-d__nav_main");function s(){a.scrollTop()>o.outerHeight()+r.outerHeight()+l.outerHeight()?i.hasClass("_toolbar-show")||i.addClass("_toolbar-show"):i.removeClass("_toolbar-show")}setTimeout(s,300),a.on("scroll resize",s),a.on("scroll",(function(){a.scrollTop()<=200?i.removeClass("_upper-show"):i.addClass("_upper-show")})),n.on("click",(function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},0)})),$(".item-d__link .link-d__sign").on("click",(function(t){t.preventDefault(),t.stopPropagation();var a=$(this).closest(".item-d");a.length&&(a.hasClass("item-d_active")?a.removeClass("item-d_active _active").find(".item-d_active, ._active").removeClass("item-d_active _active"):(a.toggleClass("_active"),a.hasClass("_active")||a.find(".item-d_active, ._active").removeClass("item-d_active _active")))})),e.on("change",".attach-d input:file, .inpimage input:file, .inpattachment input:file",(function(t){var a=$(this);a.next().text(a.val())})),e.on("click",".js_count_plus",(function(){var t=$(this).parent().find(".js_count_input");if(t.length){var a=t.data("step");a=a&&a>0?a:1;var i=t.val();i=i&&i>0?+i+a:a;var e=t.data("max");e&&i>e&&(i=e),t.val(i)}})),e.on("click",".js_count_minus",(function(){var t=$(this).parent().find(".js_count_input");if(t.length){var a=t.data("step");a=a&&a>0?a:1;var i=t.val();i&&i>a&&(i=+i-a);var e=t.data("min");e&&i<e&&(i=e),t.val(i)}})),e.on("keyup",".js_count_input",(function(t){t.target.value=t.target.value.replace(/,/g,".")})),t={init:function(t){return this.each((function(){if(this.swiper&&this.swiper.initialized)return this;var a=$(this),i={},e={navigation:{nextEl:a.find(".swiper-button-next").get(0),prevEl:a.find(".swiper-button-prev").get(0)},on:{},pagination:{el:a.find(".swiper-pagination").get(0),type:"bullets"},grabCursor:!0,watchOverflow:!0,setWrapperSize:!0};$.extend(i,e,t||{});var n=a.data("gallAutoplay");n&&(i.autoplay={delay:n},i.on.init=function(){$(this.el).on("mouseenter.gall_d",(function(){this.swiper.autoplay.stop()})),$(this.el).on("mouseleave.gall_d",(function(){this.swiper.autoplay.start()}))});var o=a.data("gallShow");o&&(i.slidesPerView=o);var r=a.data("gallGap");r&&(i.spaceBetween=r);var l=a.data("gallThumbs");if(l){var s=$(l);s.length&&(s.get(0).swiper&&s.get(0).swiper.initialized||s.eq(0).gall_d(),i.thumbs={swiper:s.get(0).swiper})}var d=a.data("gallPagintype");d&&(i.pagination.type=d);var c=a.data("gallBreakpoints");c&&(i.breakpoints=c),i.simulateTouch=!!a.data("gallSimulateTouch"),new Swiper(this,i)}))},slideTo:function(t){if(t>-1){var a=this.get(0);a.swiper&&a.swiper.initialized&&a.swiper.slideTo(t)}return this}},$.fn.gall_d=function(a){return!!window.Swiper&&(t[a]?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void $.error("Метод "+a+" не определён для jQuery.gall_d"):t.init.apply(this,arguments))},$(".gall-d").gall_d(),e.on("order_ajax_submit.after_last",(function(t){$(".gall-d.swiper-container:not(.swiper-container-initialized)").gall_d()})),function(){function t(t,a,i,e){return(isNaN(t)||t<i||t>e-1)&&(t=i),(isNaN(a)||a<i+1||a>e)&&(a=e),[+t,+a]}function a(a,i,e){var n=t(a.val(),i.val());a.val(n[0]),i.val(n[1]),e.slider("option","values",n)}var i={init:function(i){return this.each((function(){var e=$(this),n=e.find(".runner-d__track");if(n.length){var o={};$.extend(o,{range:!0,min:0,max:5e5,step:1,disabled:!1},i||{});var r=e.find(".runner-d__from input"),l=e.find(".runner-d__to input"),s=e.data("min");s>0&&(o.min=+s);var d=e.data("max");d>0&&(o.max=+d),o.min>o.max&&(o.min=o.max),o.values=t(r.val(),l.val(),s,d);var c=e.data("step");c>0&&(o.step=+c),"true"==e.data("disabled")&&(o.disabled=!0),o.create=function(){r.val(n.slider("values",0)),l.val(n.slider("values",1)),e.addClass("_runner-initialized")},o.slide=function(t,a){r.val(n.slider("values",0)),l.val(n.slider("values",1))},o.stop=function(t,a){r.val(n.slider("values",0)),l.val(n.slider("values",1))},n.slider(o),r.on("input.runner_d",a(r,l,n)),l.on("input.runner_d",a(r,l,n))}}))}};$.fn.runner_d=function(t){return"function"==typeof $.fn.slider&&(i[t]?i[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Метод "+t+" не определён для jQuery.runner_d"):i.init.apply(this,arguments))}}(),$(".runner-d").runner_d(),e.on("order_ajax_submit.after_last",(function(t){$(".runner-d:not(._runner-initialized)").runner_d()})),function(){var t={init:function(){return this.each((function(){$(this).on("click.contacts_tooltip_d",(function(t){var a=$(this);if(a.hasClass("contact-d_active")){var i=$(t.target);(i.hasClass("contact-d__icon")||i.closest(".contact-d__icon").length)&&a.removeClass("contact-d_active")}else a.addClass("contact-d_active")}))}))}};$.fn.contacts_tooltip_d=function(a){return t[a]?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void $.error("Метод "+a+" не определён для jQuery.contacts_tooltip_d"):t.init.apply(this,arguments)},$(document).on("click.contacts_tooltip_d",(function(t){var a=$(t.target).closest(".contact-d_active"),i=$(".contact-d_active");i.each((function(t,e){a.get(0)!==e&&i.eq(t).removeClass("contact-d_active")}))}))}(),$(".contact-d_tooltip").contacts_tooltip_d(),function(){var t={init:function(){return this.each((function(){var t=$(this),a=t.find(".tab-d"),i=t.find(".tabname-d");t.on("click.tabs_d",".tabname-d",(function(t){t.preventDefault();var e=$(this);if(e.hasClass("tabname-d_active"))return!0;var n=i.index(e);i.removeClass("tabname-d_active").eq(n).addClass("tabname-d_active"),a.removeClass("tab-d_active").eq(n).addClass("tab-d_active")})),t.addClass("_tabs-initialized")}))}};$.fn.tabs_d=function(a){return t[a]?t[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void $.error("Метод "+a+" не определён для jQuery.tabs_d"):t.init.apply(this,arguments)}}(),$(".tabs-d").tabs_d(),e.on("order_ajax_submit.after_last",(function(t){$(".tabs-d:not(._tabs-initialized)").tabs_d()})),function(){function t(t){var a=t.hasScrollBar();a.vertical||a.horizontal?(a.vertical&&t.addClass("_scroll_vertical"),a.horizontal&&t.addClass("_scroll_horizontal")):t.removeClass("_scroll_vertical _scroll_horizontal")}$.fn.hasScrollBar=function(){var t=this.get(0);return{vertical:t.scrollHeight>t.clientHeight,horizontal:t.scrollWidth>t.clientWidth}};var a={init:function(){return this.each((function(){var a=$(this);t(a),a.on("scroll.scroll_d",(function(){t($(this))})),a.addClass("_scroll-initialized")}))}};$.fn.scroll_d=function(t){return a[t]?a[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void $.error("Метод "+t+" не определён для jQuery.scroll_d"):a.init.apply(this,arguments)}}(),$("._scroll").scroll_d(),e.on("order_ajax_submit.after_last",(function(t){$("._scroll:not(._scroll-initialized)").scroll_d()}))}));