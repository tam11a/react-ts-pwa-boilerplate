import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const AppHeader = lazy(() => import("./Header"));
const AppFooter = lazy(() => import("./Footer"));

const AppLayout: React.FC = () => {
	return (
		<>
			<AppHeader />
			<Outlet />
			<AppFooter />
		</>
	);
};

export default AppLayout;
