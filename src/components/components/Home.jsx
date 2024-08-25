import me from "/my1.webp";

import {
	Circle,
	RespImg,
	RespP,
	TypingAnimationElement,
	mergeStyles,
	styles,
} from "fhf-react";
import myCv from "../../assets/my cv.pdf";
function Home() {
	return (
		<section
			id="home"
			style={mergeStyles(
				styles.flexCenter,
				styles.respPadding(50, 70),
				styles.textCenter,
				{
					flexDirection: "column",
				}
			)}>
			<div className="center">
				<Circle
					className="homePhoto"
					style={mergeStyles(
						{
							width: "clamp(150px, 40vw, 300px)",
							height: "clamp(150px, 40vw, 300px)",
						},
						styles.overflowHidden,
						styles.flexCenter,
						{
							margin: "0 auto",
						}
					)}>
					<Circle
						style={mergeStyles(
							{ width: "97%", height: "97%" },
							styles.overflowHidden,
							{
								margin: "0 auto",
							}
						)}>
						<RespImg alt="me" src={me} />
					</Circle>
				</Circle>
			</div>
			<h1
				style={mergeStyles(
					styles.fitContentW,
					styles.respPaddingLeft(50, 300),
					styles.respPaddingRight(50, 300),
					{
						fontSize: "clamp(1.5rem, 5vw, 3rem)",
					}
				)}>
				Hi, I'm
				<br />
				<TypingAnimationElement cursorColor="#9a33ff" speed={5} text="Mahdi" />
			</h1>
			<RespP>
				I'm a junior full-stack developer with four years of experience in web
				development. Proficient in Next.js, React, TypeScript, Svelte,
				JavaScript, CSS, Sass, node js , express js, and HTML, with exposure to
				C and Python. Passionate about learning and contributing to innovative
				projects, I focus on creating intuitive user experiences and efficient
				backend solutions. innovative projects.
			</RespP>
			<div className="btn">
				<a href={myCv} download={"MahdiResume.pdf"}>
					Download Resume
				</a>
			</div>
			<div className="experiences">
				<h2>experience with</h2>
				<div className="svgs">
					<i class="devicon-react-original"></i>
					<i class="devicon-nextjs-plain"></i>
					<i class="devicon-svelte-plain"></i>
					<i class="devicon-typescript-plain"></i>
					<i class="devicon-javascript-plain"></i>
					<i class="devicon-c-plain"></i>
					<i class="devicon-python-plain"></i>
					<i class="devicon-sass-original"></i>
					<i class="devicon-css3-plain"></i>
					<i class="devicon-html5-plain"></i>
					<i class="devicon-nodejs-plain"></i>
					<i class="devicon-threejs-original"></i>
					<i class="devicon-express-original"></i>
					<i class="devicon-mysql-original"></i>
				</div>
			</div>
		</section>
	);
}

export default Home;
