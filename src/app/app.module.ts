import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbButtonModule, NbCardModule,
  NbLayoutModule, NbRouteTabsetModule,
  NbSidebarModule, NbSidebarService,
  NbTableModule,
  NbTabsetModule,
  NbThemeModule
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {TabrouteModule} from "./shared/modules/tabroute/tabroute.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbTabsetModule,
    NbTableModule,
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    TabrouteModule,
    NbCardModule,
    NbRouteTabsetModule,
  ],
  providers: [
    NbThemeModule.forRoot().providers as Provider[],
    NbSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
