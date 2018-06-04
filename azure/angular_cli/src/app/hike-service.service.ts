import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
    constructor(private http: Http) { }
    searchHikeName(name: String) {
      return this.http.get( '/app/info/hike/' + name)
       .pipe(map(response => response.json()));
    }
    searchAgencyName(name: String) {
      return this.http.get( '/app/info/agency/' + name)
      .pipe(map(response => response.json()));
    }
    //looking for agencies by hike id
    searchAgencyId(id: String) {
      return this.http.get( '/app/info/hike/' + id+ ' /agency/')
      .pipe(map(response => response.json()));
    }

}
