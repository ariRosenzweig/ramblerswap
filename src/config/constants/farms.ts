import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Rambler-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x61a8d40d374fcb30841ad472751fb6bb19e5a844',
    },
    tokenSymbol: 'Rambler',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Rambler-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x573063c62b6fa86e60fa275ba0d24fdddf820353',
    },
    tokenSymbol: 'Rambler',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    risk: 3,
    lpSymbol: 'Rambler-BIFI LP',
    lpAddresses: {
      97: '',
      56: '0x4c132Eea7a2333D00d663Bf2127B87D0EF306397',
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'Rambler-WHIRL LP',
    lpAddresses: {
      97: '',
      56: '0x60468BEFC260534B962B8A2a2F7cF84f16789965',
    },
    tokenSymbol: 'Rambler',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 3,
    lpSymbol: 'WHIRL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3557af1c6b0b34767f5ad7fc2b16378f3a4f5dd5',
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'FSXU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4fe89ac612ee309fa9dec1f501495eea44449924',
    },
    tokenSymbol: 'FSXU',
    tokenAddresses: {
      97: '',
      56: '0xa94b7a842aadb617a0b08fa744e033c6de2f7595',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    risk: 3,
    lpSymbol: 'Rambler-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x199C917CB3daf0e74cD9466d02b8Bcc1aA03f755',
    },
    tokenSymbol: 'Rambler',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  // {
  //   pid: 9,
  //   risk: 5,
  //   lpSymbol: 'Rambler-ETH LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe29f7B147058b29A5e177C0A4EcB56e124eaBbF4',
  //   },
  //   tokenSymbol: 'Rambler',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
  //   },
  //   quoteTokenSymbol: QuoteToken.ETH,
  //   quoteTokenAdresses: contracts.eth,
  // },
  // {
  //   pid: 3,
  //   risk: 1,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Rambler',
    lpAddresses: {
      97: '',
      56: '0x61a8d40d374fcb30841ad472751fb6bb19e5a844', // Rambler-BUSD LP
    },
    tokenSymbol: 'Rambler',
    tokenAddresses: {
      97: '',
      56: '0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x61a8d40d374fcb30841ad472751fb6bb19e5a844', // Rambler-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WHIRL',
    lpAddresses: {
      97: '',
      56: '0x819e546B2b269b99d52d26Ffdd9D852E6cd6b448', // WHIRL-BUSD LP
    },
    tokenSymbol: 'WHIRL',
    tokenAddresses: {
      97: '',
      56: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61a8d40d374fcb30841ad472751fb6bb19e5a844', // Rambler-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
