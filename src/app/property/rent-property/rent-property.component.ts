import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { IProperties } from 'src/app/interface/properties';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-rent-property',
  templateUrl: './rent-property.component.html',
  styleUrls: ['./rent-property.component.css']
})
export class RentPropertyComponent implements OnInit{
  SellRent:boolean=false;
  filterProperties: IProperties[] = [];
  constructor(private housing : HousingService) {
    
  }
  ngOnInit(): void {
    this.housing.getProperties().subscribe(
      data => {
        this.filterProperties=data;
        this.filterProperties=this.filterProperties.filter(p=> p.SellRent==false);
      }
    )

 }
}
