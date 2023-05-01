import CarouselComponent from "../../components/common/CarouselComponent/Carousel.component";
import { carouselDataContent2 } from "../LandingPage/data";
import styles from "./Features.module.scss";
import { text } from "utils/text.utils";
function Features(): JSX.Element {
	return (
		<div className={styles.featuresContainer} id="features">
			<div className={styles.featuresContentSection}>
				<h2 className={styles.featuresHeader}>
					{text.landingPage.HEADER_CONTENT_2}
				</h2>

				<p className={styles.featuresParagraph}>
					{text.landingPage.PARAGRAPH_CONTENT_2}
				</p>
			</div>

			<div className={styles.carouselSlider}>
				<CarouselComponent
					singleCarousel={true}
					carouselData={carouselDataContent2}
					carouselStyles={false}
				/>
			</div>
		</div>
	);
}

export default Features;
