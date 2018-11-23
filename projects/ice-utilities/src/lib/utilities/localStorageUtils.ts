import {ObjectUtils} from './objectUtils';
// @dynamic
export abstract class LocalStorageUtils {
    static setStorage(key: string, value: any): void {
        let val: any;
        if (ObjectUtils.isObject(value)) {
            val = JSON.stringify(value);
        } else {
            val = value;
        }
        localStorage.setItem(key, val);
    }
    static deleteStorage(key: string): void {
        localStorage.removeItem(key);
    }
    static getstorage(key: string): any {
        let val = localStorage.getItem(key);
        try {
            val = JSON.parse(val);
        } catch (e) {}
        return val;
    }
}
