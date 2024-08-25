import { mergeStyles, styles } from "fhf-react";
import React from "react";
import pricingProjectIcon from "/pricing-proj.webp";
import sunnySideProjIcon from "/sunnyside-proj.webp";
import FlexItemComp from "./components/FlexItemComp";
import socialProofSectionIcon from "/Social-proof-section-proj.webp";
import meetProjIcon from "/meet-proj.webp";
import fhfReact from "/fhf-react.webp";
import imgNotFound from "/image-not-found.webp";
import fhfAgri from "/fhf-agri-fin.webp";

export const projectList = [
	{
		aUrl: "https://pricing-proj.web.app",
		imgUrl: pricingProjectIcon,
		h3Content: "Flexible Pricing Plans",
		imgAlt: "Screenshot of the flexible pricing plans project",
	},
	{
		aUrl: "https://sunnyside-proj.web.app",
		imgUrl: sunnySideProjIcon,
		h3Content: "Sunnyside Agency Landing Page",
		imgAlt: "Image of the Sunnyside agency landing page project",
	},
	{
		aUrl: "https://social-proof-section-1.web.app",
		imgUrl: socialProofSectionIcon,
		h3Content: "Social Proof Section",
		imgAlt: "Preview of the social proof section project",
	},
	{
		aUrl: "https://meet-proj.web.app",
		imgUrl: meetProjIcon,
		h3Content: "Meet Landing Page",
		imgAlt: "Snapshot of the Meet landing page project",
	},
	{
		aUrl: "https://fhf-agri.web.app/",
		imgUrl: fhfAgri,
		h3Content: "FHF-Agri Website",
		imgAlt: "Overview of the FHF-Agri website",
	},
	{
		aUrl: "https://www.npmjs.com/package/fhf-react",
		imgUrl: fhfReact,
		h3Content: "FHF-React NPM Package",
		imgAlt: "Thumbnail for the FHF-React NPM package",
	},
	{
		aUrl: "https://www.npmjs.com/package/fhf-linkedlist",
		imgUrl: imgNotFound,
		h3Content: "FHF-LinkedList NPM Package",
		imgAlt: "Placeholder image for the FHF-LinkedList NPM package",
	},
	{
		aUrl: "https://www.npmjs.com/package/fhf",
		imgUrl: imgNotFound,
		h3Content: "FHF NPM Package",
		imgAlt: "Placeholder image for the FHF NPM package",
	},
];

function Projects() {
	return (
		<section id="projects">
			<h2
				style={mergeStyles(
					{
						fontSize: "clamp(1.5rem, 5vw, 3rem)",
					},
					styles.marginTop(0),
					styles.textCenter
				)}>
				Projects
			</h2>
			<div className="flexContainer">
				{projectList.map((project, index) => (
					<FlexItemComp
						key={index}
						aUrl={project.aUrl}
						imgUrl={project.imgUrl}
						h3Content={project.h3Content}
						imgALt={project.imgAlt}
					/>
				))}
			</div>
		</section>
	);
}

export default Projects;
