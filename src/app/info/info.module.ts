import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';
import { InfoS1Component } from './info-s1/info-s1.component';
import { InfoS2Component } from './info-s2/info-s2.component';
import { InfoS3Component } from './info-s3/info-s3.component';


@NgModule({
  declarations: [
    InfoComponent,
    InfoS1Component,
    InfoS2Component,
    InfoS3Component
  ],
  imports: [
    CommonModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
