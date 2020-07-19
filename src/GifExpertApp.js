import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Naruto']);
  //   setCategories(cats => [...cats, 'Naruto']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(cat => 
            <GifGrid key={cat} category={cat} />
          )
        }
      </ol>
    </>
  )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp
