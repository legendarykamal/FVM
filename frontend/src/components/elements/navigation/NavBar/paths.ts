import { ISubNav } from '../SubNav/SubNav';

const NAV_LINKS: ISubNav[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Transactions',
    href: '/transactions',
  },
  {
    label: 'Notifications',
    href: '/notifications',
    
  },
  {
    label: 'Balances',
    href: '/balances',
    children: [
      {
        label: 'ERC20',
        subLabel: 'Get your ERC20 balances',
        href: '/balances/erc20',
        logo: 'token',
      },
      {
        label: 'NFT',
        subLabel: 'Get your ERC721 an ERC1155 balances',
        href: '/balances/nft',
        logo: 'pack',
      },
    ],
  },
  {label: 'Miners', href: '/storageProviders'},
  {label: 'Proposal MarketPlace', href: '/proposalMarketPlace'}
];

export default NAV_LINKS;
