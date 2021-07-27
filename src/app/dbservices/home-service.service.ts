import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { home } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  homeCollection: AngularFirestoreCollection<home> | null = null;
  home: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.home = this.afs.collection('home').valueChanges();
   }

   getHome(){
     return this.home;
   }
}
