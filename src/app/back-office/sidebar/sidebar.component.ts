import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produit } from 'src/Model/Produit';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() addedProduct = new EventEmitter<Produit>();
  constructor() { }

  ngOnInit(): void {
  }

}
