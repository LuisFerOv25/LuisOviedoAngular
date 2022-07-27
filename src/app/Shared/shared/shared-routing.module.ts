import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from 'src/app/Modules/auth/login-page/login-page.component';
import { RegisterComponent } from 'src/app/Modules/auth/register/register.component';
import { ValidationComponent } from 'src/app/Modules/auth/validation/validation.component';
import { MarcadoresViewComponent } from 'src/app/Modules/favoritos/marcadores-view/marcadores-view.component';
import { HistorymenuComponent } from 'src/app/Modules/history/historymenu/historymenu.component';
import { FooterComponent } from 'src/app/Modules/home/footer/footer.component';
import { HeadersComponent } from 'src/app/Modules/home/headers/headers.component';
import { TracklistComponent } from 'src/app/Modules/track/tracklist/tracklist.component';

const routes: Routes = [

  //RUTAS DEL MODULO AUTH
  {
    path: 'login', component:LoginPageComponent
    //crear un componente llamado login-page dentro del medio Auth
  },
  {
    path: 'registrer', component:RegisterComponent

  },
  {
    path: 'validation', component:ValidationComponent
 
  },
  //RUTAS DEL MODULO HOME
  {
    path: 'headers', component:HeadersComponent
   
  },
  {
    path: 'footer', component:FooterComponent
   
  },
   //RUTAS DEL MODULO TRACKS
  {
    path: 'tracklist', component:TracklistComponent
   
  },  
   //RUTAS DEL MODULO HISTORY
  {
    path: 'historymenu', component:HistorymenuComponent
    
  },   
   //RUTAS DEL MODULO FAVORITOS
   {
    path: 'marcadoresview', component:MarcadoresViewComponent
   
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
