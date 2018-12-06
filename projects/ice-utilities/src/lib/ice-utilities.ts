import {ArrayUtils} from './utilities/arrayUtils';
import {FechasUtils} from './utilities/fechasUtils';
import {GlobalUtils} from './utilities/globalUtils';
import {LocalStorageUtils} from './utilities/localStorageUtils';
import {LoginUtils} from './utilities/loginUtils';
import {ObjectUtils} from './utilities/objectUtils';
import {RouterUtils} from './utilities/routerUtils';
import {SessionUtils} from './utilities/sessionUtils';
import {StringUtils} from './utilities/stringUtils';
import {TranslateUtils} from './utilities/translateUtils';
import {IceUtilitiesData} from './interfaces/IceUtilitiesData';
import {BreadCrumbUtils} from './utilities/breadCrumbUtils';
import {DomElementUtils} from './utilities/domElementUtils';
import {EncryptUtils} from './utilities/encryptUtils';

export abstract class IceUtilities {
  static arrays       = ArrayUtils;
  static breadCrumbs  = BreadCrumbUtils;
  static domElements  = DomElementUtils;
  static dates        = FechasUtils;
  static globals      = GlobalUtils;
  static localStorage = LocalStorageUtils;
  static login        = LoginUtils;
  static objects      = ObjectUtils;
  static router       = RouterUtils;
  static session      = SessionUtils;
  static strings      = StringUtils;
  static translate    = TranslateUtils;
  static encryption   = EncryptUtils;
  static iniIceUtilities(data: IceUtilitiesData) {
    this.globals.setResponsiveWidth(data.responsiveWidth);
    this.globals.setTimeShow(data.timeshow);
    this.router.setRouterInstance(data.router);
    this.router.setDynamicDir(data.dynamicDir);
    this.router.setStaticDir(data.staticDir);
    this.router.setNotAllowedDir(data.notAllowed);
    this.router.setListDir(data.listDir);
    this.strings.setSanitizerInstance(data.sanitizer);
    this.translate.setTranlateInstance(data.translateService);
    this.encryption.setKey(data.encryptionKey);
  }
}
