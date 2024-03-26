This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-wagmi`](https://github.com/wevm/wagmi/tree/main/packages/create-wagmi).
Before running, set up your project ID on walletconnect and set the next environment variable:
```bash
NEXT_PUBLIC_WC_PROJECT_ID=your-project-id
```
Then, run the development server:
```bash
yarn dev
```
Incomplete tasks:
- I managed to figure out how to use wagami's sendTransaction, but I couldn't figure out how to send the fake token. I tried using writeContract, but did not succeed within the allocated time.
