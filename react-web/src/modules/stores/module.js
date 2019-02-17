import messages from 'modules/stores/messages/index'
import routes from 'modules/stores/routes'
import reducer from 'modules/stores/reducers/index'
import menu from 'modules/stores/menu'
import reactions from 'modules/stores/reactions'
import PageReview from 'modules/stores/page-review'


export default {
  key: 'stores',
  menu,
  messages,
  routes,
  reducer,
  reactions,
  pageReview: PageReview,
}
