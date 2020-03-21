import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  announceLink = "http://134.209.100.0:8080/announce/"
  uploadLink = "http://134.209.100.0:8080/file/upload"
  getImageLink = "http://134.209.100.0:8080/file/image/"

  constructor(
    private http: HttpClient,
    private route: Router, ) {
  }
  postAnnounce(data){
    console.log("****>>",data)

    return this.http.post(this.announceLink , data)

  }
  getAnnounce(){
    return this.http.get(this.announceLink)
  }
  deleteAnnouce(id) {
    console.log(this.announceLink + id)
  //  return this.http.request('delete', this.announceLink + id, { body: ""})
    return this.http.delete(this.announceLink + id)
  }
  getAnnounceByID(id){
    return this.http.get(this.announceLink+'/?annid='+id)
  }
  uploadImage(file) {
    return this.http.post(this.uploadLink, file)
  }
  getImage(fileName) {
    console.log(this.getImageLink + fileName)
    return this.http.get(this.getImageLink + fileName, {responseType: 'blob'})
  }
}
