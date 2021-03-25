import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QuerySnapshot,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { combineLatest, from, of } from 'rxjs';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Tier } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TiersService {
  imagesLoadedSubject = new Subject<string[]>();
  imagesLoadedObservable = this.imagesLoadedSubject.asObservable();

  private selectedTierSubject = new Subject<string>();
  selectedTierObservable = this.selectedTierSubject.asObservable();

  constructor(
    private firestore: AngularFirestore,
    private firestorage: AngularFireStorage
  ) {}

  getAvailableTiers(): Observable<Tier[]> {
    const collectionRef: AngularFirestoreCollection<Tier> = this.firestore.collection(
      'tier'
    );

    return collectionRef.get().pipe(
      take(1),
      switchMap((res) => of(res.docs.map((doc) => doc.data())))
    );
  }

  setSelectedTier(tier: string) {
    this.selectedTierSubject.next(tier);
  }

  getImages(tier: string): Observable<string[]> | null {
    if (!tier) {
      return null;
    }

    const calls: Observable<any>[] = [];
    this.firestorage
      .ref(`/${tier}`)
      .listAll()
      .pipe(take(1))
      .subscribe((res) => {
        res.items.forEach((item) => {
          calls.push(from(item.getDownloadURL()));
        });

        combineLatest(calls)
          .pipe(take(1))
          .subscribe((res) => {
            this.imagesLoadedSubject.next(res);
          });
      });
    return this.imagesLoadedObservable;
  }
}
