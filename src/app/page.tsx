'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    document.getElementById('foo')!.innerHTML += '<span>foo</span>';
  }, []);

  return (
    <main className="flex flex-col gap-8 w-full items-center">
      <Link href="/about" className="text-blue-500 hover:underline">
        go to about page
      </Link>
      <h1>Home Page</h1>
      <div id="foo">
        <video
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          autoPlay
          loop
          muted
        />
      </div>
    </main>
  );
}
