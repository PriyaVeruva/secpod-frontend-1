export type carouselType = {
	image: string;
	largeText?: string;
	mediumText?: string;
	smallText?: string;
};

export type carouselMainDataType = {
	carouselData: carouselType[];
	singleCarousel: boolean;
	carouselStyles: boolean;
};
export type arrowDataType = {
	onClick?: () => void;
};
