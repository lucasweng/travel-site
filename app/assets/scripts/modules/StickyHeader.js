import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    let self = this;
    new Waypoint ({
      element: self.headerTriggerElement[0], //access the DOM element
      handler: function(direction) {
        if (direction == "down") {
          self.siteHeader.addClass("site-header--dark");
        } else {
          self.siteHeader.removeClass("site-header--dark");
          self.headerLinks.removeClass("is-current-link");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    let self = this; // StickyHeader = 'this'
    this.pageSections.each(function() {
      let currentPageSection = this; // the pageSections div being looped through
      new Waypoint ({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%" // 0% is the very top of the page
      });

      new Waypoint ({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            let matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            self.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%" // 0% is the very top of the page
      });
    });
  }
}

export default StickyHeader;
