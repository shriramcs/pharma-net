import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { MatButtonModule } from '@angular/material/button';
 import { MatCardModule } from '@angular/material/card';
 import { MatDividerModule } from '@angular/material/divider';
 import { MatIconModule } from '@angular/material/icon';
 import { MatInputModule } from '@angular/material/input';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatSelectModule } from '@angular/material/select';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatTooltipModule } from '@angular/material/tooltip';
 import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
 import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

 @NgModule({
 declarations: [],
 imports: [CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatAutocompleteModule
  ],
  exports: [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatAutocompleteModule
  ]
  })
  export class NgMaterialModule { }