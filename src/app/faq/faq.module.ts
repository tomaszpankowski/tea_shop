import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';
import { FaqS1Component } from './faq-s1/faq-s1.component';
import { FaqS2Component } from './faq-s2/faq-s2.component';


@NgModule({
  declarations: [
    FaqComponent,
    FaqS1Component,
    FaqS2Component
  ],
  imports: [
    CommonModule,
    FaqRoutingModule
  ]
})
export class FaqModule { }
