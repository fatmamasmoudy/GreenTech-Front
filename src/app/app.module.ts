import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ExacttoolComponent } from './exacttool/exacttool.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { TableDescriptionComponent } from './table-description/table-description.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LandUseChangesComponent } from './land-use-changes/land-use-changes.component';
import { GrasslandAndLivestockComponent } from './grassland-and-livestock/grassland-and-livestock.component';
//import { NgApexchartsModule } from 'ng-apexcharts';
import { TableDeforestationComponent } from './table-deforestation/table-deforestation.component';
import { TableAfforestationAndReforestationComponent } from './table-afforestation-and-reforestation/table-afforestation-and-reforestation.component';
import { TableOtherLandUseComponent } from './table-other-land-use/table-other-land-use.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TableGrasslandOneComponent } from './table-grassland-one/table-grassland-one.component';
import { ForestManagementComponent } from './forest-management/forest-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './admin/project/project.component';
import { ForestManagmentComponent } from './admin/forest-managment/forest-managment.component';
import { AdminTableDescriptionComponent } from './admin/table-description/table-description.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { LandUseChangesComponentAdmin } from './admin/land-use-changes/land-use-changes.component';
import { ExactoolProjectComponent } from './exactool-project/exactool-project.component';
import { ExactoolProjComponent } from './exactool-proj/exactool-proj.component';
import { GrasslandComponent } from './project/grassland/grassland.component';
import { ChartComponent } from './admin/chart/chart.component';
import { DocComponent } from './doc/doc.component';

const keycloakService = new KeycloakService();

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'exactool',
  clientId: 'exactool'
};

keycloakService.init({
  config: keycloakConfig,
  initOptions: {
  
    checkLoginIframe: false
  },
  bearerExcludedUrls: ['/assets', '/clients/public']
});


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    MatTabsModule,
   // NgApexchartsModule, 
    KeycloakAngularModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSelectModule

      
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ExacttoolComponent,
    ProjectDescriptionComponent,
    LandUseChangesComponentAdmin,
    TableDescriptionComponent,
    LandUseChangesComponent,
    GrasslandAndLivestockComponent,
    ForestManagementComponent,
    TableDeforestationComponent,
    TableAfforestationAndReforestationComponent,
    TableOtherLandUseComponent,
    AuthenticationComponent,
    TableGrasslandOneComponent,
    HeroDetailComponent,
    LoginComponent,
    ProjectComponent,
    ForestManagmentComponent,
    AdminTableDescriptionComponent,
    ExactoolProjectComponent,
    ExactoolProjComponent,
    GrasslandComponent,
    ChartComponent,
    DocComponent
    

  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
