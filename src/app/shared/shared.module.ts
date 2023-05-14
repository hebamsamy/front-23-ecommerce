import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule}from "@angular/material/icon"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    //costom directive
    //costom pipes 
    //.....
  ],
  imports: [
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    NgxPaginationModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    MatSnackBar
  ]
})
export class SharedModule { }
