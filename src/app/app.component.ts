import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnim', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }),
          ],
          { optional: true }
        ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(-50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(50px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0px)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),

      transition(':decrement', [
        style({
          position: 'relative',
          overflow: 'hidden',
        }),

        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }),
          ],
          { optional: true }
        ),

        group([
          query(
            ':leave',
            [
              animate(
                '200ms ease-in',
                style({
                  opacity: 0,
                  transform: 'translateX(50px)',
                })
              ),
            ],
            { optional: true }
          ),

          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateX(-50px)',
              }),
              animate(
                '250ms 120ms ease-out',
                style({
                  opacity: 1,
                  transform: 'translateX(0px)',
                })
              ),
            ],
            { optional: true }
          ),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      return outlet.activatedRouteData['tab'];
    }
    return null;
  }
}
