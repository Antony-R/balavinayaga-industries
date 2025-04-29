import { Component, OnInit } from '@angular/core';
import { ContactusService } from '../dbservices/contactus.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  embedLocation: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9098587242815!2d80.0851339!3d12.977616999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f5f9b6124389%3A0xfcbd41717191991f!2sBalavinayaga%20Industries!5e0!3m2!1sen!2sin!4v1745689493162!5m2!1sen!2sin';
  safeLocationUrl: SafeResourceUrl | undefined;

  constructor(private contactService: ContactusService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.contactService.getContactus().subscribe(contactUs => {
      this.address1 = contactUs[0].address1;
      this.address2 = contactUs[0].address2;
      this.phNo1 = contactUs[0].phNo1;
      this.phNo2 = contactUs[0].phNo2;
      this.email = contactUs[0].email;
      this.message = contactUs[0].message;
      this.location = contactUs[0].location;
      this.embedLocation = contactUs[0].embedLocation;
      this.safeLocationUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLocation);
    })
  }

}
