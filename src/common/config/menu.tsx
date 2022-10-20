import CubeIcon from '@/assets/icons/cube.svg';
import GlobeAltIcon from '@/assets/icons/globe-alt.svg';
import HomeIcon from '@/assets/icons/home.svg';
import TruckIcon from '@/assets/icons/truck.svg';
import UsersIcon from '@/assets/icons/users.svg';

const Menu = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon />,
    exact: true
  },
  {
    title: 'Commodities',
    href: '/commodities',
    icon: <CubeIcon />
  },
  {
    title: 'Harvests',
    href: '/harvests',
    icon: <TruckIcon />
  },
  {
    title: 'Growers',
    href: '/growers',
    icon: <GlobeAltIcon />
  },
  {
    title: 'Clients',
    href: '/clients',
    icon: <UsersIcon />
  }
];

export default Menu;
