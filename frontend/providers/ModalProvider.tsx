"use client"

import { useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal/AuthModal';
import { SubscribeModal } from '@/components/SubscribeModal/SubscribeModal';
import UploadModal from '@/components/UploadModal/UploadModal';
import { ProductWithPrice } from '@/types';

import React, { FC } from 'react'

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: FC<ModalProviderProps> = ({ 
    products
 }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {

    })
  return (
    <div>
     ModalProvider
    </div>
  )
}

export default ModalProvider;