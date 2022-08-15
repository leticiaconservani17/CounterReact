import React from "react"

const Nav = ({pages, onChangePage}) => {
    
  const namePages = Object.keys(pages)

    return(
        <nav>
            {
              namePages.map(page => <button onClick={()=> onChangePage(page)}>{pages[page].text}</button>)
            }
        </nav>
    )
}

export default Nav