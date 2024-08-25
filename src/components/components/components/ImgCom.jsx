import React from "react";

export default function ImgCom({ imgSrc, imgAlt = "" }) {
	return <img src={imgSrc} alt={imgAlt} loading="lazy" />;
}
