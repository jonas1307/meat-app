import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ROUTES } from './about.routes';

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule { }
