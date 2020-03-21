import { Component, OnInit } from '@angular/core';
import { ServiceListService } from 'src/app/service/service-list.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.css']
})
export class ServiceHistoryComponent implements OnInit {
  public results: any;
  myForm: FormGroup;
  public isPending: boolean = true;
  public isProcessing: boolean = true
  public isSuccess: boolean = true

  data: any = {
    by: '',
    serTopic: ''
  }

  constructor(private fb: FormBuilder,
    private ServiceAPI: ServiceListService,
    private router: Router) {
    this.myForm = this.fb.group({
      by: '',
      serTopic: ''
    });

  }


  ngOnInit() {
    this.getServiceList()
  }


  getServiceList() {
    this.ServiceAPI.getServiceList().subscribe(async data => {
      this.results = await data;
      console.log(this.results)
      for (var i = 0; i < this.results.length; i++) {
        var labelClass = 'label '
        switch (this.results[i].status) {
          case 'Pending':
            labelClass += 'label-danger'
            break;
          case 'Process':
            labelClass += 'label-warning';
            break;
          case 'Success':
            labelClass += 'label-success';
            break;
          default :
            labelClass += 'label-info'
            break;
        }
        this.results[i].classStatus = labelClass;

      }
      // console.log(this.results,'<<<<results')
      // console.log(data)
      // console.log( 
      //   this.results.sort((a, b) => {
      //     <any>new Date(a.serDate)-<any>new Date(b.serDate) ;
      //   })
      // )

      this.results = this.results.sort((a, b) => {
        <any>new Date(a.serDate) - <any>new Date(b.serDate);
      })
      return this.results.sort((a, b) => {
        return <any>new Date(b.serDate) - <any>new Date(a.serDate);
      });
    })
  }

  viewService(data) {
    console.log(data)
    console.log('data>>>', data._id)
    localStorage.setItem('viewServiceID', data._id)
    this.ServiceAPI.getServiceByID(data._id).subscribe(dataById => {
      console.log('dataById*****>>', dataById)
    })
    this.router.navigate(["/serviceView"])
  }
  

}
