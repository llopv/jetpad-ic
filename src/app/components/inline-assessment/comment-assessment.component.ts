import {Component, Input} from "@angular/core";

@Component({
    selector: 'comment-assessment',
    template: `
        <div class="panel" [hidden]="!hasVoted">
          <div class="panel-body">
            <h4>¿Porqué está {{tipo}}</h4>
            <span class="hideOverflow">{{texto}}</span>
            <textarea placeholder="máximo 250 caracteres ..." maxlength="250" style="width: 100%"></textarea>
            <button class="btn btn-success btn-block">Aceptar</button>
          </div>
        </div>
    `,
    styles: [`
        .hideOverflow{
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            max-width: 200px;
            display:block;
        }
    `]
})

export class CommentAssessment {
    @Input() tipo: string;
    @Input() hasVoted: boolean;
    @Input() texto: string;
}