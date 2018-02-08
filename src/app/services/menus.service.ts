import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {
    public navMenu = [
        {
            link:'/principal',
            icon:'home',
            title: 'Principal'
        },
        {
            link: '/ingreso',
            icon: 'directions_walk',
            title: 'Ingreso'
        },
        {
            link: '/promocion',
            icon: 'supervisor_account',
            title: 'Promoción',
        },
        {
            link: '/desempeno',
            icon: 'group_add',
            title: 'Desempeño'
        },
        {
            link: '/reconocimiento',
            icon: 'class',
            title: 'Reconocimiento'
        },
        {
            link: '/formacionContinua',
            icon: 'school',
            title: 'Formación Contínua'
        },
        {
            link: '/administracion',
            icon: 'security',
            title: 'Administración'
        }
    ]

    adminMenu = [
        {
          icon: 'arrow_back',
          title: 'Administración',
          description: 'Panel principal de Administración',
          link: '/administracion'
        },
        {
          icon: 'people',
          title: 'Personas',
          description: 'Administrar el registro de personal',
          link: '/administracion/personas'
        },
        {
          icon: 'face',
          title: 'Usuarios',
          description: 'Administración de Cuentas de Usuarios',
          link: '/administracion'
        },
        {
          icon: 'verified_user',
          title: 'Roles',
          description: 'Administración de roles',
          link: '/administracion/roles'
        },
        {
          icon: 'done_all',
          title: 'Opciones',
          description: 'Administra las opciones de menus y aplicación',
          link: '/administracion'
        },
        {
          icon: 'view_list',
          title: 'Alcances',
          description: 'Define y administra alcances para los roles',
          link: '/administracion'
        },
     
      ];
    getMenu(){
        return this.navMenu;
    }

    getAdminMenu(){
        return this.adminMenu;
    }
}