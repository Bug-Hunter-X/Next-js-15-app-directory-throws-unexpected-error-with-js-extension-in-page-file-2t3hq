# Next.js 15 app directory unexpected error with js extension
This repository demonstrates a subtle issue in Next.js 15's `app` directory. When using a `.js` extension for a page component instead of `.jsx`, you might encounter an unexpected error. The error message may not be descriptive enough to point out the file extension as the cause. 

## Bug Report
The issue occurs when the filename is `page.js` in the `pages` directory (or the equivalent in a nested route).  Next.js expects a `.jsx` extension in the `app` directory for JSX components. 

## Solution
The solution is simple: rename the file to use the `.jsx` extension.  This ensures Next.js correctly interprets the file as a React component.