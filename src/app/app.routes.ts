import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'

export const routes: Routes = [

    {
        //path nombre de nuestra ruta
        path: '', //Para que la pagina inical quede home o la ruta principal
        //path: 'home',
        component: HomeComponent //El componente que renderiza
    },
    {
        path: 'labs',
        component: LabsComponent
    },

];
