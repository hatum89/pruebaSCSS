import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  change: boolean;
  activeIconData: number;
  constructor() { }

  ngOnInit(): void {
    this.activeIconData = 1;
  }

  // tslint:disable-next-line:typedef
  activeIcon() {
    this.activeIconData = 0;
    setTimeout(() => {
      this.activeIconData = 1;
    }, 200);
  }
}
