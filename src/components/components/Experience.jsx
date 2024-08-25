import { Container } from "fhf-react";
import React, { useState } from "react";
import Expe from "./components/Expe";
import cpgIcon from "../../assets/CPG_logo.webp";

function Experience() {
	const [expNumber, setExpNumber] = useState(0);
	return (
		<section id="experience">
			<Container>
				<Expe
					expNumber={expNumber}
					setExpNumber={setExpNumber}
					iconUrl={cpgIcon}
					jobTitle="intern fullstack developer"
					fromWhat="jan 2023"
					toWhat="fev 2023"
					jobDescription={
						"My CPG internship wasn't just a job; it was a crash course in consumer goods. I witnessed the fascinating journey of products, from spotting trends to seeing them on shelves.  This hands-on experience exposed me to various departments, ignited my passion for the industry, and equipped me with valuable skills to launch a successful CPG intern career."
					}
				/>
			</Container>
		</section>
	);
}

export default Experience;
