import { Routes, Route } from 'react-router-dom';
import { ROUTES } from 'utils/routes.utils';

//pages
import LandingPage from '../../pages/LandingPage/LandingPage';
import ForgotPwd from '../../pages/ForgotPwd/ForgotPwd';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import ChangePwd from 'pages/ChangePwd/ChangePwd';
import RedirectPage from 'pages/RedirectPage/RedirectPage';
import ProductSelection from 'pages/ProductSelection/ProductSelection';
import PlanSelectionPage from 'pages/PlanSelection';

export default function AppRouter(): JSX.Element {
    return (
        <>
            <Routes>
                <Route path={ROUTES.home} element={<LandingPage />} />
                <Route path={ROUTES.forgotPwd} element={<ForgotPwd />} />
                <Route path={ROUTES.changePwd} element={<ChangePwd />} />
                <Route path={ROUTES.login} element={<LoginPage />} />
                <Route path={ROUTES.signUp} element={<SignUpPage />} />
                <Route path={ROUTES.redirect} element={<RedirectPage />} />
                <Route path={ROUTES.productSelection} element={<ProductSelection />} />
                <Route path={ROUTES.planSelection} element={<PlanSelectionPage />} />
            </Routes>
        </>
    );
}
