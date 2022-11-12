import React from 'react'
import { BiCaretDown, BiSearch } from 'react-icons/bi'

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
                    className='justify-center flex px-4 py-1 rounded-sm bg-blue-400 border pl-2 border-blue-400 text-sm text-white'>
                    Sort By <BiCaretDown className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search