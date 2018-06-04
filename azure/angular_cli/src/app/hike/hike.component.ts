import { Component, OnInit } from '@angular/core';
import { HikeService} from '../hike-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import IHikeModelAngular from '../share/IHikeModelAngular';
import IAgnecyModelAngular from '../share/IAgencyModelAngular';
import { TemplateParseResult } from '@angular/compiler';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})


export class HikeComponent implements OnInit {
  hike: IHikeModelAngular;
  agency: IAgnecyModelAngular;

  ngOnInit() {
  }

  // In this constructor we need to search our agencies and return any agencies that have a matching agencyId to any number in agencyNum.
  constructor(
    private route: ActivatedRoute,
    hike$: HikeService) {
    const param = route.snapshot.params['name'];
    let agencyNum: any;
    let hikeId;
    hike$.searchHikeName(param)
      .subscribe(
        result => {
          this.hike = result,
          agencyNum = this.hike.name,
          hikeId = this.hike.hikeId;
        },
         () => {},
         () => hike$.searchAgencyId(hikeId).subscribe(
           result => this.agency = result,
          () => {},
          () => console.log('REST call:' + this.agency)
         )
       );
  }

}
