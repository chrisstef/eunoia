# Eunoia

Introducing Eunoia! A Next.js 14-based online collaborative tool tailored for efficient project management.

### Key Features:

-   [x] Organizations / Workspaces
-   [x] Board creation
-   [x] Unsplash API for random cover images
-   [x] Activity log for entire organization
-   [x] Board rename and delete
-   [x] List creation
-   [x] List rename, delete, drag & drop reorder and copy
-   [x] Card creation
-   [x] Card description, rename, delete, drag & drop reorder and copy
-   [x] Card activity log
-   [x] Board limit for every organization
-   [x] Stripe subscription for each organization to unlock unlimited boards

### Tech Stack

-   Next.js 14
-   Server Actions
-   React
-   Prisma
-   Stripe
-   Tailwind
-   MySQL

### Prerequisites

-   **Node version 18.x.x**

-   **npm/yarn**

### Cloning the repository

```shell
git clone https://github.com/chrisstef/eunoia.git
```

### Install packages

```shell
npm i
```

or

```shell
yarn
```

### Setup `.env` file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

or

```shell
yarn dev
```
