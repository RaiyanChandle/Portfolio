import React from 'react';

export default function BackgroundGlows() {
  return (
    <>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
    </>
  );
}
