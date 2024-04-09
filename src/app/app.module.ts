import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './service/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { BuyPropertyComponent } from './property/buy-property/buy-property.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserServiceService } from './service/user-service.service';

const routes: Routes = [
  {path: "", component: PropertyListComponent},
  {path: "add-property", component:AddPropertyComponent},
  {path: "rent-property", component:RentPropertyComponent},
  {path: "buy-property", component:BuyPropertyComponent},
  {path: "property-detail/:id", component: PropertyDetailComponent},
  {path: "register", component:RegisterComponent},
  {path: "login", component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    BuyPropertyComponent,
    RentPropertyComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HousingService,
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
