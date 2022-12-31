import { lazy } from "react";
import { Outlet } from "react-router-dom";
const WebsiteFooter = lazy(() => import("./Footer"));
const WebsiteHeader = lazy(() => import("./Header"));
const WebsiteLayout = () => {
	return (
		<>
			<WebsiteHeader />
			<Outlet />
			<WebsiteFooter />
		</>
	);
};

export default WebsiteLayout;
