import { Component } from '@angular/core';
import {FrameworkConfigService} from "../fw/services/framework-config.service";
import {FrameworkConfigSettings} from "../fw/models/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private frameworkCofigService: FrameworkConfigService) {
    let config : FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/facebook.png', alt: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100007872793995' },
        { imageFile: 'assets/github.png', alt: 'Github', link: 'https://github.com/saibot777' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkCofigService.configure(config);

  }

}
