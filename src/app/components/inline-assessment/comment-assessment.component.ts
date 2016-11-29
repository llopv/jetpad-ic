import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";

@Component({
    selector: 'comment-assessment',
    template: `
        <div class="panel" [hidden]="!hasCommented">
          <div class="panel-body">
            <i class="icon icon-close icon-middle"></i>
            <h4>¿Porqué está {{textoAprobacion}}</h4>
            <span class="hideOverflow">{{texto}}</span>
            <textarea placeholder="máximo 250 caracteres ..." maxlength="250" style="width: 100%" [(ngModel)]='comment'></textarea>
            <button class="btn btn-success btn-block" (click)="vote()">Aceptar</button>
          </div>
        </div>
    `,
    styles: [`
        .panel-body{
            width: 280px;
        }
        .panel-body .icon {
            position: absolute;
            top: 0px;
            right: 5px;
            font-size: 30px;
            z-index: 9;
            color: #CA3610;
            cursor: pointer;
        }
        .hideOverflow{
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            max-width: 240px;
            display:block;
        }
    `]
})

export class CommentAssessment implements OnChanges {
    @Input() tipo: boolean;
    @Input() hasCommented: boolean;
    @Input() texto: string;
    @Output() emittedVote = new EventEmitter<any>();

    textoAprobacion = '';
    comment = '';

    ngOnChanges(...args: any[]) {
        if (typeof args[0].tipo !== 'undefined') {
          if (args[0].tipo.currentValue == true) {
            this.textoAprobacion = 'de acuerdo?';
          } else {
            this.textoAprobacion = 'en desacuerdo?';
          }
        }
    }

    vote(){
        let emittedVote = {
            tipo: this.tipo,
            texto: this.texto,
            comentario: this.comment
        };
        this.emittedVote.emit(emittedVote);
    }
}
