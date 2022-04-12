export const RINKEBY_CHAIN_ID = 4
export const MUMBAI_CHAIN_ID = 80001
export const LOCALHOST_CHAIN_ID = 1337

export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string) || RINKEBY_CHAIN_ID
