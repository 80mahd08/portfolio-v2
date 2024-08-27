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
						<RespImg alt="Photo of me" src={me} />
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
					<div data-icon-top="Next.js logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
							alt="Next.js logo"
						/>
					</div>
					<div data-icon-top="JavaScript logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
							alt="JavaScript logo"
						/>
					</div>
					<div data-icon-top="WebAssembly logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg"
							alt="WebAssembly logo"
						/>
					</div>
					<div data-icon-top="C language logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-line.svg"
							alt="C language logo"
						/>
					</div>
					<div data-icon-top="Python language logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
							alt="Python language logo"
						/>
					</div>
					<div data-icon-top="React logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
							alt="React logo"
						/>
					</div>
					<div data-icon-top="Svelte logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
							alt="Svelte logo"
						/>
					</div>
					<div data-icon-top="CSS 3 logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
							alt="CSS 3 logo"
						/>
					</div>
					<div data-icon-top="SASS logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
							alt="SASS logo"
						/>
					</div>
					<div data-icon-top="HTML 5 logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
							alt="HTML 5 logo"
						/>
					</div>
					<div data-icon-top="PHP logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
							alt="PHP logo"
						/>
					</div>
					<div data-icon-top="TypeScript logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg"
							alt="TypeScript logo"
						/>
					</div>

					<div data-icon-top="Vite.js logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
							alt="Vite.js logo"
						/>
					</div>
					<div data-icon-top="GitHub logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
							alt="GitHub logo"
							style={{ filter: "invert(100%)" }}
						/>
					</div>
					<div data-icon-top="Git logo">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
							alt="Git logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
