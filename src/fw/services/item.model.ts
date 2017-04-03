/**
 * Created by stefan.trajkovic on 3.4.2017..
 */

export interface MenuItem {
  text: string,
  icon: string,
  route: string,
  submenu: Array<MenuItem>
}
