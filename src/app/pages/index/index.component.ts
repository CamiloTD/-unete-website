import { Component, OnInit } from '@angular/core';
import Lang from '../../lang/index'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {
  title = 'UneteIO';
  Lang = Lang;

  constructor() { }

  ngOnInit() {
  }

}
