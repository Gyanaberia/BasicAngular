import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {  path:"form",component:FormComponent},//Route to FormComponent when /form is added to the link
  {path:"contact",component:ContactPageComponent},
  {path:"**",component:ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Outlabroute=[FormComponent,
                          ContactPageComponent]
