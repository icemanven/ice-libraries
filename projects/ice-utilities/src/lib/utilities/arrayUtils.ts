import {GlobalUtils} from './globalUtils';
// @dynamic
export abstract class ArrayUtils {
  static inArray(array: any[], find: any): boolean {
    return array.includes(find);
  }
  static notInArray(array: any[], find: any): boolean {
    return (!this.inArray(array, find));
  }
  static objectInArray (arr: any[], obj: any): boolean {
    return (arr.find(oo => GlobalUtils.areEquals(oo, obj)));
  }
  static objectNotInArray (arr: any[], obj: any): boolean {
    return !this.objectInArray(arr, obj);
  }
  static objectPropInArray (arr: any[], prop: string, value: any): boolean {
    return (arr.find(oo => GlobalUtils.areEquals(oo[prop], value)));
  }
  static objectNotPropInArray (arr: any[], prop: string, value: any): boolean {
    return (!this.objectPropInArray(arr, prop, value));
  }
  static cloneArray (arr: any[]): any[] {
    return [...arr];
  }
  static removeFromArray (arr: any[], ind: number): any[] {
    arr.splice(ind, 1);
    return arr;
  }
  static arrayMerge (arr1: any[], arr2: any[]): any[] {
    return [...arr1, ...arr2];
  }
}
