import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AnnonceServiceService} from 'src/app/service/annonce-service.service';
import { Router } from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-annnouce-page',
  templateUrl: './annnouce-page.component.html',
  styleUrls: ['./annnouce-page.component.css']
})
export class AnnnoucePageComponent implements OnInit {
  [x: string]: any;
  public results: any;
  private http: HttpClient;
  private imgName: any;
  base64data: any;
  imgUrl: any;

  data: any = {
    by: '',
    serTopic: '',
    file: '',
    img: ''
  }

  
  constructor(private AnnounceAPI: AnnonceServiceService, private router: Router, private sanitizer: DomSanitizer) { 
  }

  async ngOnInit() {
    this.getNews()
  }

    async getNews() {
    await this.AnnounceAPI.getAnnounce().subscribe(async data => {
      this.results = await data;
      console.log(this.results,'<<<<results')
        // console.log(this.results[i])

      console.log( 
        this.results.sort((a, b) => {
          <any>new Date(b.date) -  <any>new Date(a.date) ;
        })
      )

      this.results = this.results.sort((a, b) => {
       <any>new Date(b.date- <any>new Date(a.date)) ;
      })


      for (let i = this.results.length; i > 0; i--) {
        console.log(i)
        console.log(this.results[i-1], this.results[i-1].img)
        this.AnnounceAPI.getImage(this.results[i-1].img).subscribe(async res => {
          console.log(res)
          let url = URL.createObjectURL(res)
          console.log(url)
          this.results[this.results.length - i].img = this.sanitizer.bypassSecurityTrustResourceUrl(url)
          console.log(this.results)
        })
      }
      
      this.data = this.results
      console.log(this.data)
      return this.results.sort((a, b) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });

    })
    // this.getImage(this.data[0].img)
  }

  deleteAnnounce(news){
    console.log(news._id)
   this.AnnounceAPI.deleteAnnouce(news._id).subscribe(async data => {
     console.log("data = " + data)
     this.getNews()
   }, err => {
     console.log(err)
   })
  }

  editAnnounce(news) {
    console.log(news)
    localStorage.setItem('viewServiceID', news._id)
    this.router.navigate(["/annouce"]);


  }


}
