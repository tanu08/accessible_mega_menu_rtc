run this reduced test case at https://care4kittens.github.io/accessible_mega_menu_rtc/

it illustrates issues with touch interaction using the accessible megamenu from https://github.com/adobe-accessibility/Accessible-Mega-Menu

issues seem to occur as follows
- UNUSABLE on android (various releases) with chrome (various releases; tested with varios devices)
  - parent menu items don't expand at all; no navigation to links in submenus
- QUIRKY but usable on iphone with safari, chrome, 
  - parent menu items expand and links work
  - however, first and last menus open/close differently compared to other menu items
  - note behavior variations with single tap on each parent menu item
- AS EXPECTED on browsers in desktop mode:
  - recent mac, linux and windows using recent firefox and chrome
  - recent mac using safari (various releases)

functionality is inconsistent across desktop browsers in emulation mode vs the devices being emulated.
