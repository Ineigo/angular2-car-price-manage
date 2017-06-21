import { Injectable } from '@angular/core';

import { Car } from './car';

@Injectable()
export class CarService {
    cars: Car[] = [
        { id: 1, name: 'Audio', price: 20000, mileage: 50 },
        { id: 2, name: 'BMW', price: 30000, mileage: 80 },
        { id: 3, name: 'Opel', price: 40000, mileage: 30 },
        { id: 4, name: 'Audio', price: 100000, mileage: 0 },
        { id: 5, name: 'BMW', price: 85000, mileage: 800 },
        { id: 6, name: 'Opel', price: 15000, mileage: 200 }
    ];
    getCars(): Promise<Car[]> {
        return Promise.resolve(this.cars);
    }
    createCar(car: Car) {
        car.id = generateId();
        this.cars.push(car);
    }
    removeCar(id: number) {
        this.cars = this.cars.filter(car => car.id !== id);
    }

    /**
     * Вычисляет число, характеризующее выборку (например, набор чисел). Если все элементы выборки различны, 
     * то медиана — это такое число выборки, что ровно половина из элементов выборки больше него, а другая половина меньше него. 
     * В более общем случае медиану можно найти, упорядочив элементы выборки по возрастанию или убыванию и взяв средний элемент.
     * @param {array} arrInt 
     */
    median(key: string = ''): number {
        const cars = Array.from(this.cars);
        let results = 0;
        cars.sort((a, b) => a[key] - b[key]);

        if (cars.length%2 !== 0) {
            results = cars[Math.ceil(cars.length/2) - 1][key];
        } else {
            results = (cars[cars.length/2 - 1][key] + cars[cars.length/2][key]) / 2;
        }

        return results;
    }
}

function IDGenerator() {
    let length = 8;
    let timestamp = +(new Date);
    
    var _getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    return function() {
        var ts = timestamp.toString();
        var parts = ts.split( "" ).reverse();
        var id = "";
        
        for( var i = 0; i < length; ++i ) {
        var index = _getRandomInt( 0, parts.length - 1 );
            id += parts[index];	 
        }
        
        return parseInt(id);
    }        
}
export const generateId = IDGenerator();