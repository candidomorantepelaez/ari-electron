import 'typeface-roboto'
import 'assets/css/index.css'
import { createAppTouka } from 'touka'
import HomePage from 'pages/home-page'
import MenuComponent from 'pages/menu-component'
import LoginComponent from 'pages/login-page'
import LogoutComponent from 'pages/logout-page'
import globalModule from 'modules/global/module'
import AlertComponent from 'pages/alert-component'
import NoMatchComponent from 'pages/no-match-page'


createAppTouka({
  config: {
    apiBasePath: 'http://localhost:8080',
    apiLoginPath: '/login',
    apiLogoutPath: '/logout',
    appBasePath: '/',
    appLoginPath: '/login',
    appLogoutPath: '/logout',
    defaultLanguage: 'es',
    languages: ['es', 'en'],
    homeComponent: HomePage,
    menuComponent: MenuComponent,
    loginComponent: LoginComponent,
    logoutComponent: LogoutComponent,
    alertComponent: AlertComponent,
    noMatchComponent: NoMatchComponent,
  },
  modules: [
    globalModule,
  ],
})
