import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  contactusCollection: AngularFirestoreCollection<any> | null = null;
  contactus: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.contactus = this.afs.collection('contactus').valueChanges();
  }

  getContactus(){
    return this.contactus;
  }

}
