import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProperties } from 'src/app/interface/properties';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private housingservice: HousingService) {
    
  }

  ngOnInit(): void {
    this.housingservice.getProperties().subscribe (
      data=> {
        this.Properties=data;
      }
    )
  }
  Properties!: Array<IProperties>;

}
