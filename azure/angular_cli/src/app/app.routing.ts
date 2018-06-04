import {Routes, RouterModule} from '@angular/router';
import {HikerInfoComponent} from './hiker-info/hiker-info.component';
import {HikeComponent} from './hike/hike.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'hiker-info/:name', component: HikerInfoComponent},
    {path: 'hike/:name', component: HikeComponent}

];

export const routing = RouterModule.forRoot(routes);