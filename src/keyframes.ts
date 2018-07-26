import { keyframes, style, animate } from '@angular/animations'

export const fadeInUp = [
    style({ opacity : 0, transform: translate3d(0, '100%', 0)}),
    style({ opacity: 1, transform: traslate3d(0, 0 ,0)})
]

export const fadeOutDown = [
    style({opacity: 1}),
    style({opacity: 0, transform: translate3d(0, '100%', 0)})
]
