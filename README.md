# Kastyum Gold Storefront
![App Preview](https://imgix.cosmicjs.com/005ede70-29db-11f1-80f3-d192c421c2e6-photo-1503602642458-232111445657-1774615600578.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Next.js 16 storefront that showcases suits, collections, reviews, and CMS-driven pages using your existing Cosmic content.

## Features
- Dynamic product and collection pages
- Product detail pages with reviews and size availability
- Template-driven CMS pages (Login, Cart, Info)
- High-resolution imgix imagery
- Fully responsive Tailwind UI
- Built-in “Built with Cosmic” badge

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69c67b69f9808e52fa7d70da&clone_repository=69c67d55f9808e52fa7d7130)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews, login page, busket, sections,  that sells suits and other type of closes."

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed on your machine

### Installation
```bash
// terminal
bun install
```

```bash
// terminal
bun run dev
```

## Cosmic SDK Examples
```typescript
// lib/cosmic.ts
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})
```

## Cosmic CMS Integration
This app reads Products, Collections, Reviews, and Pages directly from your Cosmic bucket using the server-side SDK. It respects object relationships, template-driven page rendering, and image optimization via imgix.

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify (static export if needed)
- Any Node-compatible hosting with environment variables configured

<!-- README_END -->