import {PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree} from '@angular/router';
import {TranslateUtils} from './translateUtils';
import {SessionUtils} from './sessionUtils';
import {ArrayUtils} from './arrayUtils';
import {StringUtils} from './stringUtils';
// @dynamic
export abstract class RouterUtils {
  private static router: Router;
  private static dynamicDir = '';
  private static staticDir = '';
  private static dynamicDirR = '';
  private static staticDirR = '';
  private static notAllowed = '/';
  private static listDir = 'list';
  static setRouterInstance (router?: Router) {
    if (!this.router && router) {
      this.router = router;
    }
  }
  static setStaticDir (dir: string) {
    if (!this.staticDir && dir) {
      this.staticDir = `/${dir}/`;
      this.staticDirR = `/${dir}R/`;
    }
  }
  static setDynamicDir (dir: string) {
    if (!this.dynamicDir && dir) {
      this.dynamicDir = `/${dir}/`;
      this.dynamicDirR = `/${dir}R/`;
    }
  }
  static setNotAllowedDir (dir: string) {
    if (!this.notAllowed && dir) {
      this.notAllowed = dir;
    }
  }
  static setListDir (dir: string) {
    if (!this.listDir && dir) {
      this.listDir = dir;
    }
  }
  static getRerouteUrl (modulo: string, tipo: string, end?: any): string {
    if (this.router) {
      let url: string;
      const mod = modulo.toUpperCase();
      const tt = tipo.toUpperCase();
      const urlroute: string = this.router.url;
      if (StringUtils.includes(urlroute, `/${mod}/`)) {
        url = `/${mod}R/${tt}/`;
      } else if (StringUtils.includes(urlroute, `/${mod}R/`)) {
        url = `/${mod}/${tt}/`;
      }
      if (end) {
        url += end.toString();
      }
      return url;
    } else {
      return '/';
    }
  }
  static setDinamicDirUrl(mod: string, id: number): string {
    return `${this.dynamicDir}${mod.toUpperCase()}/${id.toString()}`;
  }
  static setCustomDirUrl(sys: string, mod: string): string {
    return `${this.staticDir}${sys}/${mod}`;
  }
  static evalPerm (extra?: any): void {
    if (this.router) {
      let url: string = this.router.url;
      const sinDrouter = url.split('(');
      url = sinDrouter[0];
      if (StringUtils.includes(url, ';')) {
        const surl = url.split(';');
        url = surl[0];
      }
      if (extra) {
        url = url.replace(extra, '');
      }
      if (StringUtils.includes(url, this.dynamicDirR)) {
        url = url.replace(this.dynamicDirR, this.dynamicDir);
      } else if (StringUtils.includes(url, this.staticDirR)) {
        url = url.replace(this.staticDirR, this.staticDir);
      }
      if (
        (
          StringUtils.includes(url, this.dynamicDir)
          || StringUtils.includes(url, this.staticDirR)
          || StringUtils.includes(url, this.staticDir)
          || StringUtils.includes(url, this.staticDirR)
        )
        &&
        this.urlNotAllowed(url)
      ) {
        this.router.navigate([this.notAllowed]);
      }
    } else {
      this.router.navigate([this.notAllowed]);
    }
  }
  static getSegmentsRoute(route: string, params: any = {}, lista = false): (any | any)[] {
      const tree: UrlTree = this.router.parseUrl(route);
      const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
      const s: UrlSegment[] = g.segments;
      const final: any[] = s.map(p => {
          return p.path;
      });
      if (lista) {
          return [...final, ...[this.listDir], ...[params]];
      } else {
          return [...final, ...[params]];
      }
  }
  static getSegmentsRouteId(route: string, id: number, params: any = {}, lista = false): (any | any)[] {
    const tree: UrlTree = this.router.parseUrl(route);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    const final: any[] = s.map(p => {
      return p.path;
    });
    if (lista) {
      return [...final, ...[id.toString()], ...['Lista'], ...[params]];
    } else {
      return [...final, ...[id.toString()], ...[params]];
    }
  }
  static setNotAllowMen (men: string): void {
    SessionUtils.setSession('notallowedmen', men);
  }
  static getNotAllowMen (menset: string): string {
    let men: any = SessionUtils.getSession('notallowedmen');
    if (men !== null) {
      SessionUtils.deleteSession('notallowedmen');
    } else {
      men = menset;
    }
    return TranslateUtils.Translate(men);
  }
  static setAllowedUrl (url: any): void {
    SessionUtils.setSession('allowedurl', url);
  }
  static urlNotAllowed (url: string): boolean {
    const urlsAllowed = SessionUtils.getSession('allowedurl');
    let notA = true;
    if (urlsAllowed !== null) {
      notA = ArrayUtils.notInArray(urlsAllowed, url);
    }
    return notA;
  }
}
