import './slick-theme.scss';
import './slick.scss';
import styles from './CarouselComponent.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Slider from 'react-slick';

type carouselType = {
    image: string;
    largeText?: string;
    mediumText?: string;
    smallText?: string;
};

type carouselMainDataType = {
    carouselData: carouselType[];
    singleCarousel: boolean;
    carouselStyles: boolean;
};
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

function CarouselComponent({ carouselData, singleCarousel, carouselStyles }: carouselMainDataType): JSX.Element {
    const settings = {
        dots: singleCarousel,
        autoplay: singleCarousel,
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: singleCarousel ? <></> : <NextArrow />,
        prevArrow: singleCarousel ? <></> : <PrevArrow />,
        responsive: singleCarousel
            ? []
            : [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      },
                  },
                  {
                      breakpoint: 900,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          initialSlide: 1,
                      },
                  },
                  {
                      breakpoint: 700,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      },
                  },
                  {
                      breakpoint: 500,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                      },
                  },
              ],
    };

    return (
        <div>
            <Slider {...settings}>
                {carouselData.map((ele: carouselType, i) => {
                    return (
                        <div className={carouselStyles ? styles.contains : styles.carouselVisibility} key={i}>
                            <img
                                src={ele.image}
                                alt=""
                                className={carouselStyles ? styles.carouselImageSection : styles.carousel2ImageSection}
                            />

                            <div
                                className={
                                    carouselStyles ? styles.carouselContentSection : styles.carouselContentSection2
                                }
                            >
                                <div className={carouselStyles ? styles.carouselHeader : styles.carouselHeaderContent}>
                                    {ele.largeText}
                                </div>
                                <div
                                    className={
                                        carouselStyles ? styles.carouselSubHeader : styles.carouselsubHeaderContent
                                    }
                                >
                                    {ele.mediumText}
                                </div>
                                <div className={styles.carouselParagraphContent}>{ele.smallText}</div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default CarouselComponent;
