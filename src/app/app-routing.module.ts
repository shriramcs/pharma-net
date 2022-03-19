import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './landing/landing.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'addmedicine', component: MedicineEditComponent,  canActivate: [AdminAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
