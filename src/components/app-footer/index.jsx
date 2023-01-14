import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerList from "@/assets/data/footer.json"


const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer">
        {
          footerList.map(list => {
            return (
              <div className="list" key={list.name}>
                <div className="title">{list.name}</div>
                {
                  list.list.map(item => {
                    return <div className="item" key={item}>{item}</div>
                  })
                }
              </div>
            )
          })
        }
      </div>
    </FooterWrapper>
  )
})

export default AppFooter