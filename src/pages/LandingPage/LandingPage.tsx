import styles from './LandingPage.module.scss';
import { ButtonContentData, carouselDataContent1, Logos } from './data';
import image1 from '../../assets/images/image1.png';
import SignUpForm from '../SignUpFormik/SignUpForm';
import Features from '../Features/Features';
import Tools from '../Tools/Tools';
import Pricing from '../Pricing/Pricing';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Carousel from 'better-react-carousel';
import { text } from 'utils/text.utils';
import TopNavBar from '../../components/TopNavBar/TopNavBar.component';
import CarouselComponent from '../../components/common/CarouselComponent/Carousel.component';
import Footer from '../../components/Footer/Footer.component';
function LandingPage(): JSX.Element {
    type arrowDataType = {
        onClick?: () => void;
    };

    function NextArrow({ onClick }: arrowDataType): JSX.Element {
        return (
            <div className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
                <AiOutlineRight />
            </div>
        );
    }

    function PrevArrow({ onClick }: arrowDataType): JSX.Element {
        return (
            <div className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
                <AiOutlineLeft />
            </div>
        );
    }
    return (
        <>
            <TopNavBar />

            <div className={styles.pageContainer}>
                <div className={styles.bodyContent}>
                    <div className={styles.bodyTextContents}>
                        <h1 className={styles.headerContent}>{text.landingPage.HEADER_CONTENT}</h1>
                        <p className={styles.paragraphContent}>{text.landingPage.PARAGRAPH_CONTENT}</p>
                    </div>

                    <div className={styles.button}>
                        {ButtonContentData.map((ele, i) => {
                            return (
                                <a
                                    key={i}
                                    href={ele.path}
                                    className={ele.type === 'button1' ? styles.buttonText1 : styles.buttonText2}
                                >
                                    {ele.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.imageSection}>
                    <img src={image1} alt="" />
                </div>
                <h2 className={styles.logoHeading}>{text.landingPage.LEADING_ORGANIZATIONS_TITLE}</h2>

                {/*carousel 1  */}
                <div className={styles.gridCarousel}>
                    <Carousel
                        cols={3}
                        rows={2}
                        loop
                        autoplay={2000}
                        arrowLeft={<PrevArrow />}
                        arrowRight={<NextArrow />}
                    >
                        {Logos.map((ele, i) => {
                            return (
                                <Carousel.Item key={i}>
                                    <img src={ele.image} alt="" />
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                </div>

                {/* carousel 2 */}

                <div className={styles.carouselContent}>
                    <div className={styles.carouselContainer}>
                        <CarouselComponent
                            singleCarousel={true}
                            carouselData={carouselDataContent1}
                            carouselStyles={true}
                        />
                    </div>
                </div>
                <div id="features">
                    <Features />
                </div>

                <div id="tools">
                    <Tools />
                </div>
                <div id="pricing">
                    <Pricing />
                </div>
            </div>

            <div className={styles.signupFormContent}>
                <h2 className={styles.headerContent4}>{text.landingPage.HEADER_CONTENT_4}</h2>
                <div className={styles.signUpForm} id="getStarted">
                    <SignUpForm />
                </div>
            </div>
            <div id="help">
                <Footer />
            </div>
        </>
    );
}

export default LandingPage;
