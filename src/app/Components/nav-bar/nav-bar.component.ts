import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  items: MenuItem[] = [];
  activeItem: MenuItem = {};


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Global Details',command: ()=>{
        this.router.navigate(['home'])
      }},
      {label: 'Countres Details',command: ()=>{
        this.router.navigate(['countries'])
      }}
  ];
  this.activeItem = this.items[0];
  }

}
