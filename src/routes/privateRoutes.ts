import { lazy } from "react";
import { PRIVATE_ROUTES } from "./paths";

export const privateRoutes = [
	{
		path: PRIVATE_ROUTES.DASHBOARD,
		Component: lazy(() => import("@pages/Dashboard")),
	},
	{
		path: PRIVATE_ROUTES.NOTFOUND,
		Component: lazy(() => import("@pages/NotFound")),
	},
];
