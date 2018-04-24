import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment';

@Injectable()
export class MenusService {
  private url = environment.api;

  constructor(private _http: HttpClient) {}

  public subs = new BehaviorSubject([]);
  public menu;
  public navMenu = new BehaviorSubject([]);
  getMenu() {
    this._http.get(this.url + '/menus').subscribe((menus: any) => {
      this.navMenu.next(menus);
    });
  }
  getSubmenu(id) {
    this.navMenu.subscribe(
      menus => {
        if (menus.length) {
          const sub: any = menus.filter(menu => menu._id === id);
          this.subs.next(sub[0].subs);
        }
      }
    );
  }
  putMenu(menu) {
    return this._http.put(this.url + '/menus', menu, {headers: {'content-type': 'application/json'}});
  }
  getSchema(): Observable<any> {
    return this._http.get(`${this.url}/api/menus/model`);
  }
}
