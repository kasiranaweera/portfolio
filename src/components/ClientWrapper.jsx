"use client";

import React from 'react';

// A thin client wrapper to host interactive children that depend on browser APIs.
export default function ClientWrapper({ children }) {
  return <>{children}</>;
}
