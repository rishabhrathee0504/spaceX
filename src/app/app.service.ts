import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100");
  }

  getLaunchData(value) {
    return this.http.get("https://api.spaceXdata.com/v3/launches?launch_success="+value);
  }

  getLandData(value) {
    return this.http.get("https://api.spacexdata.com/v3/launches?land_success=" + value);
  }

  getYearData(value) {
    return this.http.get("https://api.spacexdata.com/v3/launches?launch_year=" + value);
  }

 
}
