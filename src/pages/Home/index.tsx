import { Button } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
	return (
		<div>
			Hello From Home!!{" "}
			<Button
				variant="contained"
				className="ml-5"
			>
				Hello!
			</Button>
		</div>
	);
};

export default Home;
