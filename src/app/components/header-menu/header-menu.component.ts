import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onload = function(e: any) {
      var offset: any = document.getElementsByClassName('header')[0].offsetTop;
      var menu: any = document.getElementsByClassName('header')[0];
      var screenWidth: any = screen.width;
      console.log(screenWidth)
      document.addEventListener('scroll', function() {
          if(screenWidth > 991) {
            if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
              menu.classList.add('header-moving');
            } else {
              menu.classList.remove('header-moving');
            }
          }
      });
    }
  }

}
