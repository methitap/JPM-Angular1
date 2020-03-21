import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceListService {
  serviceLink = "http://134.209.100.0:8080/service/"
  initLineLiff: any;
  getImageLink = "http://134.209.100.0:8080/file/image/"
  constructor(private http: HttpClient,
    private route: Router, ) {
    }
    postServiceList(data){
      console.log("****>>",data)
  
      return this.http.post(this.serviceLink , data)
  
    }
    getServiceList(){
      return this.http.get(this.serviceLink)
    }

    getServiceByID(id){
      return this.http.get(this.serviceLink+'/?serid='+id)
    }
    putServiceByID(id, data, status) {
      console.log("Before: " + status)
      return this.http.put(this.serviceLink + id, {
        serTopic: data.serTopic,
        serDetail: data.serDetail,
        tool: data.tool,
        by: data.by,
        status: status
      })
    }
    getImage(fileName) {
      console.log(this.getImageLink + fileName)
      return this.http.get(this.getImageLink + fileName, {responseType: 'blob'})
    }
}