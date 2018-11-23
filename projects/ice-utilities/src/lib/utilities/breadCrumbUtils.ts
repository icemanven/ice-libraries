import {SessionUtils} from './sessionUtils';
import {GlobalUtils} from './globalUtils';
// @dynamic
export abstract class BreadCumpUtils {
  static getBreadCump (): string {
    return SessionUtils.getSession('breadcump');
  }
  static setBreadCump(value: string, isDinamic?: boolean): void {
    if (!isDinamic) {
      value = GlobalUtils.getSysname() + value;
    }
    SessionUtils.setSession('breadcump', value);
  }
  static getPrinModFromBreadCump (value: string): string {
    const search = value.split(/\//);
    return search[1];
  }
}
