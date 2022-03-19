import { Component, OnInit } from '@angular/core';
import { MedicineI } from '../Models/Medicine';
import { MedicineService } from '../services/medicine.service';
import { map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { SnackbarService } from '../services/snackbar.service';

const MOCK_DATA = [
  {
    name: "Paracetamol",
    manufacturingDate: new Date(),
    expiryDate: "20-01-2024"
  }
];

@Component({
  selector: 'phn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchParam: string = "";
  public searching: boolean = false;
  public medicines: any = [];

  myControl = new FormControl();
  options: MedicineI[] = [];
  filteredOptions!: Observable<MedicineI[]>;

  constructor(private medicineService: MedicineService, private snackBarService: SnackbarService) { }

  ngOnInit(): void {
    this.getMedicines();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): MedicineI[] {
    const filterValue = value.toLowerCase();

    return this.medicines.filter((option: MedicineI) => option.name.toLowerCase().includes(filterValue));
  }

  public getMedicines(name?: string){
    this.searching = true;
    this.medicineService.getMedicines()
    .subscribe(
      (data: any) => {
        this.medicines = name ? data.filter((result: MedicineI) => result.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) : data;
        this.searching = false;
      },
      (error: any) => {
        console.log("errrrror", error);
        this.searching = false;
        this.snackBarService.showSnackBar('Error displaying medicines');
      },
      () => {}
    );
  }

  public searchMedicine(){
    this.getMedicines(this.searchParam);
  }
  public reset(){
    this.getMedicines();
  }

  public onMedSelect(event: any) {
    console.log(event, this.myControl.value);
  }

}
