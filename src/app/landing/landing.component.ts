import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineI } from '../Models/Medicine';
import { MedicineService } from '../services/medicine.service';
import { AppUser } from 'src/app/models/appuser';
 import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'phn-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public appUser: any;
  public searchParam = "";
  public medicines: MedicineI[] = [];
  loading = true;
  constructor(private router: Router, private medicineService: MedicineService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    // this.getMedicines();
  }

}
