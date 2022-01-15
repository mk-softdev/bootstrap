import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapmainComponent } from './bootstrapmain/bootstrapmain.component';
import { ContainerLayoutComponent } from './container-layout/container-layout.component';
import { GridcolComponent } from './gridcol/gridcol.component';
import { HalignComponent } from './halign/halign.component';
import { MarginComponent } from './margin/margin.component';
import { NestingComponent } from './nesting/nesting.component';
import { OffsetComponent } from './offset/offset.component';
import { PaddingComponent } from './padding/padding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReorderingComponent } from './reordering/reordering.component';
import { ValignComponent } from './valign/valign.component';

const routes: Routes = [
  { path: '', redirectTo: '/bootmain', pathMatch: 'full' },
  { path: 'bootmain', component: BootstrapmainComponent },
  { path: 'layout', component: ContainerLayoutComponent },
  { path: 'gridcol', component: GridcolComponent },
  { path: 'offset', component: OffsetComponent },
  { path: 'reorder', component: ReorderingComponent },
  { path: 'nesting', component: NestingComponent },
  { path: 'margin', component: MarginComponent },
  { path: 'padding', component: PaddingComponent },
  { path: 'halign', component: HalignComponent },
  { path: 'valign', component: ValignComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
