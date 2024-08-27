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
				I'm a full-stack developer with four years of experience in web
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
				<div className="icons">
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-line.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />

					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
				</div>
			</div>
		</section>
	);
}

export default Home;
