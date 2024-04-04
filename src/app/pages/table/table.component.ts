import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BtnComponent,
    CdkTableModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  dataSource = new DataSourceProduct();
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}