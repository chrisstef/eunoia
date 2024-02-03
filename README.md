# Eunoia

Introducing Eunoia! A Next.js 14-based online collaborative tool tailored for efficient project management.

### Key Features:

-   Organizations / Workspaces
-   Board creation
-   Unsplash API for random beautiful cover images
-   Activity log for entire organization
-   Board rename and delete
-   List creation
-   List rename, delete, drag & drop reorder and copy
-   Card creation
-   Card description, rename, delete, drag & drop reorder and copy
-   Card activity log
-   Board limit for every organization
-   Stripe subscription for each organization to unlock unlimited boards

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
