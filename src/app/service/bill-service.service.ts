import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {
  billLink = "http://134.209.100.0:8080/bill/"
  constructor(private http: HttpClient,
    private route: Router, ) {

  }
  postBillService(data) {
    console.log("****>>", data)

    return this.http.post(this.billLink, data)

  }
  getBillService() {
    return this.http.get(this.billLink)
  }
  getBillServiceByID(id){
    return this.http.get(this.billLink+'/?billid='+id)
  }
  putServiceByID(id, data, status) {
    console.log("Before: " + status)
    return this.http.put(this.billLink + id, {
      house: data.house,
      bName: data.bName,
      bill: data.bill
    })
  }
}
