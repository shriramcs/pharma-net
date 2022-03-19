import { Component, OnInit } from '@angular/core';
import { AppUser } from '../Models/app-user';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'phn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public appUser: AppUser = new AppUser();
  constructor(private authService: AuthService) {}


  ngOnInit(): void {
    this.authService.appUser$.subscribe((appUser: AppUser) => this.appUser = appUser);
  }
  login() {
    this.authService.login();
    }
    logout() {
    this.authService.logout();
    }

}
