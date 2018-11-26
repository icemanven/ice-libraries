import {Base64} from './base64';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {md5} from './md5';
// @dynamic
export abstract class StringUtils {
    private static sanitizer: DomSanitizer;
    static setSanitizerInstance (sanitizer: DomSanitizer) {
        if (!this.sanitizer && sanitizer) {
            this.sanitizer = sanitizer;
        }
    }
    static includes(str: string, find: string): boolean {
      return str.includes(find);
    }
    static startsWith(str: string, find: string): boolean {
      return str.startsWith(find);
    }
    static endsWith(str: string, find: string): boolean {
      return str.endsWith(find);
    }
    static isString(val: any): boolean {
        return (typeof val === 'string' || val instanceof String);
    }
    static removeAccents (text: string): string {
        return text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : '';
    }
    static StringToNumber (st: string): number {
        return parseInt(st, 10);
    }
    static Utf8Encode (st: string): string {
        // return this.b64._utf8_encode(st);
        // const sst = this.utf8.utf8decode(st);
        return st;
    }
    static Utf8Decode (st: string): string {
        // return this.b64._utf8_decode(st);
        // const sst = this.utf8.utf8decode(st);
        return st;
    }
    static base64Decode (bb: string): string {
        const b64 = new Base64();
        return b64.decode(bb);
    }
    static isEmpty(text: string): boolean {
        return (text === '');
    }
    static bypassSecurityTrustUrl(text: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(text);
    }
    static toMd5(text: string): string {
      return md5(text);
    }
}
