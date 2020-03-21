import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BillServiceService } from 'src/app/service/bill-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-announce',
  templateUrl: './bill-announce.component.html',
  styleUrls: ['./bill-announce.component.css']
})



export class BillAnnounceComponent implements OnInit {

  public results: any;
  myForm:FormGroup;


  // data: any = {

  //   house: '',
  //   firstName: '',
  //   lastName: '',
  
  //   date: ''


  // }
  
  constructor(private fb:FormBuilder,
    private ServiceAPI: BillServiceService, 
    private router: Router) 
    {

      this.myForm = this.fb.group({
        
        house: '',
        bName: '',
        
        date: ''
      });

  }

  
  ngOnInit() {
    this.getBillService()
  }

  getBillService() {
    this.ServiceAPI.getBillService().subscribe(data => {
      this.results = data;

    })
  }

}

