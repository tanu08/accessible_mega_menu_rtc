/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {

"use strict";

// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    function toggleContent(title) {
      return '<span class="abbr-hamburger"></span>' + Drupal.t(title);
    }

    // Add toggle button for small screen navigation
    function addNavtoggle(container, options) {
      if (container === undefined) return;
      var toggleSettings = {
        classes: 'abbr-navtoggle',
        title: 'Menu',
        menu: false
      };
      $.extend(toggleSettings, options);
      if (toggleSettings.menu) {
        var toggle = $('<a/>', { 'class': toggleSettings.classes });
        toggle.addClass('abbr-item-toggler');
        toggleSettings.menu.addClass('abbr-toggle-item');
        toggle.prepend( toggleContent(toggleSettings.title) ).prependTo( $(container) );
        toggle.click(function () {
          $('.abbr-toggle-item').not(toggleSettings.menu).hide();
          $('.abbr-item-toggler').not(this).removeClass('active');
          toggleSettings.menu.slideToggle('fast');
          toggle.toggleClass('active');
        });
      }
    }

    //add a menu toggle buttons for small screens
    $('#abbr-global-header', context).once('navtoggle', function() {
      addNavtoggle(this, {
        classes: 'abbr-navtoggle',
        title: 'Menu',
        menu: $('.accessible-megamenu')
      });
      addNavtoggle(this, {
        classes: 'abbr-searchtoggle',
        title: 'Search',
        menu: $('.region-header .block-search')
      });
    });

    //enable accordion for FAQs
    $('article.node-collection.faq div.field-collection-container').accordion({
      heightStyle: "content",
      collapsible: true,
      active: false,
      activate: function( event, ui ) {
        if(!$.isEmptyObject(ui.newHeader.offset())) {
            var offset = ( $(".above-page-logo-wrapper").css("position") == "fixed" ) ? $(".above-page-logo-wrapper").outerHeight() : 0;
            $('html:not(:animated), body:not(:animated)').animate({ scrollTop: (ui.newHeader.offset().top - offset) }, 'fast');
        }
      }
    });

    //wrap tables, so they can side scroll on small screens
    //except alice vital stats
    $('.main-content table', context).once('table-responsive', function () {
      if ( $(this).parents("table-responsive").length == 0 && !$(this).hasClass('abbr-about-alice-stats') ) {
        $(this).wrap('<div class="table-responsive"></div>');
      }
    });

    //hide form on "Ask Alice" page and add a toggle button
    if ( $(".page-node-add-question").length && !$('body.logged-in').length ) {
      if ($('#question-node-form .required.error').length) {
        $('.abbr-ask-your-question-top').addClass('visually-hidden');
      }
      else {
        $('.abbr-ask-your-question-top', context).once('formtoggle', function() {
          var $button = $('<button>', { 'class' : 'toggle-form-button' ,
            'aria-controls' : 'question-node-form'
          });
          $button.html('Ok, show the question form');
          $('.abbr-ask-your-question-top').append($button);
          $('.node-question-form').hide().attr('aria-expanded', 'false');
          $button.click( function() {
            $('.node-question-form').show().attr('aria-expanded', 'true').focus();
            $('.abbr-ask-your-question-top').addClass('visually-hidden');
          });
        });
      }
    }

    //set minimum height for featured area with feature images
    // in case headline breaks over multiple lines and is taller than the image
    if ( $('.abbr-with-hero-image .featured').length ) {
      $( window ).on('load resize', function() {
        $('.abbr-with-hero-image .featured').css('min-height', $('.abbr-with-hero-image .featured .page-title').outerHeight(true) );
      });
    }

    // Move the focus to the error message if there is such.
    $('.messages--error').attr('tabindex', '0').focus();


    // TEMPORARY--disable click on top links of footer menu
    var $topLinks = $('#block-menu-menu-footer-menu > ul.menu > li.menu__item.first > a, #block-menu-menu-footer-menu > ul.menu > li.menu__item.last > a')
      .css('cursor', 'default')
      .hover(function () {
        $(this).css({
          'color': 'inherit',
          'background-color': 'inherit'
        })
      })
      .click(function (event) {
        event.preventDefault();
      });

  }
};


})(jQuery, Drupal, this, this.document);
