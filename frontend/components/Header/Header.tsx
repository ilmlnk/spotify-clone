"use client";

import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "../Button/Button";
import usePlayer from "@/hooks/usePlayer/usePlayer";
import useAuthModal from "@/hooks/useAuthModal/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser/useUser";
import { toast } from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const player = usePlayer();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <div
      className={twMerge(`
    h-fit
    bg-gradient-to-b
    from-emerald-800
    p-6
    `)}
    >
      <div className="flex items-center justify-between w-full mb-4">
        <div className="items-center hidden md:flex gap-x-2">
          <button
            className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            className="flex items-center justify-center transition bg-black rounded-full hover:opacity-75"
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex items-center md:hidden gap-x-2">
          <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
            <HiHome className="text-black" size={20} />
          </button>
          <button className="flex items-center justify-center p-2 transition bg-white rounded-full hover:opacity-75">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <div>
            <Button
            onClick={authModal.onOpen}
            className='font-medium bg-transparent text-neutral-300'>Sign Up</Button>
          </div>
          <div>
            <Button 
            onClick={authModal.onOpen}
            className='px-6 py-2 bg-white'>Log In</Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
