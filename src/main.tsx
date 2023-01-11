import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

// Styles
import "@styles/tailwind.css";
import "nprogress/nprogress.css";
// import "antd/dist/reset.css";

import NProgressSuspense from "@components/NProgressSuspense";

const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// {/* <React.StrictMode> */}
	<Suspense fallback={<NProgressSuspense />}>
		<App />
	</Suspense>
	// {/* </React.StrictMode> */}
);
