import React from 'react'
import AllPost from './post/AllPost'
import fetchPost from './post/data'


function Feeds() {
  return (
    <div className=''>
       {
         fetchPost.map((post) => (
            <AllPost key={post.id} post={post} />
        ))
       }
    </div>
  )
}

export default Feeds
