import { Component, OnInit } from '@angular/core';
import { ServicepageService } from '../dbservices/servicepage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  heading: string = '';
  points: string[] = [];
  undertake: string = '';
  laser: boolean = false;
  shear: boolean = false;
  fold: boolean = false;
  power: boolean = false;
  
  servicepage: any | null = null; 

  constructor(private servicepageService: ServicepageService) { }

  ngOnInit(): void {
    this.servicepageService.getServicepage().subscribe(servicepage => {
      this.servicepage = servicepage[0];
      this.laserCutting();
    })
  }

  laserCutting() {
    this.laser = true;
    this.shear = false;
    this.fold = false;
    this.power = false;
    this.heading = this.servicepage.laser.heading;
    this.points = this.servicepage.laser.points;
    this.undertake = this.servicepage.laser.undertake;
  }

  shearing() {
    this.laser = false;
    this.shear = true;
    this.fold = false;
    this.power = false;
    this.heading = this.servicepage.shearing.heading;
    this.points = this.servicepage.shearing.points;
    this.undertake = this.servicepage.shearing.undertake;
  }

  folding() {
    this.laser = false;
    this.shear = false;
    this.fold = true;
    this.power = false;
    this.heading = this.servicepage.folding.heading;
    this.points = this.servicepage.folding.points;
    this.undertake = this.servicepage.folding.undertake;
  }

  powerPress() {
    this.laser = false;
    this.shear = false;
    this.fold = false;
    this.power = true;
    this.heading = this.servicepage.powerPress.heading;
    this.points = this.servicepage.powerPress.points;
    this.undertake = this.servicepage.powerPress.undertake;
  }

}
