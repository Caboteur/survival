import React from 'react'
import { Provider } from 'mobx-react'
import myStore from 'stores/my-store.js'

export default ({ element }) => (
  <Provider messages={new MessagesStore()}>{element}</Provider>
)
