import { Component, OnInit } from '@angular/core';
import { ItemWithPath } from '../model/nav-item';

@Component({
  selector: 'interview-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navItems: ItemWithPath[] = [
    {text: 'Accueil', path: 'home', alt: 'Home'},
    {text: 'NeoSoFt', path: 'neosoft', alt: 'NeoSoft form'}
  ];

}
