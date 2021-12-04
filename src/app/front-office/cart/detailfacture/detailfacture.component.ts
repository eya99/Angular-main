import { Component, OnInit } from '@angular/core';
import { DetailFacture } from 'src/Model/DetailFacture';
import { FactureService } from 'src/app/ServiceCart/facture.service'
import { ActivatedRoute, Router } from '@angular/router';
;@Component({
  selector: 'app-detailfacture',
  templateUrl: './detailfacture.component.html',
  styleUrls: ['./detailfacture.component.css']
})
export class DetailfactureComponent implements OnInit {
id;
  constructor(private factureService: FactureService,private router : Router,private activatedRoute: ActivatedRoute ) { }
  listfacture: DetailFacture[];

searchText;

  ngOnInit(): void {
    this.getAllFactureDetail()
  }



  getAllFactureDetail(){
    
    this.activatedRoute.paramMap.subscribe(result => {
      this.id=result.get('id');
    this.factureService.getFactureDetailById(this.id).subscribe((res) => {
      console.log(res)
     this.listfacture=res;
     console.log(this.listfacture) 
     console.log(res)   });
    })
  
  
    }

}