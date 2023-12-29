import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {NbRouteTab, NbRouteTabsetComponent} from "@nebular/theme";
import {RouterLinkActive} from "@angular/router";
import {Pipe, PipeTransform} from '@angular/core';


export type NbNullableInput = string | null | undefined;
export type NbBooleanInput = boolean | NbNullableInput;

export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return val === 'true' || val === '';
  }

  return !!val;
}

export function getElementHeight(el:any) {
  /**
   *
   * TODO: Move helpers in separate common module.
   * TODO: Provide window through di token.
   * */
  const style = window.getComputedStyle(el);
  const marginTop = parseInt(style.getPropertyValue('margin-top'), 10);
  const marginBottom = parseInt(style.getPropertyValue('margin-bottom'), 10);
}

@Pipe({
  name: 'nbMergeConfigs',
})
export class NbMergeConfigsPipe implements PipeTransform {
  transform<Config>(...configs: Config[]): Config {
    return Object.assign({}, ...configs);
  }
}

@Component({
  selector: 'custom-route-tabset',
  templateUrl: './tabroute.component.html',
  styleUrls: ['./tabroute.component.scss']
})
export class TabrouteComponent {
  @HostBinding('class.full-width')  fullWidthValue: boolean = false;

  /**
   * Tabs configuration
   */
  @Input()  tabs: NbRouteTab[] = [];

  /**
   * Options passed to `routerLinkActiveOptions` directive which set on tab links.
   * `{ exact: true }` by default.
   */
  @Input()  activeLinkOptions: RouterLinkActive['routerLinkActiveOptions'] = { exact: true };

  /**
   * Take full width of a parent
   * @param {boolean} val
   */
  @Input()
   set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }
  static  ngAcceptInputType_fullWidth: NbBooleanInput;

  /**
   * Emits when tab is selected
   * @type {EventEmitter<NbRouteTab>}
   */
  @Output()  changeTab: EventEmitter<NbRouteTab> = new EventEmitter<NbRouteTab>();

   selectTab(tab: NbRouteTab) {
    this.changeTab.emit(tab);
  }
}
