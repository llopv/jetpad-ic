import {Component, ViewChild} from '@angular/core'
import {Modal} from "ng2-modal/Modal"
import {pintarGrafica1} from './grafica1'
import {pintarGrafica2} from './grafica2'
import {pintarGrafica3} from './grafica3'
import {pintarGrafica4} from './grafica4'

@Component({
  selector: 'graficos',
  templateUrl:'./highchart.component.html'
})

export class Graficos{
  @ViewChild(Modal) childModal: Modal;
  general: boolean = true;
  public open(general:boolean) {
    this.general = general;
    this.childModal.open();
  }

  public close() {
    this.childModal.close();
  }

  actionOnOpen(){
    if (this.general) {
      setTimeout(function () {
        pintarGrafica1();
        pintarGrafica2();
        //pintarGrafica3()
      },100);
    } else {
      setTimeout(function () {
        pintarGrafica4();
      },100);
    }

    /*pintarGrafica1();
    pintarGrafica2();
    pintarGrafica3();*/
  }
}
