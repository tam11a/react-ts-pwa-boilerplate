import React, { Suspense, lazy } from "react";
const BaseRoutes = lazy(() => import("./routes"));

const App: React.FC = () => {
	return (
		<>
			<Suspense fallback={"loading..."}>
				<BaseRoutes />
			</Suspense>
		</>
	);
};

export default App;
