import { Component, OnInit } from '@angular/core';
import { HikeService } from '../hike-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hike$: HikeService;
  hname: String;

  constructor(hike$: HikeService) {
    this.hike$ = hike$;
  }

  verifyName() {
  }

  ngOnInit(): void {
  }

}
