import { lazy } from "react";
import { Outlet } from "react-router-dom";
const AppFooter = lazy(() => import("./Footer"));
const AppHeader = lazy(() => import("./Header"));
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
