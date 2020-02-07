import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('on Init')
    this.route.data.subscribe((data: {market: any}) => {
      console.log(data);
    })
  }

}
