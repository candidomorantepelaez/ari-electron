import { fredux, alertAction, history } from 'touka'
import {
  REMOVE_STORE, SAVE_STORE, UPDATE_STORE,
} from 'modules/stores/actions'


const { openAlert } = alertAction
const { successType, failureType } = fredux

const reactions = [
  {
    match: successType(REMOVE_STORE),
    reaction: () => {
      history.push('/stores')
      return openAlert({ type: 'success', message: 'stores.alerts.success.delete' })
    },
  }, {
    match: failureType(REMOVE_STORE),
    reaction: () => openAlert({ type: 'warning', message: 'stores.alerts.failure.delete' }),
  }, {
    match: successType(SAVE_STORE),
    reaction: () => {
      history.push('/stores')
      return openAlert({ type: 'success', message: 'stores.alerts.success.save' })
    },
  }, {
    match: failureType(SAVE_STORE),
    reaction: () => openAlert({ type: 'warning', message: 'stores.alerts.failure.save' }),
  }, {
    match: successType(UPDATE_STORE),
    reaction: () => {
      history.push('/stores')
      return openAlert({ type: 'success', message: 'stores.alerts.success.edit' })
    },
  }, {
    match: failureType(UPDATE_STORE),
    reaction: () => openAlert({ type: 'warning', message: 'stores.alerts.failure.edit' }),
  },
]

export default reactions
