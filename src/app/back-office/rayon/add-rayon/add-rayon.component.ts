import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Rayon } from 'src/Model/rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css'],
})
export class AddRayonComponent implements OnInit {
  constructor(private rayonService: RayonService) {}

  @Output() rayonAdded = new EventEmitter<Rayon>();
  @Output() addRayonStatus = new EventEmitter<boolean>();
  rayon: FormGroup;
  myRayon: Rayon;
  ngOnInit(): void {
    this.rayon = new FormGroup({
      idRayon: new FormControl(),
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
      ]),
      libelle: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
    });
  }

  addRayon() {
    this.myRayon = new Rayon(
      this.rayon.get('code').value,
      this.rayon.get('libelle').value
    );
    this.rayonService.addRayon(this.myRayon).subscribe((res) => {
      console.log('rayon created!' + res);
    });
  }

  RayonAdded() {
    this.rayon.setValue({
      idRayon: '',
      code: '',
      libelle: '',
    });
    this.rayonAdded.emit(this.myRayon);
    this.addRayonStatus.emit(false);
  }
  discardAdd() {
    this.addRayonStatus.emit(false);
  }
}
