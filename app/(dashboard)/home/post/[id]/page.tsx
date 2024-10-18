'use client'

import Image from 'next/image';

import fetchPost from '@/components/home/post/data'; // Your data array
import { useParams } from 'next/navigation'; // Hook to get the dynamic route params
import React from 'react';
import Link from 'next/link';
import { FiHeart, FiSend } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';

function PostPage() {
  // Get the dynamic 'id' from the URL
  const { id } = useParams();

  // Find the post that matches the 'id' from the URL
  const post = fetchPost.find((p) => p.id === parseInt(id)); // Convert 'id' to number for comparison

  // If post not found, display an error message
  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='max-w-screen-xl m-auto px-[80px] pt-4 w-[700px]'>
      <Link href='/home' className=''>
        <div className='bg-[#181818] w-[40px] h-[40px] rounded-full flex flex-row justify-center items-center mb-10'>
          <Image src='/left.svg' alt='back' width={20} height={20} />
        </div>

      </Link>

      <div className='flex flex-row justify-between items-center gap-4 w-full'>
        <div className='w-[65%]'>
          <h1 className='text-3xl font-bold'>{post.title}</h1>
          <p className='mt-4 mb-5 opacity-70'>{post.content}</p>
        </div>
        <div>
          <div className='flex flex-row gap-1 justify-center items-center w-full'>
            <Image src={post.avatar} alt={post.title} width={40} height={40} className='rounded-full w-[24px] h-[24px]' />
            <span className='ml-2 text-sm text-white opacity-70'>Posted by {''}
              <br />
              <strong>
                <Link href={`/${post.id}`}>{post?.name}</Link>
              </strong>
            </span>
          </div>
        </div>
      </div>

      <div className='w-full mb-5'>
        <Image src={post.image} alt={post.title} width={100} height={400} className='w-full rounded-md' />
      </div>

      <div className='mb-3 flex justify-start items-center gap-2 opacity-70'>
        <FiHeart className='text-[20px] opacity-70' />
        <p>Liked by {''}
          <strong>You</strong> {''}
          and {''}
          <Link href={`/${post.id}`}><strong>{post?.name}</strong></Link>
        </p>
      </div>

      <div className='w-full h-[40px] flex flex-row items-center gap-2 mb-10'>
        <div className='flex w-full px-3 flex-row items-center justify-center h-full bg-[#0f0f0f] border-opacity-10 border border-[#fff] rounded-md'>
          <input type='text' placeholder='Reply to this post' className='bg-transparent w-full h-full placeholder:text-white placeholder:opacity-30 text-[14px] outline-none' />
          <BsEmojiSmile className='cursor-pointer text-[18px] opacity-70' />
        </div>
        <div className='h-[35px] w-[40px] flex flex-col items-center justify-center bg-white rounded-full'>
          <FiSend className='text-black cursor-pointer font-semibold' />
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-start items-center gap-3 h-full mb-5'>
          <h2 className='text-[16px] font-semibold'> Total comments</h2>
          <div className='w-6 h-6 bg-[#0f0f0f] rounded-md flex justify-center items-center text-[14px]'>{post.comments?.length}</div>
        </div>

        <hr className='mb-10 opacity-10' />


      </div>

      <div>
        {
          post?.comments?.map((d, i) => (
            <div key={i} className='mb-10'>
              <div>
                <Image src={d?.avatar} alt='avatar' width={40} height={40} className='mb-3 rounded-full' />
              </div>
              <div className='flex flex-col gap-2'>
                <Link href={`/${post.id}`} ><strong>{d.name}</strong></Link>
                <p className='opacity-70'>{d?.comment}</p>
                
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className='mb-10'>
        <div>
          <Image src={post.avatar} alt='avatar' width={40} height={40} className='mb-3 rounded-full'/>
        </div>
        <div className='flex flex-col gap-2'>
          <Link href={`/${post.id}`} ><strong>{post?.name}</strong></Link>
          <p className='opacity-70'>Here is my comment: {post.content}</p>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default PostPage;

