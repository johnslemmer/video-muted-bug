Reproduction repo for a bug I found in NextJS's Router Cache (I'm guessing).

Also deployed at https://video-muted-bug.vercel.app/ and ready to demonstrate.

Steps to recreate:

- Easily seen by loading the home page (you will see a video auto play and be muted)
- click the link to go to the about page
- click the link to come back to home page
  - the video will now be auto playing but also playing sound
  - if you check the elements in DevTools you will see the `muted` attribute no
    longer exists on the video element. Which feels like a Router Cache issue.

Code is pretty simple, the weird `innerHTML` set is done to show how not having
`muted` cached properly can lead to undesirable audio playing on, for all
intents and purposes, what was a muted video from the developer's perspective.
