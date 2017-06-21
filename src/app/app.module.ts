import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageCarsList } from './cars/cars.component';
import { CarService } from './car.service';
import { CarsEditor } from "app/cars/cars-editor/cars-editor.component";
import { FormsModule } from "@angular/forms";
import { CarRow } from "app/cars/car-row/car-row.component";
import { PriceInfo } from "app/price-info/praice-info.component";
import { Grafic } from "app/grafic/grafic.component";
import { AmChartsModule } from "@amcharts/amcharts3-angular";

const appRoutes: Routes = [
  { 
    path: 'cars', 
    component: ManageCarsList 
  },
  { 
    path: 'price',
    component: PriceInfo 
  },
  { 
    path: 'grafic',
    component: Grafic 
  },
  { 
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ManageCarsList,
    CarsEditor,
    CarRow,
    PriceInfo,
    Grafic
  ],
  imports: [
    AmChartsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
