import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule, HttpClientModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  products: Product[] = [];
  columns: string[] = ['cover', '#No', 'Name', 'price'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
