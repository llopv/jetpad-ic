import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'moderator-tool',
  template: `
    <div class="panel">
      <div class="panel-body panel-moderador">
        <h4 style="border-bottom-style:solid; border-bottom-width:1px; padding-bottom:0.5em">Participación</h4>
        <div>
          <p class="hideOverflow">{{selectedSection}}</p>        
          <div class="panel panel-interno">
            <button class="btn btn-default btn-block" (click)="estadisticas(false)">
              <span class="negrita">Análisis de sección</span>
            </button>
          </div>
          <button class="btn btn-default btn-block btn-documento" (click)="estadisticas(true)">
              <span class="negrita">Análisis del documento</span></button>
        </div>

        <h4 style="margin-top:1em; border-bottom-style:solid; border-bottom-width:1px; padding-bottom:0.5em">Control de versiones</h4>
        <div>
          <p><span>Versión sección: </span>5, desde <span>1/12/2016</span></p>
        </div>
        <div>
          <p style="font-weight: bold">Nueva versión:</p>
          <textarea style="width:100%; height: 3em;">Descripción de los cambios</textarea>
          <button class="btn btn-danger btn-block">Confirmar nueva versión</button>

        </div>
      </div>
    </div>
  `,
  styles: [`
        .panel-moderador{
            width: 280px;
        }
        .panel-moderador h2 {
            font-size: 23px;
        }
        .btn-documento {
            margin-top: 5px;
        }
        .panel-interno{
            margin-top: 5px;
        }
        .btn {
            margin-left: 0;
        }
        .negrita{
            font-weight: bold;
        }
        .hideOverflow{
            margin-top: 10px;
            font-style: italic;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
            max-width: 240px;
            display:block;
        }
  `]
})

export class ModeratorTool {

  @Input() selectedSection:string;

  @Output() estadisticasActivated = new EventEmitter<boolean>();

  estadisticas(what: boolean) {
    this.estadisticasActivated.emit(what);
  }
}
