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

        // transition('* <=> *', [
        //     query(':enter, :leave', [
        //         style({
        //             position: 'relative',
        //             left: 0,
        //             width: '100%',
        //             opacity: 0,
        //             transform: 'scale(0) translateY(100%)',

        //         })
        //     ]),
        //     query(':enter', [
        //         animate('600ms ease',
        //             style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        //         )

        //     ])
        // ]),

    ]);

function slideTo(direction) {
    const optional = { optional: true }
    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ], optional),
        ])
    ];
}