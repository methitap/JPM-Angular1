import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BillServiceService } from 'src/app/service/bill-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {

  public results: any;
  myForm:FormGroup;

  
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
  onDonebill(){

    this.router.navigate(["/billHistory"])
  }

}