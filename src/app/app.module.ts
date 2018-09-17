import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { MatCardModule, MatToolbarModule, MatButtonModule, MatGridListModule, MatMenuModule, 
          MatIconModule, MatTableModule, MatExpansionModule,
          MatFormFieldModule } from '@angular/material';

import { appRoutes } from '../app/route/route'

import { DashboardAppComponent } from './dashboard-app/dashboard-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportListComponent } from './report-list/report-list.component';
import { ProcessPendingComponent } from './process-pending/process-pending.component';
import { FinishsubcontractingComponent } from './finishsubcontracting/finishsubcontracting.component';
import { WeavingsubcontractingComponent } from './weavingsubcontracting/weavingsubcontracting.component';
import { SpinningsubcontractingComponent } from './spinningsubcontracting/spinningsubcontracting.component';
import { WeavingloadingComponent } from './weavingloading/weavingloading.component';
import { ChindinsideComponent } from './weavingloading/chindinside/chindinside.component';
import { VapiinsideComponent } from './weavingloading/vapiinside/vapiinside.component';
import { JalgaoninsideComponent } from './weavingloading/jalgaoninside/jalgaoninside.component';
import { ChindoutsideComponent } from './weavingloading/chindoutside/chindoutside.component';
import { VapioutsideComponent } from './weavingloading/vapioutside/vapioutside.component';
import { JalgaonoutsideComponent } from './weavingloading/jalgaonoutside/jalgaonoutside.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    DashboardAppComponent,
    ReportListComponent,
    ProcessPendingComponent,
    FinishsubcontractingComponent,
    WeavingsubcontractingComponent,
    SpinningsubcontractingComponent,
    WeavingloadingComponent,
    ChindinsideComponent,
    VapiinsideComponent,
    JalgaoninsideComponent,
    ChindoutsideComponent,
    VapioutsideComponent,
    JalgaonoutsideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    LayoutModule,
    MatTableModule,
    HttpModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
