$(document).ready(function(){$(".loading-area").fadeOut(1e3),$(window).on("scroll",function(){e(),i()}),n(),l(),s(),t(),a(),setTimeout(function(){$(".has-child").find("li.active").parents(".has-child").find(".submenu-toogle").click()},100)});function e(){var o=$(window).scrollTop();o>=100?$(".sticky-header").addClass("color-fill is-fixed"):$(".sticky-header").removeClass("color-fill is-fixed")}function i(){$("button.scroltop").on("click",function(){return $("html, body").animate({scrollTop:0},0),!1}),$(window).on("scroll",function(){var o=$(window).scrollTop();o>900?$("button.scroltop").fadeIn(1e3):$("button.scroltop").fadeOut(1e3)})}function n(){$(".sub-menu").parent("li").addClass("has-child"),$("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a"),$(".has-child a+.submenu-toogle").on("click",function(o){$(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500,function(){$(this).parent().removeClass("nav-active")}),$(this).next($(".sub-menu")).slideToggle(500,function(){$(this).parent().toggleClass("nav-active")}),o.stopPropagation()})}function l(){$("#mobile-side-drawer").on("click",function(){$(".mobile-sider-drawer-menu").toggleClass("active")})}function s(){$(".counter").counterUp({delay:10,time:3e3})}function t(){$(".scrollbar-macosx").scrollbar()}function a(){$("#sidebarCollapse").on("click",function(){$("#header-admin, #sidebar-admin-wraper, #content").toggleClass("active")})}
