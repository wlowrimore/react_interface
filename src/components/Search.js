import React from 'react'
import { BiCaretDown, BiCheck, BiSearch } from 'react-icons/bi'

const DropDown = () => {
  return (
    <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
      <div
        className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between'
        role='menuitem'>Pet Name <BiCheck /></div>
        <div
        className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between'
        role='menuitem'>Owner Name <BiCheck /></div>
        <div
        className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between'
        role='menuitem'>Date <BiCheck /></div>
        <div
        className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between'
        role='menuitem'>Asc <BiCheck /></div>
        <div
        className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between'
        role='menuitem'>Desc <BiCheck /></div>
    </div>
  )
}

const Search = () => {
  return (
    <div className='py-5'>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
          <BiSearch />
          <label htmlFor='query' className='sr-only' />
        </div>
        <input type='text' name='query' id='query' value=''
                className='pl-8 h-8 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm'>
        </input>
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <div>
            <button type='button'
                    className='justify-center inline-flex px-2 py-1 rounded-sm bg-blue-400 border border-blue-400 text-sm text-white font-normal'>
                    Sort By <BiCaretDown className='ml-2' />
            </button>
            <DropDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search