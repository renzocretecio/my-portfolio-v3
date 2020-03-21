import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

// export const fader = trigger('routeAnimation', [
//     transition('* <=> *', [
//         query(':enter, :leave', [
//             style({
//                 position: 'absolute',
//                 left: 0,
//                 width: '100%',
//                 opacity: 0,
//                 transform: 'scale(0) translateY(100%)',
//             })
//         ]),
//         query(':enter', [
//             animate('600ms ease',
//                 style({ opacity: 1, transform: 'scale(1) translateY(0)' })
//             )

//         ])
//     ]),
// ])
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'relative',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)',

                })
            ]),
            query(':enter', [
                animate('600ms ease',
                    style({ opacity: 1, transform: 'scale(1) translateY(0)' })
                )

            ])
        ]),
        transition('Projects => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('first-page => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('second-page => third-page', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('second-page => first-page', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Projects => Home', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
    ]);