import {SessionUtils} from './sessionUtils';
import {StringUtils} from './stringUtils';
import {ObjectUtils} from './objectUtils';
import {TranslateUtils} from './translateUtils';
import notify from 'devextreme/ui/notify';
import {WidthHeightMed} from '../interfaces/WidthHeightMed';
// @dynamic
export abstract class GlobalUtils {
  private static responsiveWidth = 960;
  private static timeshow = 8000;
  static setResponsiveWidth(responsiveWidth: number): void {
    if (!this.responsiveWidth && responsiveWidth) {
      this.responsiveWidth = responsiveWidth;
    }
  }
  static setTimeShow(timeshow: number) {
    if (!this.timeshow && timeshow) {
      this.timeshow = timeshow;
    }
  }
  static areEquals(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  static isEmptyData(data: any): boolean {
    return (this.areEquals(data, '') || this.areEquals(data, 0) || data  === null || this.areEquals(data, {}) || this.areEquals(data, []));
  }
  static isUndefined(data: any): boolean {
    return typeof data === 'undefined';
  }
  static setSysname (name: string): void {
    SessionUtils.setSession('sysname', name);
  }
  static getSysname (): string {
    return SessionUtils.getSession('sysname');
  }
  static autoFixSidebarState (width: number, actstt: string): string {
    if (width <= this.responsiveWidth) {
      return 'inres';
    } else {
      if (actstt === 'inres') {
        return 'out';
      } else {
        return actstt;
      }
    }
  }
  static fixsidebarState (stt: string, width: number, actstt: string, responsiveWidth: number): string {
    if (width <= responsiveWidth) {
      if (actstt === 'inres') {
        return 'in';
      } else {
        return 'inres';
      }
    } else {
      return stt;
    }
  }
  static fixContainerState (stt: string, width: number, responsiveWidth: number): string {
    if (width <= responsiveWidth) {
      return 'inres';
    } else {
      return stt;
    }
  }
  static successNotify(men: string, data: any) {
    notify(TranslateUtils.Translate(men) + ' '
      + JSON.stringify(data), 'success', this.timeshow);
  }
  static cathNotify (error, men: string, type = 'warning'): void {
      const tmen = TranslateUtils.Translate(men);
      this.notifyError(tmen, error, type);
  }
  private static notifyError (tmen: string, error: string, type: string) {
      notify(`${tmen} :${this.errorCath(error)}`, type, this.timeshow);
      if (type === 'error') {
          throw new Error(tmen);
      }
  }
  static cathNotifyExtraMen (error, men: string, extraMen: string, type = 'warning'): void {
    const tmen = `${TranslateUtils.Translate(men)} ${extraMen}`;
    this.notifyError(tmen, error, type);
  }
  static errorCath (error: any): string {
    let errorMen = '';
    if (StringUtils.isString(error)) {
      errorMen = error;
    } else  if (ObjectUtils.isObject(error)) {
      if (error.error) {
        if (StringUtils.isString(error.error)) {
          errorMen = error.error;
        } else if (ObjectUtils.isObject(error.error) && error.error.ResponseStatus) {
          if (error.error.ResponseStatus.Message) {
            errorMen = error.error.ResponseStatus.Message;
          } else if (error.error.ResponseStatus.ErrorCode) {
            errorMen = error.error.ResponseStatus.ErrorCode;
          }
        } else if (StringUtils.isString(error.message)) {
          errorMen = error.message;
        }
      } else {
        if (error.message) {
          errorMen = error.message;
        } else if (error.statusText) {
          errorMen = error.statusText;
        }
      }
    }
    return TranslateUtils.Translate(errorMen);
  }
  static getNativeWindow (): Window {
    return window;
  }
  static openWindow(url: string, config?: any): Window | null {
    return window.open(url, '', 'location=no,width=1800,height=900,scrollbars=yes,top=100,left=700,resizable = no');
  }
  static setWithHeight (whm?: WidthHeightMed): any {
    if (whm && whm.fullScreen) {
        return {
            fullscreen: 1,
        };
    }
    let mm = 1.5;
    if (whm && whm.Media) {
      mm = whm.Media;
    }
    const val = {
      width: window.innerWidth / mm,
      height: window.innerHeight / mm
    };
    if (whm && whm.hasOwnProperty('width')) {
      val.width = whm.width;
    }
    if (whm && whm.hasOwnProperty('height')) {
      val.height = whm.height;
    }
    return val;
  }
}
