import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsEmojiSmile } from "react-icons/bs";
import { FiHeart, FiSend } from "react-icons/fi";
import { FaHeart } from 'react-icons/fa';


function AllPost({ post }) {

  

  return (
    <div className='rounded-md'>

      <Link href={`/home/post/${post.id}`} className='w-full'>
        <div className='w-full'>
            <Image src={post.image} alt={post.title} width={100} height={400} className='w-full rounded-t-md'/>
        </div>
      </Link>

      
        <div className='bg-[#181818] px-5 py-5 w-full mb-5 rounded-b-md'>

          <div className='flex flex-row gap-1 justify-center items-center'>
            <Link href={`/home/post/${post.id}`} className='w-full'>
              <h1 className='text-[18px] font-semibold mb-2'>{post.title}</h1>
              <p className='mb-4 opacity-70 font-normal line-clamp-2'>{post.content}</p>
            </Link>
            <div className='flex flex-row gap-1 w-[80%] justify-center items-center'>
              <Image src={post.avatar} alt={post.title} width={40} height={40} className='rounded-full w-[24px] h-[24px]'/>
              <span className='ml-2 text-sm text-white opacity-70'>Posted by {''}
                <br />
                <strong>
                  <Link href={`/${post.id}`}>{post?.name}</Link>
                </strong>
              </span>
            </div>
          </div>

          <div className='mb-3 flex justify-start items-center gap-2 opacity-70'>
            <FiHeart  className='text-[20px] opacity-70'/>
            <p>Liked by {''}
              <strong>You</strong> {''}
              and {''}
              <Link href={`/${post.id}`}><strong>{post?.name}</strong></Link>
            </p>
          </div>

        <div className='w-full h-[40px] flex flex-row items-center gap-2'>
          <div className='flex w-full px-3 flex-row items-center justify-center h-full bg-[#0f0f0f] border-opacity-10 border border-[#fff] rounded-md'>
           <input type='text' placeholder='Reply to this post' className='bg-transparent w-full h-full placeholder:text-white placeholder:opacity-30 text-[14px] outline-none'/>
           <BsEmojiSmile className='cursor-pointer text-[18px] opacity-70'/>
          </div>
          <div className='h-[35px] w-[40px] flex flex-col items-center justify-center bg-white rounded-full'>
            <FiSend className='text-black cursor-pointer font-semibold'/>
          </div>
        </div>
      </div>


      
    

    </div>
  )
}

export default AllPost
