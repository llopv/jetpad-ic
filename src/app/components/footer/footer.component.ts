import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
        <footer>
          <nav class="navbar">
            <div class="col-xs-6 col-md-2 col-md-offset-1 img-wrapper mar-top-50">
              <!-- <a href="http://swellrt.org/"> -->
                <img class="center-block vertical-middle" src="assets/img/swellrt_logo_text.png" alt="">
              <!-- </a> -->
            </div>
            <div class="col-xs-6 col-md-2 img-wrapper mar-top-50">
              <!-- <a href="https://github.com/P2Pvalue"> -->
                <img class="center-block" src="assets/img/github_logo_text.png" alt="">
              <!-- </a> -->
            </div>
            <div class="col-xs-6 col-xs-offset-0 col-md-2 col-md-offset-3 sm-text-center">
              <h3>Jetpad</h3>
              <ul class="footer-links">
                <li><a [routerLink]=" ['./'] ">Home</a></li>
                <li><a [routerLink]=" ['./vision'] ">Vision and History</a></li>
                <li><a [routerLink]=" ['./'] ">Login</a></li>
                <li><a [routerLink]=" ['./'] ">Register</a></li>
              </ul>
            </div>
            <div class="col-xs-6 col-md-2 sm-text-center">
              <h3>Contact with us</h3>
              <ul class="footer-links">
                <li><a [routerLink]=" ['./'] ">@twitterjetpad</a></li>
                <li><a [routerLink]=" ['./'] ">GitHub-Gitter</a></li>
              </ul>
            </div>
            <div class="col-xs-12 text-center mar-top-30">
              <p>
                <span>
                  JetPad software is licensed under
                  <a>GNU Affero General Public License, version 3.</a>
                </span>
                <span>
                  JetPad.org is a service provided with no warranty under the following
                  <a [routerLink]=" ['./terms'] ">Terms of Use.</a>
                </span>
              </p>
            </div>
          </nav>
        </footer>
        `
})

export class FooterComponent {}
