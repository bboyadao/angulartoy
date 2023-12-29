import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbIconModule, NbRouteTabsetModule, NbTableModule, NbTabsetModule} from "@nebular/theme";
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
    NbTableModule,
    NbTabsetModule,
  ],
  exports: [TabrouteComponent]
})
export class TabrouteModule { }
