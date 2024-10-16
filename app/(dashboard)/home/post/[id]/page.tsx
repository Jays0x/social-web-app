'use client'

import Image from 'next/image';

import fetchPost from '@/components/home/post/data'; // Your data array
import { useParams } from 'next/navigation'; // Hook to get the dynamic route params
import React from 'react';
import Link from 'next/link';

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
    <div className='max-w-screen-xl m-auto px-[80px] pt-4'>
        <Link href='/home' className=''>
            <div className='bg-[#181818] w-[40px] h-[40px] rounded-full flex flex-row justify-center items-center mb-10'>
                <Image src='/left.svg' alt='back' width={20} height={20}/>
            </div>

        </Link>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='mt-4'>{post.content}</p>
      <div className='w-full'>
            <Image src={post.image} alt={post.title} width={100} height={400} className='w-full'/>
      </div>
    </div>
  );
}

export default PostPage;

