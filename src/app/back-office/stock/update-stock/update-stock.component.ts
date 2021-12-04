import { Stock } from 'src/Model/Stock';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export class UpdateStockComponent implements OnInit {
  constructor(private stockService: StockService) {}
  @Output() updateStockStatus = new EventEmitter<boolean>();
  @Input() selectedStock: Stock;
  @Output() updated = new EventEmitter<Stock>();
  ngOnInit(): void {}
  stock: FormGroup;
  myStock: any;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedStock.firstChange) {
      this.stock = new FormGroup({
        idStock: new FormControl({
          value: this.selectedStock.idStock,
          disabled: true,
        }),
        qteMin: new FormControl(this.selectedStock.qteMin, [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
        libelleStock: new FormControl(this.selectedStock.libelleStock, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
          Validators.pattern('^[a-zA-Z]*$'),
        ]),
      });
    } else {
      this.stock.setControl(
        'idStock',
        new FormControl(this.selectedStock.idStock)
      );
      this.stock.setControl(
        'qteMin',
        new FormControl(this.selectedStock.qteMin)
      );
      this.stock.setControl(
        'libelleStock',
        new FormControl(this.selectedStock.libelleStock)
      );
    }
  }

  discardUpdate() {
    this.updateStockStatus.emit(false);
  }

  updateStock() {
    this.myStock = this.stock.getRawValue();
    this.myStock = new Stock(
      this.stock.get('qteMin').value,
      this.stock.get('libelleStock').value,
      this.stock.get('idStock').value
    );
    console.log(this.myStock);
    this.stockService.updateStock(this.myStock).subscribe((res) => {
      console.log('stock updated!' + res);
    });
  }

  stockUpdated() {
    this.stock.setValue({
      idStock: '',
      qteMin: '',
      libelleStock: '',
    });
    this.updated.emit(this.myStock);
    this.updateStockStatus.emit(false);
  }
}
