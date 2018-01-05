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
            title: 'Promocion',
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
    getMenu(){
        return this.navMenu;
    }
}