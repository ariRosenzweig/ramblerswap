import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Currency Swap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Stats',
    icon: 'ChartIcon',
    href: '/chart',
  },
  {
    label: 'Campus Organziations',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Clubs',
        href: 'https://luc.campuslabs.com/engage/organizations',
      },
    ],
  },
  {
    label: 'Campus Services',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Food and Transportation',
        href: 'https://luc.campusdish.com/LocationsAndMenus',
      },
      {
        label: 'Printing',
        href: 'http://libraries.luc.edu/printing'
      }
    ],
  },
  {
    label: 'Community Voting',
    icon: 'ListingIcon',
    items: [
      {
        label: 'Vote',
        href: 'https://www.luc.edu',
      }
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Roadmap',
        href: 'https://www.luc.edu',
      },
      {
        label: 'Overview',
        href: 'https://pancakeswap.info/token/0x3d05B51f98Bb6ba5B762939995A1e537417F5983',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ariRosenzweig/ramblerswap',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      {
        label: 'Blog',
        href: 'https://ramblerswap.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
