import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  data: any;
  leftData: any;
  yearsList: any=[];

  constructor(private appservice:AppService) { }

  ngOnInit(): void {
    
this.pageData()
 
    
  }

  pageData(){
    this.appservice.getData().subscribe((res) => {
      this.data = res;
      this.data.forEach(item => {
        this.yearsList.push(item.launch_year)
      })
      this.yearsList = [...new Set(this.yearsList)]
    })

  }

  launchClick(value){
    this.appservice.getLaunchData(value).subscribe((res) => {
      this.data = res;
      })
  }

  landingClick(value){
    this.appservice.getLandData(value).subscribe((res) => {
      this.data = res;
    })
  }

  yearClicked(value,id){
    this.appservice.getYearData(value).subscribe((res) => {
      this.data = res;
    })
  }



}
