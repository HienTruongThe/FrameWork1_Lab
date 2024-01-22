import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { ProductComponent } from './admin/product/product.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { LoginComponent } from './admin/login/login.component';

export const routes: Routes = [
    { path: '', component: ContentComponentComponent },
    { path: 'product-detail/:id', component: ProductDetailComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [guardGuard],
        children: [
            { path: 'product', component: ProductComponent },
        ]
    },
];
