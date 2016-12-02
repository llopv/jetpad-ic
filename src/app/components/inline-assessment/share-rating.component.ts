import {Component, Input} from '@angular/core'

@Component({
    selector: 'share-rating',
    template:`
        <div class="panel">
          <div class="panel-body" style="padding-top: 0;">
            <h4 style="margin-top:1em; border-bottom-style:solid; border-bottom-width:1px; padding-bottom:0.5em">Compartir</h4>
            <p class="text-center">{{text}}</p>
            <share-buttons
            [url]="escapedLink"
            [title]="text"
            [description]="text"
            [pinterest]="false"
            [linkedIn]="false"
            [tumblr]="false"
            [google]="false"
            [stumbleUpOn]="false"></share-buttons>
            <input value="{{link}}">
          </div>
        </div>
    `,
    styles: [`
      .panel{
          width: 280px;
      }
      input{
          width: 100%;
      }
    `]
})

export class ShareRating {
    @Input() text: string;
    @Input() link: string;
    get escapedLink() {
      return this.link.replace('#', '%23');
    }
}
