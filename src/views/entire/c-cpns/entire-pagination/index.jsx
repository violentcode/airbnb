import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import { Pagination } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changePageAction } from '@/store/modules/entire';

const EntirePagination = memo(() => {
  const {totalCount, entireList, page} = useSelector(state => ({
    totalCount: state.entire.totalCount,
    entireList: state.entire.entireList,
    page: state.entire.page
  }), shallowEqual)
  const dispatch = useDispatch()
  
  function handleChangePage(current, size) {
    dispatch(changePageAction(current - 1))
    window.scrollTo(0, 0)
  }

  return (
    <PaginationWrapper>
          {
            !!entireList.length && 
            <div className='page'>
              <Pagination defaultCurrent={page + 1} total={300} defaultPageSize={20} onChange={handleChangePage}/>
              <div className="info">
                第 {page * 20 + 1} - {page * 20 + entireList.length} 个房源，共超过 {totalCount} 个
              </div>
            </div>
          }
    </PaginationWrapper>
  )
})

export default EntirePagination