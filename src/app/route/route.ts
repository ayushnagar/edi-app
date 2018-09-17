import { Routes } from '@angular/router'
import { HomeAppComponent } from '../home-app/home-app.component';
import { DashboardAppComponent } from '../dashboard-app/dashboard-app.component';

import { ProcessPendingComponent } from '../process-pending/process-pending.component';
import { WeavingloadingComponent } from '../weavingloading/weavingloading.component';

export const appRoutes : Routes = [
    {
        path: '', component : HomeAppComponent
    },
    {
        path: 'processpendingdetails', component: ProcessPendingComponent
    },
    { path: 'weavingloading', component: WeavingloadingComponent}
]