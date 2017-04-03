import { Injectable } from '@angular/core';
import {MenuItem} from "./item.model";

@Injectable()
export class MenuService {

  items: Array<MenuItem>;

}
