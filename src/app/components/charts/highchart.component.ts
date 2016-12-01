import {Component, ViewChild} from '@angular/core'
import {Modal} from "ng2-modal/Modal"
import {pintarGrafica1} from './grafica1'
import {pintarGrafica2} from './grafica2'
import {pintarGrafica3} from './grafica3'

@Component({
  selector: 'graficos',
  templateUrl:'./highchart.component.html'
})

export class Graficos{
  @ViewChild(Modal) childModal: Modal;

  public open() {
    this.childModal.open();
  }

  public close() {
    this.childModal.close();
  }

  actionOnOpen(){
    setTimeout(function () {
      pintarGrafica1();
      pintarGrafica2();
      pintarGrafica3()
    },100);
    /*pintarGrafica1();
    pintarGrafica2();
    pintarGrafica3();*/
  }
}
