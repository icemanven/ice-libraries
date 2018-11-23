import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

export interface IceUtilitiesData {
  responsiveWidth?: number;
  timeshow?: number;
  router: Router;
  dynamicDir?: string;
  staticDir?: string;
  notAllowed?: string;
  listDir?: string;
  sanitizer?: DomSanitizer;
  translateService?: TranslateService;
}
