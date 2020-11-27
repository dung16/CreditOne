import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pagination } from '../../../../actions/actionsState';
import { PaginationComponent } from '../../../../pages/PageComponents'

function PaginationContainer({count_length}) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.pagination);
    const total= Math.ceil(count_length / state.showPerPage)
    const changePagination =(number)=>{
        let count =number;
        let value = state.showPerPage * number;
        let start= value-state.showPerPage;
        let end= value;
        dispatch(pagination(count,start,end))
    }
    const changePagination_Start_End=(event)=>{
    
        event==="next"?dispatch(pagination(total,state.showPerPage * total - state.showPerPage,state.showPerPage * total)):dispatch(pagination(1,0,10))
    }
    return (
        <PaginationComponent state={state}
        changePagination={changePagination}
        total={total}
        changePagination_Start_End={changePagination_Start_End}
        />
    )
}

export default PaginationContainer
