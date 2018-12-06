import {SessionUtils} from './sessionUtils';
import {TranslateUtils} from './translateUtils';
import notify from 'devextreme/ui/notify';
import {EncryptUtils} from './encryptUtils';
import {ObjectUtils} from './objectUtils';
import {GlobalUtils} from './globalUtils';
// @dynamic
export abstract class LoginUtils {
  private static LoginKey() {
    if (EncryptUtils.hasEncryption()) {
      return btoa(EncryptUtils.encrypt(this.getCurrentUser()));
    } else {
      return btoa(JSON.stringify(this.getCurrentUser()));
    }
  }
  static isLoggedin(): boolean {
    let key: string;
    if (EncryptUtils.hasEncryption()) {
      key = EncryptUtils.decrypt(atob(SessionUtils.getSession('isLoggedin')));
      return GlobalUtils.areEquals(key, this.getCurrentUser());
    } else {
      const log = SessionUtils.getSession('isLoggedin');
      if (log === null) {
        return false;
      }
      key = atob(log);
      return GlobalUtils.areEquals(JSON.parse(key), this.getCurrentUser());
    }
  }
  static setLoggedin(): void {
    SessionUtils.setSession('isLoggedin', this.LoginKey());
  }
  static logOff(): void {
    sessionStorage.clear();
  }
  static logFail (err) {
      this.logOff();
      const men = TranslateUtils.Translate(err.statusText);
      notify(men, 'error', 5000);
  }
  static setCurrentUser(value: any): void {
    SessionUtils.setSession('currentUser', value);
  }
  static getCurrentUser(): any {
    return SessionUtils.getSession('currentUser');
  }
  static setEmpresasUser (empresas: any[]): void {
      SessionUtils.setSession('empresasUser', empresas);
  }
  static getEmpresasUser (): any[] {
    return SessionUtils.getSession('empresasUser');
  }
  static getEmresaIdProd (): any {
    const {IDEmpresaProd} = this.getCurrentUser();
    return IDEmpresaProd;
  }
  static setEmpresaCode (id: number, nombre?: string): void {
    const crr = this.getCurrentUser();
    crr.CompanyCode = id;
    if (nombre) {
      crr.CompanyName = nombre;
    }
    this.setCurrentUser(crr);
  }
  static getEmpresaCode (): any {
    const {CompanyCode} = this.getCurrentUser();
    return CompanyCode;
  }
}
