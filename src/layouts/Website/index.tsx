import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteFooter = lazy(() => import("./Footer"));

const WebsiteLayout: React.FC = () => {
	return (
		<>
			<WebsiteHeader />
			<Outlet />
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
