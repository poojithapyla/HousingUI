import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{
  id: number=0;
  constructor(private route: ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      data => {
        this.id = +data['id'];
      }
    )
  }

  next(){
    this.id+=1;
    this.router.navigate(['/property-detail', this.id]);
  }

  
}
