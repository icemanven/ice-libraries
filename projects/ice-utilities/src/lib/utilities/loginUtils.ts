import {SessionUtils} from './sessionUtils';
import {TranslateUtils} from './translateUtils';
import notify from 'devextreme/ui/notify';
// @dynamic
export abstract class LoginUtils {
  static isLoggedin(): boolean {
    return (SessionUtils.getSession('isLoggedin'));
  }
  static setLoggedin(): void {
    SessionUtils.setSession('isLoggedin', 'true');
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
