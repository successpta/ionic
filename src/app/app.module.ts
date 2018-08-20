import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HomePage } from '../pages/home/home';
import { JadualdanSubjekPage } from '../pages/jadualdan-subjek/jadualdan-subjek';
import {AttendancePage} from '../pages/attendance/attendance';
import { ViewPelajarPage } from '../pages/view-pelajar/view-pelajar';
import { ReportPage } from '../pages/report/report';
import { CameraPage } from '../pages/camera/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    LoginPage,
    ForgotPasswordPage,
    HomePage,
    JadualdanSubjekPage,
    AttendancePage,
    ViewPelajarPage,
    ReportPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    ForgotPasswordPage,
    HomePage,
    JadualdanSubjekPage,
    AttendancePage,
    ViewPelajarPage,
    ReportPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
