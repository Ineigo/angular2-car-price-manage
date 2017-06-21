import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
    selector: 'price-info',
    templateUrl: './price-info.component.html',
    styleUrls: ['./price-info.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class PriceInfo implements OnInit { 
    priceMedian: number;
    mileageMedian: number;
    ngOnInit(): void {
        this.priceMedian = this._carService.median('price');
        this.mileageMedian = this._carService.median('mileage');
    }
    constructor(private _carService: CarService) { }
}