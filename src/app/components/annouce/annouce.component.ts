import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AnnonceServiceService} from 'src/app/service/annonce-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-annouce',
  templateUrl: './annouce.component.html',
  styleUrls: ['./annouce.component.css']
})
export class AnnouceComponent implements OnInit {
  myForm:FormGroup;
  file:any;


  data: any = {
    topic: '',
    detail: '',
    img: ''
  }
  constructor(
    private fb:FormBuilder,
    private AnnounceAPI: AnnonceServiceService,
    private router:Router,
  ) { 
    this.myForm = this.fb.group({
      topic:'',
      detail:'',
      img:''
    });


  }

  ngOnInit() {
    this.getNews()
  }

  getNews(){
    this.AnnounceAPI.getAnnounceByID(localStorage.getItem('viewServiceID')).subscribe(async data => {
      console.log(data[0].topic)
      console.log(data[0].detail)
      this.data.topic = data[0].topic
      this.data.detail = data[0].detail
    })
  }

  public async fileChangeEvent(fileInput: any){
    if (fileInput.target.files && fileInput.target.files[0]) {
      var file = fileInput.target.value.replace(/^.*[\\\/]/, '')
      this.data.img = file
      let formData = new FormData()
      await formData.append('file', fileInput.target.files[0])
      this.file = formData
      console.log(this.data.img)
      
  }
}

  onAddAnnounce(){
    
    console.log(">>>>>",this.myForm.value, ">>>>")
    this.data.topic = this.myForm.value.topic
    // console.log(JSON.parse(this.myForm.value))
    this.data.detail = this.myForm.value.detail
    console.log(this.data)
    this.AnnounceAPI.uploadImage(this.file).subscribe(async data => {
      console.log(data)
      // ตอนนี้คือต้องเอา id และ imgName ไปเก็บไว้ที่ db ใน announce_tbl แล้วเอามาเกทมาในหน้าหลักเพื่อที่จะดึงรูปภาพ

    })
    this.AnnounceAPI.postAnnounce(this.data).subscribe(data=>{
      console.log("result",data)
      this.router.navigate(["/news"]);
    })
  }
}
