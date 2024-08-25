import React from "react";
import ImgCom from "./ImgCom";

function FlexItemComp({ imgALt, aUrl, imgUrl, h3Content }) {
	const h3Styles = {
		fontSize: "clamp(.5rem, 5vw, 1.4rem)",
	};

	return (
		<a target="__blank" href={aUrl} className="flexItem">
			<ImgCom imgSrc={imgUrl} imgAlt={imgALt} />
			<div className="flexItemContent">
				<div className="text">
					<span>Click Here To Visit</span>
					<h3 style={h3Styles}>{h3Content}</h3>
				</div>
				<div className="icon">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0.770577 1.60785C0.770756 1.33366 0.884719 1.07075 1.08744 0.876871C1.29015 0.682991 1.56505 0.573995 1.85173 0.573824L10.5214 0.573825C10.808 0.573996 11.0829 0.682992 11.2857 0.876873C11.4884 1.07075 11.6023 1.33366 11.6025 1.60785L11.6025 9.89958C11.5925 10.1675 11.4742 10.4213 11.2726 10.6076C11.071 10.7939 10.8017 10.8981 10.5214 10.8985C10.241 10.8981 9.97176 10.7939 9.77014 10.6076C9.56852 10.4213 9.45026 10.1675 9.44021 9.89958L9.44021 4.10512L1.85173 11.3628C1.64885 11.5569 1.37368 11.6659 1.08676 11.6659C0.799846 11.6659 0.524678 11.5569 0.321797 11.3628C0.118914 11.1688 0.00493742 10.9056 0.00493742 10.6312C0.00493707 10.3568 0.118914 10.0936 0.321796 9.89958L7.91027 2.64188L1.85173 2.64188C1.56505 2.64171 1.29015 2.53271 1.08744 2.33883C0.88472 2.14495 0.770756 1.88204 0.770577 1.60785Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</a>
	);
}

export default FlexItemComp;
