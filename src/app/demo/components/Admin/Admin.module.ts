import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './Admin-routing.module';
import { AdminComponent } from './Admin.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
