import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/Model/Stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  my_Stock: Stock[];
  addstockStatus = false;
  updateStockStatus = false;
  stockToUpdate: Stock;
  stockId: bigint;
  constructor(private stockService: StockService) {}
  getAllStocks() {
    this.stockService.getAllStock().subscribe((res) => {
      this.my_Stock = res;
    });
  }
  toogleAddStock() {
    this.addstockStatus = !this.addstockStatus;
    this.updateStockStatus = false;
  }
  ngOnInit(): void {
    this.getAllStocks();
  }
  addStockToList(stock: Stock) {
    this.my_Stock.push(stock);
    this.getAllStocks();
  }
  getStockList(stock: Stock) {
    this.getAllStocks();
  }
  toogleStatus() {
    this.addstockStatus = false;
  }
  CloseUpdate() {
    this.updateStockStatus = false;
  }
  getStockID(id: bigint) {
    this.stockId = id;
  }
  delete() {
    this.stockService.deleteStock(this.stockId).subscribe((res) => {
      this.getAllStocks();
    });
  }

  toogleUpdateStock(stock: Stock) {
    this.stockToUpdate = stock;
    this.updateStockStatus = true;
    this.addstockStatus = false;
  }
}
