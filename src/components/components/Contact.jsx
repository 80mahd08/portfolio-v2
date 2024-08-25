import { Container, mergeStyles, styles } from "fhf-react";
import React from "react";
import mailIcon from "../../assets/icons8-mail-30.webp";
import facebookIcon from "../../assets/icons8-facebook-30.webp";
import linkedinIcon from "../../assets/icons8-linkedin-30.webp";
import gitHubIcon from "../../assets/icons8-github-30.webp";
import instagramIcon from "../../assets/icons8-instagram-30.webp";

function Contact() {
	return (
		<section id="contact">
			<Container>
				<div className="subContainer">
					<h2>Contact</h2>
					<p>Feel free to contact me at any time using one of this links!</p>
					<div className="icons">
						<a target="__blank" href="mailto:mahdi.amari.2022@gmail.com">
							<img src={mailIcon} alt="mail icon" />
						</a>
						<a
							target="__blank"
							href="https://www.facebook.com/profile.php?id=100072125742302">
							<img src={facebookIcon} alt="facebook icon" />
						</a>
						<a target="__blank" href="https://www.linkedin.com/in/amari-mahdi/">
							<img src={linkedinIcon} alt="linkedin icon" />
						</a>
						<a target="__blank" href="https://github.com/80mahd08">
							<img src={gitHubIcon} alt="gitHub icon" />
						</a>
						<a target="__blank" href="https://www.instagram.com/amarimahdi06/">
							<img src={instagramIcon} alt="instagram icon" />
						</a>
					</div>
					<p style={(mergeStyles(styles), { fontStyle: "italic" })}>
						If you don't support Palestine 🇵🇸 , please refrain from contacting
						me.
					</p>
				</div>
			</Container>
		</section>
	);
}

export default Contact;
