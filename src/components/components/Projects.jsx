import { mergeStyles, styles } from "fhf-react";
import React from "react";
import pricingProjectIcon from "/pricing-proj.jpg";
import sunnySideProjIcon from "/sunnyside-proj.png";
import FlexItemComp from "./components/FlexItemComp";
import socialProofSectionIcon from "/Social-proof-section-proj.png";
import meetProjIcon from "/meet-proj.png";
import fhfReact from "/fhf-react.png";
import imgNotFound from "/image-not-found.png";
import fhfAgri from "/fhf-agri-fin.png";

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
				<FlexItemComp
					aUrl={"https://pricing-proj.web.app"}
					imgUrl={pricingProjectIcon}
					h3Content={"pricing project"}
				/>
				<FlexItemComp
					aUrl={"https://sunnyside-proj.web.app"}
					imgUrl={sunnySideProjIcon}
					h3Content={"sunnyside project"}
				/>
				<FlexItemComp
					aUrl={"https://social-proof-section-1.web.app"}
					imgUrl={socialProofSectionIcon}
					h3Content={"social proof section"}
				/>
				<FlexItemComp
					aUrl={"https://meet-proj.web.app"}
					imgUrl={meetProjIcon}
					h3Content={"Meet project"}
				/>
				<FlexItemComp
					aUrl={"https://fhf-agri.web.app/"}
					imgUrl={fhfAgri}
					h3Content={"fhf-agri web page"}
				/>
				<FlexItemComp
					aUrl={"https://www.npmjs.com/package/fhf-react"}
					imgUrl={fhfReact}
					h3Content={"npm package called fhf-react"}
				/>
				<FlexItemComp
					aUrl={"https://www.npmjs.com/package/fhf-linkedlist"}
					imgUrl={imgNotFound}
					h3Content={"npm package called fhf-linkedlist"}
				/>
				<FlexItemComp
					aUrl={"https://www.npmjs.com/package/fhf"}
					imgUrl={imgNotFound}
					h3Content={"npm package called fhf"}
				/>
			</div>
		</section>
	);
}

export default Projects;
