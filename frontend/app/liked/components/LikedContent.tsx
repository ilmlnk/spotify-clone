"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Song } from "@/types";
import { useUser } from "@/hooks/useUser/useUser";
import MediaItem from "@/components/MediaItem/MediaItem";
import LikeButton from "@/components/LikeButton/LikeButton";
import useOnPlay from "@/hooks/useOnPlay/useOnPlay";

interface LikedContentProps {
  songs: Song[];
};

const LikedContent: React.FC<LikedContentProps> = ({
  songs
}) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div 
        className="flex flex-col w-full px-6 gap-y-2 text-neutral-400"
      >
        No liked songs.
      </div>
    )
  }
  return ( 
    <div className="flex flex-col w-full p-6 gap-y-2">
      {songs.map((song: any) => (
        <div 
          key={song.id} 
          className="flex items-center w-full gap-x-4"
        >
          <div className="flex-1">
            <MediaItem onClick={(id) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}
 
export default LikedContent;