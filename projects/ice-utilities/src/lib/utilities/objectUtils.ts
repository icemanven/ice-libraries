// @dynamic
export abstract class ObjectUtils {
  static isObject(obj: any): boolean {
    return (typeof obj === 'object');
  }
  static isEmpty (obj: any): boolean {
    return (this.isObject(obj) && (JSON.stringify(obj) === JSON.stringify({})));
  }
  static isEmptyCircular (obj: any): boolean {
    let isEmpty = true;
    Object.keys(obj).forEach(key => {
      isEmpty = false;
    });
    return isEmpty;
  }
  static copyNestedObject (myObject: object): any {
    return  {...myObject}; // JSON.parse(JSON.stringify(myObject));
  }
  static copyObject (myObject: object): {} & object {
    return  this.copyNestedObject(myObject);
  }
  static objectToNum (obj: any): any {
    const newObj: any = {};
    Object.keys(obj).forEach(prop => {
      newObj[prop] = +obj[prop];
    });
  }
  static merge(obj1 = {}, obj2 = {}): object {
    return {...obj1, ...obj2};
  }
}
