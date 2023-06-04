import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
export type PropsType = { children: JSX.Element };

export const NavEleData = [
    {
        name: 'Overview',
        path: '/admin/overview',
        subRoutes: [''],
    },
    {
        name: 'Account',
        path: '/admin/user-details',
        subRoutes: ['/admin/user-details'],
    },
    {
        name: 'Plan & Payment',
        path: '/admin/plan-payment',
        subRoutes: ['/admin/plan-payment'],
    },
];

export const SideNavEleData = {
    Account: [
        { name: 'User Data', path: '/admin/user-details', icon: <AccountCircleOutlinedIcon /> },
        { name: 'Profile Details', path: '/admin/profile-details', icon: <ApartmentOutlinedIcon /> },
    ],
};

export type SideNavEleDataType = {
    Account: { name: string; path: string; icon: JSX.Element }[];
};
