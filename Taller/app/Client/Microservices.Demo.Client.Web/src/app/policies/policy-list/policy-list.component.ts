import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/data/products.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})



export class PolicyListComponent implements OnInit {
  title!: string;
  products: IProduct[] = [];
  public displayedColumns: string[] = ['Name','PolicyFron','PolicyTo','TotalPrice','FirstName', 'LastName','TaxId', 'City','Country', 'ZipCode','Street',

  ];
  dataSource = ELEMENT_DATA;
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    console.log("polices");
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe((response: IProduct[]) => {
        this.products = response;
      });
  }
}
export interface PeriodicElement {
  FirstName: string;
  Name:string,
  position: number;
  LastName: number;
  City: string;
  Country: string;
  ZipCode: string;
  Street: string;
  TaxId:string;
  TotalPrice:string;
  PolicyTo:string;
  PolicyFron:string;
}
const ELEMENT_DATA: PeriodicElement[] =[


{PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Safe Traveller',position: 1, FirstName: 'Hydrogen', LastName: 1.0079, City: 'H',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Safe Traveller',position: 2, FirstName: 'Helium', LastName: 4.0026, City: 'He',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Safe Traveller',position: 3, FirstName: 'Lithium', LastName: 6.941, City: 'Li',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 4, FirstName: 'Beryllium', LastName: 9.0122, City: 'Be',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 5, FirstName: 'Boron', LastName: 10.811, City: 'B',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 6, FirstName: 'Carbon', LastName: 12.0107, City: 'C',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 7, FirstName: 'Nitrogen', LastName: 14.0067, City: 'N',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 8, FirstName: 'Oxygen', LastName: 15.9994, City: 'O',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 9, FirstName: 'Fluorine', LastName: 18.9984, City: 'F',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
  {PolicyFron:'04/05/2024',PolicyTo:'09/09/2025',TotalPrice:'1000.00',Name:'Happy House',position: 10, FirstName: 'Neon', LastName: 20.1797, City: 'Ne',Country: 'H', ZipCode:'2002034', Street:'Street',TaxId:'001'},
];
