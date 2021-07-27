import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../dbservices/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  address1: string[] = ['98/2', 'Sidco Industrial Estate', 'Thirumudivakkam', 'Chennai - 132', 'Landline: 044-49512426'];
  address2: string[] = ['98/6', 'Sidco Industrial Estate', 'Thirumudivakkam', 'Chennai - 132', 'Landline: 044-49617095'];
  phNo1: number = 9841418245;
  phNo2: number = 6369648442;
  email: string = 'balavinayagaindustries@gmail.com';
  message: string = 'You can send your resume to the above mail id if you are interested in a job in our company.';
  location: string = 'https://maps.app.goo.gl/sJdewMHM99DUnWzk7';

  constructor(private contactService: ContactusService) { }

  ngOnInit(): void {
    this.contactService.getContactus().subscribe(contactUs => {
      this.address1 = contactUs[0].address1;
      this.address2 = contactUs[0].address2;
      this.phNo1 = contactUs[0].phNo1;
      this.phNo2 = contactUs[0].phNo2;
      this.email = contactUs[0].email;
      this.message = contactUs[0].message;
      this.location = contactUs[0].location;
    })
  }

}
