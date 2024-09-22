import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '',loadChildren: () => import('./demo/components/auth/login/login.module').then(m => m.LoginModule) },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'inicio', loadChildren: () => import('./demo/components/Cliente/cliente.module').then(m => m.ClienteModule) },
                    { path: 'consola', loadChildren: () => import('./demo/components/Admin/Admin.module').then(m => m.AdminModule) },
                ]
            }
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
