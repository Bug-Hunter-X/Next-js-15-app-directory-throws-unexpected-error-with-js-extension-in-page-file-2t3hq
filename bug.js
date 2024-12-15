```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is some text.</p>
    </div>
  );
}
```
This code seems simple, but it can throw an unexpected error in Next.js 15 if you are using `app` directory and the file is named `page.js` instead of `page.jsx` or if it is in a different directory than `pages`. Next.js 15's new `app` directory uses a different file convention.