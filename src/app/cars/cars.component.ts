import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
    selector: 'cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ManageCarsList implements OnInit {
    cars: Car[];
    ngOnInit(): void {
        this._updateCars();
    }
    constructor(private _carService: CarService) { }
    
    onRemove = (id: number): void => {
        this._carService.removeCar(id);
        this._updateCars();
    }
    private _updateCars(): void {
        this._carService.getCars().then(cars => this.cars = cars);
    }

}