import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServiceListService } from 'src/app/service/service-list.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {
  public results: any;
  public selectedValue: any;
  public status: any;
  myForm:FormGroup;
  base64data: any;
  imgUrl: any;


  data: any = {
    by: '',
    serTopic: '',
    tool: '',
    serDetail: '',
    status: '',
    serimage: '',
    location: '',
    file: ''
  }
  constructor(private fb:FormBuilder,
    private ServiceAPI: ServiceListService, private router: Router,private sanitizer: DomSanitizer) {
      this.myForm = this.fb.group({
    by: '',
    serTopic: '',
    tool: '',
    serDetail: '',
    status: '',
    serimage: '',
    location: '',
    file: '',
      });

  }
  

  async ngOnInit() {
    this.getServiceList()
  }

  async getServiceList() {
    var id = localStorage.getItem('viewServiceID')
    await this.ServiceAPI.getServiceByID(id).subscribe(async data => {
      this.results = await data;
      this.status = "Pending"
      console.log(JSON.parse(JSON.stringify(this.results[0])))
      console.log(this.status)
    }) 
    for (let i = this.results.length; i > 0; i--) {
      console.log(i)
      console.log(this.results[i-1], this.results[i-1].img)
      this.ServiceAPI.getImage(this.results[i-1].img).subscribe(async res => {
        console.log(res)
        let url = URL.createObjectURL(res)
        console.log(url)
        this.results[this.results.length - i].img = this.sanitizer.bypassSecurityTrustResourceUrl(url)
        console.log(this.results)
      })
    }
}
  onDoneService(){
    let parseData = JSON.parse(JSON.stringify(this.results[0]))
    this.ServiceAPI.putServiceByID(localStorage.getItem('viewServiceID'), parseData, this.status).subscribe(async data => {
      console.log(data)
    })
    setTimeout(function() { //Start the timer
      this.router.navigate(["/serviceHistory"]) //After 1 second, set render to true
    }.bind(this), 1000)
    

  }
  onChange(deviceVal) {
    console.log(deviceVal)
    if(deviceVal === "รอดำเนินการ") {
      this.status = "Pending"
      console.log(this.status)
    } else if (deviceVal === "กำลังดำเนินการ") {
      this.status = "Process"
      console.log(this.status)
    } else if (deviceVal === "ดำเนินการเรียบร้อย") {
      this.status = "Success"
      console.log(this.status)
    }
  }
  
}
