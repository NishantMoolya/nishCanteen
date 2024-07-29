const availableLinks = [
    {label:"home",route:'/'},
    {label:"menu",route:'/menu'},
    {label:"dashboard",route:'/dashboard/overview'},
    {label:"orders",route:'/orders'},
    {label:"scan",route:'/scan'},
    {label:"profile",route:'/profile'},
    {label:"coins",route:'/coins'},
];

const roleAccessConfig = {
    admin: availableLinks.map(link => link.route),
    staff: ['/', '/menu', '/profile', '/orders','/scan','/coins'],
    user: ['/', '/menu', '/profile','/coins'],
  };

  const getRoleBasedLinks = (role) => {
    const allowedRoutes = roleAccessConfig[role] || [];
    return availableLinks.filter(link => allowedRoutes.includes(link.route));
  };

  export { getRoleBasedLinks };