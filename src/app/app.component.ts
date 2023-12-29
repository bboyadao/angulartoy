import { Component } from '@angular/core';
import {NbRouteTab} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toy';
  tabs: NbRouteTab[] = [
    {
      title: 'Route tab #1',
      route: '/pages/description',
      responsive: true, // hide title before `$tabset-tab-text-hide-breakpoint` value
    },
    {
      title: 'Route tab #2',
      route: '/pages/images',
    }
  ];

}
