import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicepageService {
  
  servicepageCollection: AngularFirestoreCollection<any> | null = null;
  servicepage: Observable<any[]>;

  constructor(private afs: AngularFirestore) { 
    this.servicepage = this.afs.collection('servicepage').valueChanges();
  }

  getServicepage(){
    return this.servicepage;
  }

}
