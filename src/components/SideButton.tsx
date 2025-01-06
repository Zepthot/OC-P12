// import libraries
import React from 'react';

export default function SideButton({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
      <img src={src} alt={alt} />
    </div>
  );
}
