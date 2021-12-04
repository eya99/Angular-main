import { Rayon } from 'src/Model/rayon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RayonService } from '../rayon.service';

@Component({
  selector: 'app-rayon-detail',
  templateUrl: './rayon-detail.component.html',
  styleUrls: ['./rayon-detail.component.css']
})
export class RayonDetailComponent implements OnInit {
  constructor(private ac: ActivatedRoute, private rayonService: RayonService) {}
  rayon: Rayon;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (next) =>
        this.rayonService
          .getRayonById(Number(next.get('id')))
          .subscribe((res) => {
            this.rayon = res;

          }),
      (error) => console.log(error)
    );
  }

}
