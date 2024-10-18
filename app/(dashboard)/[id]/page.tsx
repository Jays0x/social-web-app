'use client'
import fetchPost from '@/components/home/post/data';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function Page() {
  const { id } = useParams();
  const user = fetchPost.find((p) => p.id === parseInt(id));

  const [isFollowing, setIsFollowing] = useState<boolean>(true);

  // Check local storage for follow status on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem(`isFollowing-${user?.id}`);
    if (savedStatus !== null) {
      setIsFollowing(JSON.parse(savedStatus));
    }
  }, [user?.id]);

  // Update local storage whenever follow status changes
  const handleFollowClick = () => {
    setIsFollowing(true);
    localStorage.setItem(`isFollowing-${user?.id}`, 'true');
  };

  const handleUnfollowClick = () => {
    setIsFollowing(false);
    localStorage.setItem(`isFollowing-${user?.id}`, 'false');
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="ml-[450px] mt-[50px] flex flex-row justify-between items-center w-[500px]">
      <div className="flex flex-row justify-start items-center gap-4">
        <Image src={user.avatar} alt={user.name} width={80} height={80} className="rounded-full" />
        <div>
          <h1 className="text-xl font-semibold">{user.name}</h1>
          <p className="opacity-70">{user.bio}</p>
        </div>
      </div>

      <div>
        {isFollowing ? (
          <button className="bg-transparent text-red-500 border border-white border-opacity-10 py-2 px-4 rounded-md font-medium" onClick={handleUnfollowClick}>
            Unfollow
          </button>
        ) : (
          <button className="bg-white text-black py-2 px-4 rounded-md font-medium" onClick={handleFollowClick}>
            Follow
          </button>
        )}
      </div>
    </div>
  );
}

export default Page;
