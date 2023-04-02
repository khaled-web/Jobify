//.............
//importing
//.............
import React from 'react'
import {FormRow, FormRowSelect} from '../components'
import {UseAppContext} from '../context/appContext.js'
import Wrapper from '../assets/wrappers/SearchContainer'

//.............
//App..
//.............
const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
    statusOption
  }=UseAppContext()

  const handleSearch = (e)=>{
    if(isLoading) return;
    handleChange({name:e.target.name, value:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    clearFilters()
  }
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}
          <FormRow type='text' name='search' value={search} handleChange={handleSearch}></FormRow>
          {/* searchByStatus */}
          <FormRowSelect labelText='job status' name='searchStatus' value ={searchStatus} handleChange={handleSearch} list={['all',...statusOption]}></FormRowSelect>
          {/* searchByType */}
          <FormRowSelect labelText='job type' name='searchType' value={searchType} handleChange={handleSearch} list={['all',...jobTypeOptions]}></FormRowSelect>
          {/* sort */}
          <FormRowSelect name='sort' value={sort} handleChange={handleSearch} list={sortOptions}></FormRowSelect>
          {/* clearFilter */}
          <button className='btn btn-block btn-danger' disabled={isLoading} onClick={handleSubmit}>clear filters</button>
        </div>
      </form>
    </Wrapper>
  )
}

//.............
//exporting
//.............
export default SearchContainer
