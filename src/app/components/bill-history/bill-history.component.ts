import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillServiceService } from 'src/app/service/bill-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill-history',
  templateUrl: './bill-history.component.html',
  styleUrls: ['./bill-history.component.css']
})
export class BillHistoryComponent implements OnInit {


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
    this.ServiceAPI.getBillService().subscribe( data => {
      this.results =  data;

    })
  }
  onViewBill(){
  
    this.router.navigate(["/billView"])
  }

}