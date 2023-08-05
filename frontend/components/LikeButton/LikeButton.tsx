"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import useAuthModal from "@/hooks/useAuthModal";


import React, { FC } from 'react'

interface LikeButtonProps {
  songId: string;
}

const LikeButton: FC<LikeButtonProps> = ({ 
    songId
 }) => {
    const router = useRouter();
    const {
        supabaseClient
    } = useSessionContext();
    const authModal = useAuthModal();

    const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div>
     LikeButton
    </div>
  )
}

export default LikeButton;