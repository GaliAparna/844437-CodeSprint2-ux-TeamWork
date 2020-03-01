import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { HomeComponent } from './home/home.component';

import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { DashBoardComponent } from './dash-board/dash-board.component';



const routes: Routes = [
  {path:'pc',component:PlaceAppointmentComponent},
  {path:'hc',component:HomeComponent},
  {path:'vc',component:ViewAppointmentComponent},
  {path:'cs',component:ContactUsComponent},
  {path:'hs',component:HeaderComponent},
  {path:'',component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
