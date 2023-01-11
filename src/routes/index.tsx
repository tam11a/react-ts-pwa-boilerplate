import React, { Suspense, lazy } from "react";

// 3rd Party Modules
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import NProgressSuspense from "@components/NProgressSuspense";

// Layouts
const WebsiteLayout = lazy(() => import("@layouts/Website"));
const AppLayout = lazy(() => import("@layouts/App"));

const BaseRoutes: React.FC = () => {
	return (
		<Suspense fallback={<NProgressSuspense />}>
			<BrowserRouter>
				<Routes>
					<Route
						path={"app/*"}
						element={<AppLayout />}
					>
						{privateRoutes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<NProgressSuspense />}>
										<Component />
									</Suspense>
								}
							/>
						))}
					</Route>
					<Route
						path={"*"}
						element={<WebsiteLayout />}
					>
						{publicRoutes.map(({ path, Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<NProgressSuspense />}>
										<Component />
									</Suspense>
								}
							/>
						))}
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default BaseRoutes;
