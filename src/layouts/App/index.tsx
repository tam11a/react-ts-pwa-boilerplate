import { lazy } from "react";
import { Outlet } from "react-router-dom";
const AppHeader = lazy(() => import("./Header"));
const AppFooter = lazy(() => import("./Footer"));
const AppLayout = () => {
	return (
		<>
			<AppHeader />
			<Outlet />
			<AppFooter />
		</>
	);
};

export default AppLayout;
