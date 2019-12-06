import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { ListhighlightDirective } from './mycomponent/listhighlight.directive';
import { TestpipePipe } from './mycomponent/testpipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { MemberComponent } from './member/member.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    ListhighlightDirective,
    TestpipePipe,
    ParentComponent,0
    MemberComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
