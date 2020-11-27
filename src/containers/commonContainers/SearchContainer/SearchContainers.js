import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterTable, pagination } from '../../../actions/actionsState';
import { SearchComponent } from '../../../pages/PageComponents'

function SearchContainers({status_page,setSelectedDate,selectedDate}) {
    const dispatch = useDispatch();

    const [search,setSearch] = useState({
        filterPrice: "All",
        filterCity: "All"
    })
    useEffect(() => {
        dispatch(filterTable(search));
        dispatch(dispatch(pagination(1,0,10)))
    }, [dispatch,search]);
    const onChangeSelect=(event)=>{
        let name=event.target.name;
        setSearch({
            ...search,[name]:event.target.value,
        })
    }
    return (
        <SearchComponent
        search={search}
        status_page={status_page}
        onChangeSelect={onChangeSelect}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        />
    )
}

export default SearchContainers
