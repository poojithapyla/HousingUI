import { Component, OnInit } from '@angular/core';
import { IProperties } from 'src/app/interface/properties';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-buy-property',
  templateUrl: './buy-property.component.html',
  styleUrls: ['./buy-property.component.css']
})
export class BuyPropertyComponent implements OnInit {
  SellRent: boolean= true;
  filteredProperties:IProperties[]=[];

  constructor(private housing: HousingService) {}
  ngOnInit(): void {
    this.housing.getProperties().subscribe(
      data => {
        this.filteredProperties=data;
        this.filteredProperties=this.filteredProperties.filter(f=> f.SellRent==this.SellRent);
      }
    )
    
  }

}
