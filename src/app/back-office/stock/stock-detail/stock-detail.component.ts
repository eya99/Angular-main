import { Stock } from 'src/Model/Stock';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css'],
})
export class StockDetailComponent implements OnInit {
  constructor(private ac: ActivatedRoute, private stockService: StockService) {}
  stock: Stock;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (next) =>
        this.stockService
          .getStockById(Number(next.get('id')))
          .subscribe((res) => {
            this.stock = res;
          }),
      (error) => console.log(error)
    );
  }
}
