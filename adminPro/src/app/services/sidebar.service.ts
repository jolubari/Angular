import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          path: '/dashboard'
        },
        {
          title: 'Progress',
          path: 'progress'
        },
        {
          title: 'Charts',
          path: 'graph-one'
        },
        {
          title: 'Promises',
          path: 'promises'
        }
      ]
    }
  ];

  constructor() { }
}
