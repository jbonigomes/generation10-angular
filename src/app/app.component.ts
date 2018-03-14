import * as Papa from 'papaparse';

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

import { MatSort } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';

import { Juice } from './app.types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  juices: MatTableDataSource<Juice>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
    this.loading = true;
    this.juices = new MatTableDataSource<Juice>();
  }

  ngAfterViewInit() {
    Papa.parse('/assets/psd_juice.csv', {
      header: true,
      download: true,
      complete: (results) => {
        this.juices.data = results.data;

        this.juices.sort = this.sort;
        this.juices.paginator = this.paginator;

        this.loading = false;
      }
    });
  }

  getColumns() {
    return [
      'Month',
      'Value',
      'Unit_ID',
      'Market_Year',
      'Attribute_ID',
      'Country_Code',
      'Country_Name',
      'Calendar_Year',
      'Commodity_Code',
      'Unit_Description',
      'Attribute_Description',
      'Commodity_Description'
    ];
  }
}
