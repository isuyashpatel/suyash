'use client';
import React from 'react';
import Index from './component';
import { RecoilRoot } from 'recoil';

export default function Home() {

  return (
    <RecoilRoot>
      <Index />
    </RecoilRoot>
  );
}
