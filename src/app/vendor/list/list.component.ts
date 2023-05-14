import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource ,} from '@angular/material/table';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  list:IProduct[]=[]
  displayedColumns: string[] = ['imgURL', 'name', 'price', 'quantity'];
  dataSource? : MatTableDataSource<IProduct>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private prdSrv:ProductService){
    this.prdSrv.getAll().subscribe({
      next:(res)=>{
        this.list = res.data as IProduct[];
        this.dataSource = new MatTableDataSource<IProduct>(this.list);
        this.dataSource.paginator = this.paginator;

      }
    })
  }
}
