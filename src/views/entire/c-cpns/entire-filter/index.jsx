import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectList, setSelectList] = useState([])

  function handleFilterItemClick(item) {
    // 记录选择的过滤条件
    let newSelectList = [...selectList]
    if (selectList.includes(item)) { 
      // 移除操作
      newSelectList = selectList.filter(filterItem => filterItem !== item)
    }else { 
      // 添加操作
      newSelectList.push(item)
    }
    setSelectList(newSelectList)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div 
              className={classNames('filter-item', {active: selectList.includes(item)})} 
              key={item} onClick={e => handleFilterItemClick(item)}>
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter