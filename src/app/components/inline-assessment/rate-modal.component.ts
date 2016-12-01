import {Component, ViewChild, Input, ViewChildren, QueryList, OnInit} from "@angular/core"
import {Modal} from "ng2-modal/Modal"
import {SlideComponent} from "ng2-bootstrap/components/carousel/slide.component"
import {TabDirective} from "ng2-bootstrap/components/tabs/tab.directive"
import {CarouselComponent} from "ng2-bootstrap/components/carousel/carousel.component"
import { RatingService } from "../../services";

@Component({
  selector: 'rate-modal',
  templateUrl: './rate-modal.component.html'
})

export class RateModal implements OnInit {

  @Input() type: number;
  @Input() section: string = "Not section available";
  @Input() content: string = "Not text available";

  @ViewChild(Modal) childModal: Modal;
  @ViewChildren(TabDirective) tabs:QueryList<TabDirective>;
  @ViewChildren(CarouselComponent) carousels:QueryList<CarouselComponent>;

  positivasIndex: number = 0;
  negativasIndex: number = 0;
  preguntasIndex: number = 0;
  currentTab: number = 0;
  valoracionTexto: string;

  constructor(private ratingService: RatingService) {

  }

  ngOnInit() {

  }

  agreeRatings: Array<any>;
  disagreeRatings: Array<any>;
  questionRatings: Array<any>;


  public close() {
    this.childModal.close();
  }

  public open(tab: number, sectionNode: any, range: any) {
    this.tabs.toArray()[tab].active = true;

    window._section = sectionNode;
    window._range = range;

    let ratings = this.ratingService.getRatings(sectionNode.id, "");
    this.agreeRatings = ratings.agree;
    this.disagreeRatings = ratings.disagree;
    this.questionRatings = ratings.question;

    this.section = sectionNode.textContent;
    this.content = range.node.textContent;



    this.childModal.open();
    console.log(this.carousels);
  }

  copiar(valoracion:any){
    this.valoracionTexto = valoracion.comentario;
  }


  prev(num: number){
    let index:number;
    let carousel:any = this.carousels.toArray()[num];
    if (num === 0){
      index = this.positivasIndex;
    } else if (num === 1){
      index = this.negativasIndex;
    } else {
      index = this.preguntasIndex;
    }
    if (index > 0) {
      carousel.prev();
      if (num === 0){
        this.positivasIndex--;
      } else if (num === 1){
        this.negativasIndex--;
      } else {
        this.preguntasIndex--;
      }
    }
  }

  next(num: number){
    let index:number;
    let carousel:any = this.carousels.toArray()[num];
    if (num === 0){
      index = this.positivasIndex;
    } else if (num === 1){
      index = this.negativasIndex;
    } else {
      index = this.preguntasIndex;
    }
    if (index < carousel.slides.length -1 ) {
      carousel.next();
      if (num === 0){
        this.positivasIndex++;
      } else if (num === 1){
        this.negativasIndex++;
      } else {
        this.preguntasIndex++;
      }
    }
  }

}
