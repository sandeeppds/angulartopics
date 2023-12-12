import { Component } from '@angular/core';

@Component({
  selector: 'app-custome-menu-bar',
  templateUrl: './custome-menu-bar.component.html',
  styleUrls: ['./custome-menu-bar.component.css']
})
export class CustomeMenuBarComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', link: '/home',name:'' },
    { label: 'About', link: '/about', name:'' },
    { label: 'Services', link: '/services',name:''  },
    { label: 'Contact', link: '/contact', name:'' },
  ];
  menuItem : MenuItems[] = [
    { label : 'Home' },
    { label : 'Aboutus' },
    { label : 'Contact' }
  ];
}
interface MenuItem {
  label: string;
  name:string;
  link: string;
}
interface MenuItems {
  label : string;
}

