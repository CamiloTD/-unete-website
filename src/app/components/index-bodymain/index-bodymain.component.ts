import { Component, OnInit } from '@angular/core';
import Lang from '../../lang/index'

@Component({
  selector: 'app-index-bodymain',
  templateUrl: './index-bodymain.component.html',
  styleUrls: ['./index-bodymain.component.styl']
})
export class IndexBodymainComponent implements OnInit {
  title = 'UneteIO';
  Lang = Lang;

  constructor() { }

  ngOnInit() {
  }

}
