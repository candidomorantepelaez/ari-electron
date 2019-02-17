import 'typeface-roboto'
import 'assets/css/index.css'
import createAppTouka from 'touka'
import HomePage from 'pages/home-page'
import MenuComponent from 'pages/menu-component'
import globalModule from 'modules/global/module'


createAppTouka({
  config: {
    apibasePath: 'http://localhost:8080',
    apiLoginPath: '/login',
    apiLogoutPath: '/logout',
    appBasePath: '/',
    appLoginPath: '/login',
    appLogoutPath: '/logout',
    defaultLanguage: 'es',
    languages: ['es', 'en'],
    homeComponent: HomePage,
    menuComponent: MenuComponent,
  },
  modules: [
    globalModule,
  ],
})

/*
const initialConfig = {
  config: {
    apibasePath: 'http://localhost:8080',
    apiLoginPath: '/login',
    apiLogoutPath: '/logout',
    appBasePath: '/',
    appLoginPath: '/login',
    appLogoutPath: '/logout',
    defaultLanguage: 'en',
    languages: ['es', 'en'],
    homeComponent: HomePage,
    loginComponent: LoginPage,
    logoutComponent: LogoutPage,
    noMatchComponent: NoMatchPage,
    menuComponent: MenuComponent,
    alertComponent: AlertComponent,
  },
  modules: [
    globalModule,
  ],
}
*/
