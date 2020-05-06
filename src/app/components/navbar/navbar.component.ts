import { Component, OnInit } from '@angular/core';
import Lang from '../../lang/index'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  title = 'UneteIO';
  Lang = Lang;

  constructor() { }

  ngOnInit() {
  }

}
