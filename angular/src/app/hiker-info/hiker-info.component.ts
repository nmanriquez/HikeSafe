
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HikeService } from '../hike-service.service';


@Component({
  selector: 'app-hiker-info',
  templateUrl: './hiker-info.component.html',
  styleUrls: ['./hiker-info.component.css']
})
export class HikerInfoComponent implements OnInit {
  name: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hike$: HikeService
  ) {
    // probably this wouldn't be necessary
    const param = route.snapshot.params['name'];
    this.name = param;
  }

  ngOnInit() {
  }

}
