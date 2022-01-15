import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './container-layout/container-layout.component';
import { GridcolComponent } from './gridcol/gridcol.component';
import { BootstrapmainComponent } from './bootstrapmain/bootstrapmain.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OffsetComponent } from './offset/offset.component';
import { ReorderingComponent } from './reordering/reordering.component';
import { NestingComponent } from './nesting/nesting.component';
import { MarginComponent } from './margin/margin.component';
import { PaddingComponent } from './padding/padding.component';
import { HalignComponent } from './halign/halign.component';
import { ValignComponent } from './valign/valign.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerLayoutComponent,
    GridcolComponent,
    BootstrapmainComponent,
    PageNotFoundComponent,
    OffsetComponent,
    ReorderingComponent,
    NestingComponent,
    MarginComponent,
    PaddingComponent,
    HalignComponent,
    ValignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
