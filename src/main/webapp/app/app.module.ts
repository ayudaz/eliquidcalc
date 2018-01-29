import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { EliquidcalcSharedModule, UserRouteAccessService } from './shared';
import { EliquidcalcAppRoutingModule} from './app-routing.module';
import { EliquidcalcHomeModule } from './home/home.module';
import { EliquidcalcAdminModule } from './admin/admin.module';
import { EliquidcalcAccountModule } from './account/account.module';
import { EliquidcalcEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        EliquidcalcAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EliquidcalcSharedModule,
        EliquidcalcHomeModule,
        EliquidcalcAdminModule,
        EliquidcalcAccountModule,
        EliquidcalcEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EliquidcalcAppModule {}
