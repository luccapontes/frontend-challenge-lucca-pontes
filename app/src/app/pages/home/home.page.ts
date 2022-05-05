import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidaysListService } from 'src/app/services/holidays-list.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public router: Router,
    private userCrudService: HolidaysListService
  ) { }

  res
  list = []

  async getHolidays(){
  }

  async ionViewDidEnter() {
    this.res = await this.userCrudService.get()
    this.res.countries.forEach(element => {
      this.list.push(element)
    });
  }

  async goToDetails(country_code, year){
    
    this.res = await this.userCrudService.getHolidays({
      country_code,
      year
    })

    localStorage.setItem('holidays', JSON.stringify(this.res.holidays))

    this.router.navigate(['details'])
  }

}
