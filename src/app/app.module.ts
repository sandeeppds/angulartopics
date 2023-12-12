import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecremoveComponent } from './specremove/specremove.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustombgDirective } from './directives/custombg.directive';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { CustomDatepickerComponent } from './customcomponents/custom-datepicker/custom-datepicker.component';
import { CustomeMenuBarComponent } from './customcomponents/custome-menu-bar/custome-menu-bar.component';
import { ParentComponent } from './componentinteraction/parent/parent.component';
import { ChildComponent } from './componentinteraction/child/child.component';
import { PBindingComponent } from './Runningnotes/p-binding/p-binding.component';
import { ClassBindingComponent } from './Runningnotes/class-binding/class-binding.component';
import { EventBindingComponent } from './Runningnotes/event-binding/event-binding.component';
import { IfComponent } from './Runningnotes/if/if.component';
import { ReferencevariableaComponent } from './Runningnotes/referencevariablea/referencevariablea.component';
import { SwitchcaseComponent } from './Runningnotes/switchcase/switchcase.component';
import { ForLoopComponent } from './Runningnotes/for-loop/for-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecremoveComponent,
    StyleBindingComponent,
    CustombgDirective,
    MultiplyPipe,
    CustomDatepickerComponent,
    CustomeMenuBarComponent,
    ParentComponent,
    ChildComponent,
    PBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    IfComponent,
    ReferencevariableaComponent,
    SwitchcaseComponent,
    ForLoopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
