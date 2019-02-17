import ListStoresPage from 'modules/stores/pages/list-stores-page'
import CreateStorePage from 'modules/stores/pages/create-store-page'
import DetailStorePage from 'modules/stores/pages/detail-store-page'
import EditStorePage from 'modules/stores/pages/edit-store-page'


export default [
  { path: '/stores', exact: true, component: ListStoresPage },
  { path: '/store/new', exact: true, component: CreateStorePage },
  { path: '/store/detail/:id', exact: true, component: DetailStorePage },
  { path: '/store/edit/:id', exact: true, component: EditStorePage },
]
