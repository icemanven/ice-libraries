import {Injector} from '@angular/core';

export function InjectorUtils(provider: any): any {
  const injector = Injector.create({providers: [{provide: provider, deps: []}]});
  return injector.get(provider);
}
