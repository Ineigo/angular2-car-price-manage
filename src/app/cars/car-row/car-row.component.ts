import { Component, ViewEncapsulation, Input  } from '@angular/core';
import { Car } from '../../car';
import { CarService } from "app/car.service";

// import {NgForm} from '@angular/forms';

@Component({
    selector: 'car-row',
    templateUrl: './car-row.component.html',
    styleUrls: ['./car-row.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CarRow {
    @Input() car: Car;
    @Input() onRemove: Function;
    constructor(private _carService: CarService) {}

}