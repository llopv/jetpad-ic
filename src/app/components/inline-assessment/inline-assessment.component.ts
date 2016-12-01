import {Component, Input, Output, OnInit, EventEmitter, ViewChild} from "@angular/core";
import {RateModal} from "./rate-modal.component";

@Component({
    selector: 'editor-assessment',
    templateUrl: './inline-assessment.component.html',
    styles: [`
    .tooltip-editor {
      float: right;
      position: absolute;
      background-color: rgba(255,255,255,0.5);
      color: white;
      margin-top: -20px;
      margin-left: -2px;
      font-size: 9pt;
      font-weight: normal;
      font-style: normal;
      font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
      z-index: 9;
      padding: 20px;
    }
    .carousel-control{
        color: #2220a5;
    }
  `]
})

export class InlineAssessment implements OnInit {

    @Input() range: any;
    @Input() sectionNode: any;
    @Input() posY: number;
    @Input() hidden: boolean;
    @Output() onNewRating = new EventEmitter<string>();
    @ViewChild(RateModal) childModal: RateModal;


    ngOnInit() {
        this.hidden = false;
    }

    newRating(ratingId: string) {
        this.onNewRating.emit(ratingId);
    }

    close() {
        //this.childModal.close();
    }

    openModal(agreed: number) {
        this.childModal.open(agreed, this.sectionNode, this.range);
    }

}
