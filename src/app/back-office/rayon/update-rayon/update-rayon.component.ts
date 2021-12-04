import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rayon } from 'src/Model/rayon';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: ['./update-rayon.component.css'],
})
export class UpdateRayonComponent implements OnInit {
  constructor(private rayonService: RayonService) {}
  @Output() updateRayonStatus = new EventEmitter<boolean>();
  @Input() selectedRayon: Rayon;
  @Output() updated = new EventEmitter<Rayon>();
  ngOnInit(): void {}
  rayon: FormGroup;
  myRayon: any;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedRayon.firstChange) {
      this.rayon = new FormGroup({
        idRayon: new FormControl({
          value: this.selectedRayon.idRayon,
          disabled: true,
        }),
        libelle: new FormControl(this.selectedRayon.libelle, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z]*$'),
        ]),
        code: new FormControl(this.selectedRayon.code, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ]),
      });
    } else {
      this.rayon.setControl(
        'idRayon',
        new FormControl(this.selectedRayon.idRayon)
      );
      this.rayon.setControl(
        'libelle',
        new FormControl(this.selectedRayon.libelle)
      );
      this.rayon.setControl('code', new FormControl(this.selectedRayon.code));
    }

  }

  discardUpdate() {
    this.updateRayonStatus.emit(false);
  }

  updateRayon() {
    this.myRayon = this.rayon.getRawValue();
    this.myRayon = new Rayon(
      this.rayon.get('code').value,
      this.rayon.get('libelle').value,
      this.rayon.get('idRayon').value
    );
    console.log(this.myRayon);
    this.rayonService.updateRayon(this.myRayon).subscribe((res) => {
      console.log('stock updated!' + res);
    });
  }

  rayonUpdated() {
    this.rayon.setValue({
      idRayon: '',
      libelle: '',
      code: '',
    });
    this.updated.emit(this.myRayon);
    this.updateRayonStatus.emit(false);
  }
}
