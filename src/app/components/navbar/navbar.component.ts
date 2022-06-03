import { Component, OnInit } from '@angular/core';
import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('DOMContentLoaded', event => {

      // Navbar shrink function
      var navbarShrink = function () {
          const navbarCollapsible = document.body.querySelector('#mainNav');
          if (!navbarCollapsible) {
              return;
          }
          if (window.scrollY === 0) {
              navbarCollapsible.classList.remove('navbar-shrink')
          } else {
              navbarCollapsible.classList.add('navbar-shrink')
          }
  
      };
  
      // Shrink the navbar 
      navbarShrink();
  
      // Shrink the navbar when page is scrolled
      document.addEventListener('scroll', navbarShrink);
  
      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector('#mainNav');
      if (mainNav) {
          new bootstrap.ScrollSpy(document.body, {
              target: '#mainNav',
              offset: 74,
          });
      };
  
      // Collapse responsive navbar when toggler is visible
      const navbarToggler: any = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems:any = [].slice.call(
          document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem: { addEventListener: (arg0: string, arg1: () => void) => void; }) {
          responsiveNavItem.addEventListener('click', () => {
              if (window.getComputedStyle(navbarToggler).display !== 'none') {
                  navbarToggler.click();
              }
          });
      });
  
  });
  }

  

}

