# Design Decisions
This project is designed as a lightweight alternative client for browsing GitHub issues and discussions. It leverages Next.js for server-side rendering and static site generation.

## The project employs the following key features:
- **Reusable Components**: Components like SearchBox, User, CardList, DiscussionList, and IssueList follow a modular approach, enabling code reuse and improving readability.
- **Server-side Data Fetching**: Server-side functions such as getServerSideProps for preloading GitHub discussions and issues allow dynamic content to be rendered ahead of time. This approach enhances the user experience by displaying essential data immediately upon page load.
- **Error Handling**: Alerts and error messages are incorporated to provide feedback if data fetches fail or user inputs are invalid.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

