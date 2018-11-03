export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
      //text: 'NEW'
    }
  },  
  {
    title: true,
    name: 'Main Menu'
  },
  {
    name: 'Bus',
    url: '/bus',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Bus',
        url: '/bus/bus',
        icon: 'icon-puzzle'
      },
      {
        name: 'Bus Type',
        url: '/bus/bus-type',
        icon: 'icon-puzzle'
      },
      {
        name: 'Bus Fleet',
        url: '/bus/bus-fleet',
        icon: 'icon-puzzle'
      },
      {
        name: 'Seat',
        url: '/bus/seat',
        icon: 'icon-puzzle'
      },
      {
        name: 'Agent',
        url: '/bus/agent',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Officer',
    url: '/officer',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Officer',
        url: '/officer/officer',
        icon: 'icon-cursor'
      },
      {
        name: 'Position',
        url: '/officer/position',
        icon: 'icon-cursor'
      },
    ]
  },
  {
    name: 'Customer',
    url: '/customer',
    icon: 'icon-star',
    children: [
      {
        name: 'Customer',
        url: '/customer/customer',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Passenger',
        url: '/customer/passenger',
        icon: 'icon-star'
      },
    ]
  },
  {
    name: 'Travel',
    url: '/travel',
    icon: 'icon-bell',
    children: [
      {
        name: 'Route',
        url: '/travel/route',
        icon: 'icon-bell'
      },
      {
        name: 'Schedule',
        url: '/travel/schedule',
        icon: 'icon-bell'
      },
    ]
  },
  {
    name: 'Promotion',
    url: '/promotion',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
      //text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Management'
  },
  {
    name: 'Transaction',
    url: '/transaction',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    },
    children: [
      {
        name: 'Transaction',
        url: '/transaction/transaction',
        icon: 'icon-bell'
      },
      {
        name: 'Payment Method',
        url: '/transaction/payment-method',
        icon: 'icon-bell'
      },
    ]
  },
  {
    name: 'Manage Account',
    url: '/manage-account',
    icon: 'icon-star',
    children: [
      {
        name: 'User',
        url: '/manage-account/user',
        icon: 'icon-star'
      },
      {
        name: 'Role',
        url: '/manage-account/role',
        icon: 'icon-star'
      },
      {
        name: 'User Role',
        url: '/manage-account/user-role',
        icon: 'icon-star'
      },
      {
        name: 'Social Accont',
        url: '/manage-account/social-account',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Report',
    url: '/report',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info'
      //text: 'NEW'
    }
  },
];
