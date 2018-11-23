import {SessionUtils} from './sessionUtils';
import {GlobalUtils} from './globalUtils';
// @dynamic
export abstract class BreadCrumbUtils {
  static getBreadCrumb (): string {
    return SessionUtils.getSession('breadcrumb');
  }
  static setBreadCrumb(value: string, isDinamic?: boolean): void {
    if (!isDinamic) {
      value = GlobalUtils.getSysname() + value;
    }
    SessionUtils.setSession('breadcrumb', value);
  }
  static getPrinModFromBreadCrumb (value: string): string {
    const search = value.split(/\//);
    return search[1];
  }
}
