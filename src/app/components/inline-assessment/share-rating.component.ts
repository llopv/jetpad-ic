import {Component, Input} from '@angular/core'

@Component({
    selector: 'share-rating',
    template:`
        <div class="panel">
          <div class="panel-body" style="padding-top: 0;">
            <h3>¡Compártelo!</h3>
            <p>{{texto}}</p>
            <button class="btn" (click)="vote()"><img src="assets/img/fb.png" style="height: 30px;"></button>
            <button class="btn" (click)="vote()"><img src="assets/img/tw.jpeg" style="height: 30px;"></button>
          </div>
        </div>
    `
})

export class ShareRating {
    @Input() texto: string;
}