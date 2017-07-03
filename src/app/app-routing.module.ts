import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddPrdComponent } from './add-prd/add-prd.component';
import { EditPrdComponent } from './edit-prd/edit-prd.component';
import { ShowPrdComponent } from './show-prd/show-prd.component';

const routes:Routes = [
	{path:'', redirectTo:'/home', pathMatch: 'full'},
	{path:'home', component:HomeComponent},
	{path:'addPrd', component:AddPrdComponent},
	{path:'editPrd/:id', component:EditPrdComponent},
	{path:'showPrd/:id', component:ShowPrdComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
