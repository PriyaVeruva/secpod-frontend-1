import { IoPersonOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlineOfficeBuilding, HiOutlinePhone } from 'react-icons/hi';
export const FormFieldsData = [
    {
        placeholder: 'Name',
        name: 'name',
        type: 'text',
        icon: <IoPersonOutline />,
    },

    {
        placeholder: 'Role',
        name: 'role',
        type: 'text',
    },
    {
        placeholder: 'Mobile number',
        name: 'phoneNumber',
        type: 'string',
        icon: <HiOutlinePhone />,
    },
    {
        placeholder: 'E-mail',
        name: 'email',
        type: 'email',
        icon: <HiOutlineMail />,
    },
];

export const CompanyDetailsData = [
    {
        placeholder: 'CompanyName',
        name: 'companyName',
        type: 'text',
        icon: <HiOutlineOfficeBuilding />,
    },
    {
        placeholder: 'E-mail',
        name: 'companyEmail',
        type: 'email',
        icon: <HiOutlineMail />,
    },

    {
        placeholder: 'Location',
        name: 'companyLocation',
        type: 'text',
        icon: <HiOutlineLocationMarker />,
    },
    {
        placeholder: 'Mobile number',
        name: 'companyPhoneNumber',
        type: 'string',
        icon: <HiOutlinePhone />,
    },
];
