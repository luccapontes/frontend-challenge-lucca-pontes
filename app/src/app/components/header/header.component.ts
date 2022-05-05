import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() voltar: boolean = true;

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {}

  backButton() {
    this._location.back();
  }

}
