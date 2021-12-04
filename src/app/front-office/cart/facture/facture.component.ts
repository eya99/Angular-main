import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/Model/Facture';
import { FactureService } from 'src/app/ServiceCart/facture.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  constructor(private factureService: FactureService,  private route: ActivatedRoute,) { }
 
  listfacture: Facture[];
  searchMode: boolean = false;
  searchText;
  prixTotal;
  

 
  ngOnInit(): void {
    this.getAllFacture()
  }



  getAllFacture(){
    this.factureService.getFactureById(1).subscribe((res) => {
      console.log(res)
     this.listfacture=res;
     console.log(this.listfacture) 
     console.log(res)   });
  }


}