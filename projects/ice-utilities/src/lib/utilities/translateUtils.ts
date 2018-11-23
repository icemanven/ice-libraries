import {TranslateService} from '@ngx-translate/core';
// @dynamic
export abstract class TranslateUtils {
  private static translateService: TranslateService;
  static setTranlateInstance (translateService: TranslateService) {
    if (!this.translateService && translateService) {
      this.translateService = translateService;
    }
  }
  static Translate(text: string): string {
    if (this.translateService) {
      let translation = '';
      this.translateService.get(text).subscribe(
        trans => {
          translation = trans;
        });
      return translation;
    } else {
      return text;
    }
  }
}
