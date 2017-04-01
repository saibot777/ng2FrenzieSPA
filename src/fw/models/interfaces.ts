/**
 * Created by stefan.trajkovic on 1.4.2017..
 */

  export interface IconFiles {
    imageFile : string,
    alt : string,
    link : string
  }

  export interface FrameworkConfigSettings {
     showLanguageSelector? : boolean,
     showUserControls? : boolean,
     showStatusBar? : boolean,
     showStatusBarBreakpoint? : number,
     socialIcons? : Array<IconFiles>
  }
