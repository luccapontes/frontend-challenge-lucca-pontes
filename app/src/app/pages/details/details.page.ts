import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  public holidays

  ngOnInit() {
    this.holidays = JSON.parse(localStorage.getItem('holidays'))    
    this.formatDate()
  }

  formatDate(){
   this.holidays.forEach(element => {
      let aux = element.date.split('-');
      element.date = aux[2] + '/' + aux[1] + '/' + aux[0]
    });    
  }

}
