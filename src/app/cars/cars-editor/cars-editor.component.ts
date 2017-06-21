import { Component, ViewEncapsulation } from '@angular/core';
import { Car } from '../../car';
import { CarService } from "app/car.service";

import {NgForm} from '@angular/forms';

@Component({
    selector: 'cars-editor',
    templateUrl: './cars-editor.component.html',
    styleUrls: ['./cars-editor.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CarsEditor {
    constructor(private _carService: CarService) {}

    onSubmit(form: NgForm) {
        if (!form.invalid) {
            const car: Car = form.value;
            this._carService.createCar(car);
            form.resetForm();
        }
    }
}