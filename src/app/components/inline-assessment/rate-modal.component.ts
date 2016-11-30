import {Component, ViewChild, Input, ViewChildren, QueryList, OnInit} from "@angular/core"
import {Modal} from "ng2-modal/Modal"
import {SlideComponent} from "ng2-bootstrap/components/carousel/slide.component"
import {TabDirective} from "ng2-bootstrap/components/tabs/tab.directive"
import {CarouselComponent} from "ng2-bootstrap/components/carousel/carousel.component"

@Component({
  selector: 'rate-modal',
  templateUrl: './rate-modal.component.html'
})

export class RateModal implements OnInit {
  @Input() type: number;
  @Input() section: string = 'Artículo 1';
  @Input() content: string = `Contenido del aritculo 1 para nuestra ley super guapa creada de forma colaborativa. Esto
tiene que ser muy largo para probar que el scroll funciona correctamente. Así que asdf asdfoiu  asdfñlkjasui lkj sdf
fasklj asuñlkj sfñoiua sdkljsdfiuwlkñj sdñj sdfñlkj sfuoasñklj asdfouiñsd lkjasñasklfjasfñljas lkasñouisñlkasj as
f asñlkfjasdñklfjsois lñkjasñoiusf lkasjfñiu fñlasfasñi fñlkfjsñoifuasñ flksfñliasf ñsklfjasñofis fñlsjf as
sfñaksfj sñkfjasñofiusñflkasjfñlkasdfñasijfñasljñljasfñfl  fsfsñ fksadñlfka sflka sflaskf aslfjalkf jsfasf`;
  @ViewChild(Modal) childModal: Modal;
  @ViewChildren(TabDirective) tabs:QueryList<TabDirective>;
  @ViewChildren(CarouselComponent) carousels:QueryList<CarouselComponent>;

  positivasIndex: number = 0;
  negativasIndex: number = 0;
  preguntasIndex: number = 0;
  currentTab: number = 0;
  valoracionTexto: string;
  ngOnInit() {

  }

  positivas = [
    {
      comentario: 'Esto es un primer comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un segundo comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un tercer comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un cuarto comentario sobre el texto',
      fecha: new Date()
    }
  ];

  negativas = [
    {
      comentario: 'Esto es un primer comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un segundo comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un tercer comentario sobre el texto',
      fecha: new Date()
    }
  ];

  preguntas = [
    {
      comentario: 'Esto es un primer comentario sobre el texto',
      fecha: new Date()
    },
    {
      comentario: 'Esto es un segundo comentario sobre el texto',
      fecha: new Date()
    }
  ];



  public close() {
    this.childModal.close();
  }

  public open(tab:number) {
    this.tabs.toArray()[tab].active = true;
    this.childModal.open();
    console.log(this.carousels);
  }

  copiar(valoracion:any){
    this.valoracionTexto = valoracion.comentario;
  }
}