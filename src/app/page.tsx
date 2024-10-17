'use client';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  React.useEffect(() => {
    // NOTE: don't mind this oddness. This is just easiest way to fully realize
    // the issue with `muted` not being preserved by the Router Cache. (I'd
    // guess this has something to do with the browser renderer re-evaluating
    // the DOM once an innerHTML is set which then causes the video to play
    // un-muted because of the missing cached attribute.)
    // For anyone interested it was because we were doing an odd innerHTML set
    // in our codebase for weird animation reasons that I even found this Router
    // Cache mismatch.
    document.querySelector('main')!.innerHTML += '<span>foo</span>';
  }, []);

  return (
    <main className="flex flex-col gap-8 w-full items-center">
      <Link href="/about" className="text-blue-500 hover:underline">
        go to about page
      </Link>
      <h1>Home Page</h1>
      <video
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        autoPlay
        loop
        muted
      />
    </main>
  );
}
