import { cardContainerData2 } from "../LandingPage/data";
import styles from "./Pricing.module.scss";
import FeaturesCardComponent from "../../components/common/Card/Features-card.component";
import { text } from "utils/text.utils";
function Pricing(): JSX.Element {
	return (
		<div className={styles.pricingContainer}>
			<h2 className={styles.pricingHeaderContent}>
				{text.landingPage.HEADER_CONTENT_3}
			</h2>
			<p className={styles.paragraphContent}>
				{text.landingPage.PARAGRAPH_CONTENT_3}
			</p>
			<div className={styles.cardContentSection}>
				{cardContainerData2.map((ele, i) => {
					return (
						<FeaturesCardComponent
							key={i}
							id={ele.id}
							heading={ele.heading}
							subHeading={ele.subHeading}
							featuresText={ele.featuresText}
							features={ele.features}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Pricing;
