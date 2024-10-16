'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Feeds from '@/components/home/Feeds';
import Following from '@/components/home/following/Following';

function page() {
 
  const [ isFeed, setIsFeed ] = useState(true);
  const [ isFollowing, setIsFollowing ] = useState(false);

  const handleFeedToggle = () => {
    setIsFeed(true);
    setIsFollowing(false);
  }

  const handleFollowingToggle = () => {
    setIsFollowing(true);
    setIsFeed(false);
  }

  return (
    <div className=' max-w-screen-xl  m-auto px-[80px] w-[650px] pt-4 overflow-y-hidden'>

    <div className='flex flex-row gap-3 mb-[30px] '>
      <button onClick={handleFeedToggle} className={`hover:bg-[#181818] px-3 py-1 rounded-md ${ isFeed ? "bg-[#181818]" : ""}`}>For you</button>
      <button onClick={handleFollowingToggle} className={`hover:bg-[#181818] px-3 py-2 rounded-md ${ isFollowing ? "bg-[#181818]" : ""}`}>Following</button>
    </div>

    {
        isFeed && <Feeds />
      }

      {
        isFollowing && <Following />
      }
     
    </div>


  )
}

export default page;
