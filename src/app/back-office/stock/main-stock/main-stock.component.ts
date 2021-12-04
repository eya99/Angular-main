import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-stock',
  templateUrl: './main-stock.component.html',
  styleUrls: ['./main-stock.component.css'],
})
export class MainStockComponent implements OnInit {
  url: string;
  constructor(private router: Router) {
    console.log(this.router.url);
    this.url = this.router.url;
  }

  ngOnInit(): void {}
}
