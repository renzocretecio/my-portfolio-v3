import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => first-page', slideTo('left')),
        transition('* => third-page', slideTo('right')),
        transition('first-page => *', slideTo('right')),
        transition('third-page => *', slideTo('left')),
        // transition('second-page => third-page', slideTo('right')),
        // transition('third-page => second-page', slideTo('left')),


    ]);

function slideTo(direction) {
    const optional = { optional: true }
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%',

            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms 5ms', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('600ms 5ms', style({ [direction]: '0%' }))
            ], optional),
        ])
    ];
}