// type PropType = {
//     superadmin: string;
//     admin: string;
//     orgAdmin: string;
//     user: string;
// };
// const roleEnum: PropType = {
//     superadmin: '1',
//     admin: '2',
//     orgAdmin: '3',
//     user: '4',
// };

// const params = new URLSearchParams();
// params.append('id', roleEnum.superadmin);

const endpoints = {
    signup: '/sanernow/api/users/signup',
    login: '/sanernow/api/users/signin',
};

export default endpoints;
