import React, { useState } from 'react'

import Template from './Template'
import Albuns from './Albuns'
import Counter from './Counter'
import Users from './Users'

const pages = {
  albuns: {
    text: 'Álbuns',
    component : Albuns,
  },
  counter: {
    text: 'Counter',
    component: Counter,
  },
  users: {
    text: 'Usuários',
    component: Users,
  },
}


function App(){
  const [page, setPage] = useState('albuns')

  const handleChangePage = page => {
    setPage(page)
  }

  const Page = pages[page].component

  return(
    <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
      { Page && <Page/>}
    </Template>
  )
}

export default App;
