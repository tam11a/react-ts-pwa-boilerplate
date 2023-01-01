import React, { Suspense, lazy } from "react";
const BaseRoutes = lazy(() => import("./routes"));

import theme from "@styles/theme";
import ThemeProvider from "@mui/system/ThemeProvider";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Suspense fallback={"loading..."}>
				<BaseRoutes />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
