import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { BehaviorSubject, combineLatest, concatMap, mergeMap, Observable, of, switchMap } from 'rxjs';
import { MedicineI } from '../Models/Medicine';
import { doc, setDoc } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {
  medicineCollection: AngularFirestoreCollection<MedicineI>;
  nameFilter$: BehaviorSubject<any>;
  medicineList$: Observable<MedicineI[]>;
  

  constructor(private afs: AngularFirestore) {
    this.nameFilter$ = new BehaviorSubject(null);
    this.medicineCollection = afs.collection<MedicineI>('medicines');
    this.medicineList$ = combineLatest([this.nameFilter$])
    .pipe(
      switchMap(([name]) => 
        this.medicineCollection.valueChanges()
      ),
    );
  }

  filterByName(name: string) {
    this.nameFilter$.next(name);
  }
  getMedicines(name?: string | null | undefined) {
    return this.medicineList$;
  }

  addMedicine(medicine: MedicineI) {
    return this.medicineCollection.add({
      ...medicine,
      medicineId: this.afs.createId().toString(),
    });
    // return of({ status: 200 });
  }

  getAllMedicines(): any {
    // return this.item$;
  }
}
