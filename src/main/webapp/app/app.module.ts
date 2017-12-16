import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { HelloJHipsterSharedModule, UserRouteAccessService } from './shared';
import { HelloJHipsterAppRoutingModule} from './app-routing.module';
import { HelloJHipsterHomeModule } from './home/home.module';
import { HelloJHipsterAdminModule } from './admin/admin.module';
import { HelloJHipsterAccountModule } from './account/account.module';
import { HelloJHipsterEntityModule } from './entities/entity.module';
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
        HelloJHipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        HelloJHipsterSharedModule,
        HelloJHipsterHomeModule,
        HelloJHipsterAdminModule,
        HelloJHipsterAccountModule,
        HelloJHipsterEntityModule,
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
export class HelloJHipsterAppModule {}
