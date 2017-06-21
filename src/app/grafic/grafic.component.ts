import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { AmChartsService } from "@amcharts/amcharts3-angular/es2015";

@Component({
    selector: 'grafic',
    templateUrl: './grafic.component.html',
    styleUrls: ['./grafic.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class Grafic implements OnInit { 
    chart: any;
    constructor(private _carService: CarService, private _amCharts: AmChartsService) { }
    ngOnInit(): void {
        this._carService.getCars()
            .then(cars => this.makeCars(this.makeCarsProvider(cars)));
    }
    makeCarsProvider(cars: Car[]) {
        return cars.sort((prev, next) => prev.mileage > next.mileage ? 1 : prev.mileage < next.mileage ? -1 : 0 );
    }  
    ngOnDestroy() {
        this._amCharts.destroyChart(this.chart);
    }

    makeCars(provider) {
        this.chart = this._amCharts.makeChart("chartdiv", getSettingsCharts(provider) );
    }
}

const getSettingsCharts = provider => ({
	"type": "serial",
	"categoryField": "mileage",
	"autoMarginOffset": 40,
	"marginRight": 60,
	"marginTop": 60,
	"startDuration": 1,
	"accessibleTitle": "",
	"fontSize": 13,
	"theme": "light",
	"categoryAxis": {
		"gridPosition": "start",
		"title": "Пробег",
		"titleColor": "#555",
		"titleRotation": 0
	},
	"trendLines": [],
	"graphs": [
		{
			"balloonText": "[[name]] [[value]] руб. - [[category]] км",
			"bullet": "round",
			"bulletSize": 10,
			"id": "AmGraph-1",
			"lineAlpha": 1,
			"lineThickness": 3,
			"title": "Цена(руб.)",
			"type": "smoothedLine",
			"valueField": "price"
		}
	],
	"dataProvider": provider
});