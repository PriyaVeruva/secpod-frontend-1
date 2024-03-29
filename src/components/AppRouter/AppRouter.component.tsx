import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'utils/routes.utils';

//pages
import LandingPage from '../../pages/LandingPage/LandingPage';
import ForgotPwd from '../../pages/ForgotPwd/ForgotPwd';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';

export default function AppRouter(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path={ROUTES.home} element={<LandingPage />} />
                <Route path={ROUTES.forgotPwd} element={<ForgotPwd />} />
                <Route path={ROUTES.login} element={<LoginPage />} />
                <Route path={ROUTES.signUp} element={<SignUpPage />} />
            </Routes>
        </>
    );
}
