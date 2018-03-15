import * as Papa from 'papaparse';
import * as d3Selection from 'd3-selection';

import * as BarChart from 'britecharts/dist/umd/bar.min';
import * as DonutChart from 'britecharts/dist/umd/donut.min';
import * as MiniTooltip from 'britecharts/dist/umd/miniTooltip.min';

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

import { Juice } from './app.types'

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  appService: AppService;
  juices: MatTableDataSource<Juice>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(appService: AppService) {
    this.loading = true;
    this.appService = appService;
    this.juices = new MatTableDataSource<Juice>();
  }

  async ngAfterViewInit() {
    this.juices.data = <any>(await this.appService.getData());

    this.juices.sort = this.sort;
    this.juices.paginator = this.paginator;

    this.drawDonuts(this.juices.data);
    this.drawBarCharts(this.juices.data);

    this.loading = false;
  }

  getColumns() {
    return [
      'Commodity_Code',
      'Commodity_Description',
      'Attribute_ID',
      'Attribute_Description',
      'Unit_ID',
      'Unit_Description',
      'Country_Code',
      'Country_Name',
      'Value',
      'Month',
      'Market_Year',
      'Calendar_Year',
    ];
  }

  drawBarCharts(data) {
    const marketData = this.barAggregator(data, 'Value', 'Market_Year');
    const calendarData = this.barAggregator(data, 'Value', 'Calendar_Year');

    this.drawBarChart(marketData, '.market-bar-chart');
    this.drawBarChart(calendarData, '.calendar-bar-chart');
  }

  drawDonuts(data) {
    const countriesData = this.donutAggregator(data, 'Country_Name', 'Country_Code');
    const attributesData = this.donutAggregator(data, 'Attribute_Description', 'Attribute_ID');

    this.drawDonut(countriesData, '.countries-donut');
    this.drawDonut(attributesData, '.attribute-donut');
  }

  donutAggregator(data, column, id) {
    const agg = data.reduce((acc, row) => {
      acc[row[column]] = {
        id: row[column],
        name: row[column],
        quantity: acc[row[column]] ? acc[row[column]].quantity + 1 : 1
      };

      return acc;
    }, {});

    return Object.values(agg);
  }

  barAggregator(data, column, id) {
    const agg = data.reduce((acc, row) => {
      const val = parseFloat(row[column]);

      acc[row[id]] = {
        name: row[id],
        value: acc[row[id]] ? val + parseFloat(acc[row[id]].value) : val
      };

      return acc;
    }, {});

    return Object.values(agg);
  }

  drawBarChart(data, target) {
    const miniTooltip = new MiniTooltip();
    const container = d3Selection.select(target);

    if (container.node()) {
      const chart = (new BarChart)
        .width(500)
        .height(250)
        .isAnimated(true)
        .on('customMouseOut', miniTooltip.hide)
        .on('customMouseOver', miniTooltip.show)
        .on('customMouseMove', miniTooltip.update)
        .margin({ left: 0, right: 0, top: 0, bottom: 0 });

      container.datum(data).call(chart);
      container.select('.metadata-group').datum([]).call(miniTooltip);
    }
  }

  drawDonut(data, target) {
    const container = d3Selection.select(target);

    if (container.node()) {
      const chart = (new DonutChart)
        .width(150)
        .height(150)
        .isAnimated(true)
        .internalRadius(40)
        .externalRadius(70)
        .hasFixedHighlightedSlice(true)
        .highlightSliceById(data[0].id);

      container.datum(data).call(chart);
    }
  }
}
