import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async getData() {
    return await this.http.get('http://localhost:8000').toPromise();
  }
}
