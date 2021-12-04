import { Component, OnInit } from '@angular/core';
import { Rayon } from 'src/Model/rayon';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon-list',
  templateUrl: './rayon-list.component.html',
  styleUrls: ['./rayon-list.component.css'],
})
export class RayonListComponent implements OnInit {
  constructor(private rayonService: RayonService) {}
  rayon_list: Rayon[];
  rayonId: bigint;
  rayonToUpdate: Rayon;
  addRayonStatus = false;
  updateRayonStatus = false;
  ngOnInit(): void {
    this.getAllRayons();
  }

  toogleAddRayon() {
    this.addRayonStatus = !this.addRayonStatus;
    this.updateRayonStatus = false;
  }
  getAllRayons() {
    this.rayonService.getAllRayons().subscribe((res) => {
      this.rayon_list = res;
    });
  }

  addRayonToList(rayon: Rayon) {
    this.rayon_list.push(rayon);
    this.getAllRayons();
  }
  getRayonById(id: bigint) {
    this.rayonId = id;
  }
  delete() {
    this.rayonService.deleteRayon(this.rayonId).subscribe((res) => {
      this.getAllRayons();
    });
  }

  CloseUpdate() {
    this.updateRayonStatus = false;
  }

  getRayonList(rayon: Rayon) {
    this.getAllRayons();
  }
  toogleUpdateRayon(rayon: Rayon) {
    this.rayonToUpdate = rayon;
    this.updateRayonStatus = true;
    this.addRayonStatus = false;
  }
}
