import { Injectable } from '@angular/core';

@Injectable()
export class RolesService {

  navMenu = [
    {
        link: '/principal',
        icon: 'home',
        title: 'Principal',
        active: true,
        submenu: []
    },
    {
        link: '/ingreso',
        icon: 'directions_walk',
        title: 'Ingreso',
        active: true,
        submenu: []
    },
    {
        link: '/promocion',
        icon: 'supervisor_account',
        title: 'Promoción',
        active: true,
        submenu: []
    },
    {
        link: '/desempeno',
        icon: 'group_add',
        title: 'Desempeño',
        active: true,
        submenu: []
    },
    {
        link: '/reconocimiento',
        icon: 'class',
        title: 'Reconocimiento',
        active: true,
        submenu: []
    },
    {
        link: '/formacionContinua',
        icon: 'school',
        title: 'Formación Contínua',
        active: true,
        submenu: []
    },
    {
        link: '/administracion',
        icon: 'security',
        title: 'Administración',
        active: true,
        submenu: []
    }
  ];
  constructor() { }

}
