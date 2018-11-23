import {animate, state, style, transition, trigger, keyframes, query, stagger, AnimationTriggerMetadata} from '@angular/animations';

export function routerTransition(): AnimationTriggerMetadata {
    return slideToLeft(); // slideToTop
}

export function LoginRouterTransition(): AnimationTriggerMetadata {
    return slideToTop(); // slideToTop
}

export function sidebarAnim(name): void {
    trigger('slideInOut', [
    state('in', style({
      transform: 'translate3d(20%, 0, 0)'
    })),
    state('out', style({
      transform: 'translate3d(100%, 0, 0)'
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]);
}

export function slideToRight(): AnimationTriggerMetadata {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ])
    ]);
}

export function slideToLeft(): AnimationTriggerMetadata {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}

export function slideToBottom(): AnimationTriggerMetadata {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
        ])
    ]);
}

export function slideToTop(): AnimationTriggerMetadata {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}

export function  slideInOutAnimationSideBar (): AnimationTriggerMetadata {
  return trigger('slideInOutAnimationSideBar', [

    // end state styles for route container (host)
    state('in', style({
      // the view covers the whole screen with a semi tranparent background
      left: 60,
      width: 60,
      marginLeft: -60,
    })),
    state('out', style({
      // the view covers the whole screen with a semi tranparent background
      left: 235,
      width: 235,
      marginLeft: -235,
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]);
}

export const slideInOutAnimationContent =
  trigger('slideInOutAnimationContent', [

    // end state styles for route container (host)
    state('in', style({
      // the view covers the whole screen with a semi tranparent background
      left: 60,
      width: 60,
      marginLeft: -60,
    })),
    state('out', style({
      // the view covers the whole screen with a semi tranparent background
      left: 235,
      width: 235,
      marginLeft: -235,
    })),
    transition('in => out', animate('400ms ease-in-out')),
    transition('out => in', animate('400ms ease-in-out'))
  ]);

export function fideInFadeOut(): AnimationTriggerMetadata {
  return trigger('simpleFadeAnimation', [

    // the "in" style determines the "resting" state of the element when it is visible.
    state('in', style({opacity: 1})),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [
      style({opacity: 0}),
      animate(600 )
    ]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave',
      animate(600, style({opacity: 0})))
  ]);
}


