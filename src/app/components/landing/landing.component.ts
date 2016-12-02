import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  template: `

    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 text-center bg-blue-gradient">
            <h2></h2>
            <form class="panel-body" (ngSubmit)="openDocument(documentId);" #documentIdForm="ngForm">
              <div class="col-md-8 col-md-offset-2">
                <div class="form-group">
                  <input [(ngModel)]="documentId" placeholder="Document ID here" name="documentId" #documentIdInput required class="form-control" id="documentIdInput">
                </div>
                <button class="btn btn-primary btn-lg no-margin" [disabled]="!documentIdForm.form.valid">Open or Create</button>
              </div>
            </form>
            <p class="text-muted">No login required - Copy the URL to share</p>
          </div>
        </div>
      </div>
    </section>


    <app-footer></app-footer>
    `
})


export class LandingComponent {

  constructor(private router: Router) {
  }

  openDocument(_id: string) {
    if (_id) {
      _id = _id.split(" ").join("-").substr(0, 64);
      let link = ['edit', _id];
      this.router.navigate(link);
    }
  }

}
