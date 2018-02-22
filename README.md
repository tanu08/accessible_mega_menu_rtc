run this reduced test case at https://care4kittens.github.io/accessible_mega_menu_rtc/

it illustrates issues with touch interaction using the accessible megamenu from https://github.com/adobe-accessibility/Accessible-Mega-Menu

some proposed fixes are worth attention before proceeding further:
- related to menu items that don't open on touch: https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/30#issuecomment-136761011
- possible reference to inspiration for responsive approach; perhaps referring back to the origin can unearth a solution? https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/2#issuecomment-23432750

issues seem to occur as follows
- UNUSABLE on android phones (various releases of various devices) with chrome (various releases)
  - parent menu items don't expand at all, blocking navigation to links in submenus
- QUIRKY but usable on iphone (iphone) with safari, chrome, firefox (various releases); inconsistencies are the same across these iphone browsers, and across portrait and landscape modes
  - parent menu items expand and links work
  - however, first and last menus open/close differently compared to other menu items
  - note behavior variations with single tap on each parent menu item
- AS EXPECTED with mouse and keyboard on:
  - various recent releases of mac, linux and windows using various recent releases of firefox and chrome
  - various recent releases of mac using variou recent releases of safari
  - various recent releases of ios on ipad using various recent releases of safari
- UNTESTED as yet on windows touchscreen devices (e.g. Surface, laptops); note [reported issue](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/31)
- UNTESTED as yet on android tablets
- INCONSISTENT (just as a sidenote) across desktop browsers in emulation mode vs the devices being emulated; this observation does not need to be addressed.

see existing bug reports that are likely related, and may merit confirmation/discussion in the course of addressing the broken functionality:
- [Top level menu item links do not work with touch-only device](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/32)
- [Chrome bug breaking top level item links on touchscreen PCs](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/31) esp. 
- [Click Main Option to Open](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/30#issuecomment-136761011)
- [Appearance on smaller screens](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/2#issuecomment-23432750)
- (less likely but worth noting, esp since it claims to have a possibly related fix) [Touch support breaks scrolling](https://github.com/adobe-accessibility/Accessible-Mega-Menu/issues/14#issuecomment-234125843)
