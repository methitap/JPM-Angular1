import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
}
)
export class AppmenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  onClickAnnouce() {
      // this.router.navigate(["/annouce"]);

    
  }

}

