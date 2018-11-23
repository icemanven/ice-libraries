// @dynamic
export abstract class DomElementUtils {
  static getContainerElement(element: string) {
    return new Promise(function (resolve, reject) {
      DomElementUtils.waitForContainerElement(element, resolve);
    });
  }
  static getContainerClassElement(className: string) {
    return new Promise(function (resolve, reject) {
      DomElementUtils.waitForContainerClassElement(className, resolve);
    });
  }
  private static waitForContainerElement(id, resolve) {
    const $configElement = document.getElementById(id);
    if (!$configElement || $configElement === null) {
      setTimeout(DomElementUtils.waitForContainerElement.bind(this, id, resolve), 30);
    } else {
      resolve($configElement);
    }
  }
  private static waitForContainerClassElement(className, resolve) {
    const $configElement = document.getElementsByClassName(className);
    if (!$configElement || $configElement === null) {
      setTimeout(DomElementUtils.waitForContainerClassElement.bind(this, className, resolve), 30);
    } else {
      resolve($configElement);
    }
  }
}
