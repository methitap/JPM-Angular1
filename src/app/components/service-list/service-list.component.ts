import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceListService } from 'src/app/service/service-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  public results: any;
  myForm:FormGroup;


  data: any = {
    by: '',
    serTopic: ''
  }
  constructor(private fb:FormBuilder,
    private ServiceAPI: ServiceListService, private router: Router) {
      this.myForm = this.fb.group({
        topic:'',
        detail:'',
        img:''
      });

  }
  

  ngOnInit() {
    this.getServiceList()
  }

  getServiceList() {
    this.ServiceAPI.getServiceList().subscribe(data => {
      this.results = data;
    })
  }

  onViewService() {

    this.router.navigate(["/serviceView"]);

  }

}



