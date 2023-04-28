import CarouselComponent from '../../components/common/CarouselComponent/Carousel.component';
import { carouselDataContent2 } from '../LandingPage/data';
import styles from '../LandingPage/LandingPage.module.scss';
import { text } from 'utils/text.utils';
function Features(): JSX.Element {
    return (
        <div className={styles.bodyContent2} id="features">
            <div className={styles.bodyContentSection2}>
                <div className={styles.headerContent3}>{text.landingPage.HEADER_CONTENT_2}</div>

                <div className={styles.paragraphContent}>{text.landingPage.PARAGRAPH_CONTENT_2}</div>
            </div>

            <div className={styles.carouselSlider}>
                <CarouselComponent singleCarousel={true} carouselData={carouselDataContent2} carouselStyles={false} />
            </div>
        </div>
    );
}

export default Features;
