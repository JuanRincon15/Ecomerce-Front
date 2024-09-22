import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './Admin.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AdminComponent }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
