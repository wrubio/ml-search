import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SearchModule } from '../search/search.module';
import { AppIconsModule } from '../app-icons.module';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BreadcrumbsComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    AppIconsModule,
  ],
  exports: [
    NavbarComponent,
    BreadcrumbsComponent,
    LoaderComponent,
    NotificationComponent,
  ]
})
export class SharedModule { }
