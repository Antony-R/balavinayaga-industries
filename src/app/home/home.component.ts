import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../dbservices/home-service.service';
import { home } from '../models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text: string = ''
  customers: string[] = ['Benco Thermal Techologies (p).ltd','K2 cranes and components (p).ltd','Girija uniqlean systems','Ti Anode Fabricators','Fine tech engineering','Ramtech refrigeration (p).ltd','Lakshmi industries'];

  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.homeService.getHome().subscribe(home => {
      this.text = home[0].text;
      this.customers = home[0].customers;
    })
  }

}
