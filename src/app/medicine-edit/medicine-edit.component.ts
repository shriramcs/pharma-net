import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineI } from '../Models/Medicine';
import { MedicineService } from '../services/medicine.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'phn-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.scss']
})
export class MedicineEditComponent implements OnInit {

  public medicineData: MedicineI = {
    name: "",
    count: 10,
    expiryDate: "",
    manufacturingDate: "",
    medicineId: "",
    price: 100
  };
  public medicineTitle: string = "";

  constructor(private medicineService: MedicineService, private router: Router, private snackBarService: SnackbarService) { }

  ngOnInit(): void {
  }

  isValidForm(){
    return this.medicineData &&
    this.medicineData.name &&
    this.medicineData.expiryDate &&
    this.medicineData.manufacturingDate &&
    this.medicineData.price && this.medicineData.price >= 0 &&
    this.medicineData.count && this.medicineData.count >= 0;
  }

  public saveMedicine(){
    if(!this.isValidForm()){
      return;
    }
    this.medicineService.addMedicine(this.medicineData)
    .then((response: any) => {
      console.log(response);
      this.router.navigate(['/']);
      this.snackBarService.showSnackBar("Medicine added");
    }).catch((e: any) => {
      console.log(e);
    });
  }

  public cancel() {
    this.router.navigate(['/']);
  }

}
