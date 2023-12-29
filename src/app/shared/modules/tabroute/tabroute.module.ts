import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbIconModule, NbRouteTabsetModule} from "@nebular/theme";
import {NbMergeConfigsPipe, TabrouteComponent} from "./tabroute.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    TabrouteComponent,
    NbMergeConfigsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbRouteTabsetModule,
    NbIconModule,

  ],
  exports: [TabrouteComponent]
})
export class TabrouteModule { }
