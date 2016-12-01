import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'moderator-tool',
  template: `
    <div class="panel">
      <div class="panel-body panel-moderador">
        <h2>Panel del moderador</h2>
        <h4>Análisis</h4>
        <div>
          <div class="panel panel-interno">           
            <button class="btn btn-info btn-block" (click)="estadisticas()">
              <span class="negrita">Análisis de sección</span>
              <p class="hideOverflow">{{selectedSection}}</p>
            </button>
          </div>
          <button class="btn btn-info btn-block btn-documento" (click)="estadisticas()">
              <span class="negrita">Análisis del documento</span></button>          
        </div>
        <h4>Versiones</h4>
        <div>
          <button class="btn" style="display:none;"></button>
          <button class="btn btn-default btn-block">Versiones</button>
          <button class="btn btn-default btn-block">Why</button>
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

  @Output() estadisticasActivated = new EventEmitter<any>();

  estadisticas() {
    this.estadisticasActivated.emit();
  }
}
