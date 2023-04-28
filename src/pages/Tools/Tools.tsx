import { text } from 'utils/text.utils';
import CardComponent from '../../components/common/Card/Card.component';
import { cardContainerData } from '../LandingPage/data';
import styles from '../LandingPage/LandingPage.module.scss';

function Tools(): JSX.Element {
    return (
        <div className={styles.contentSection}>
            <marquee className={styles.marquee}>
                {text.landingPage.POWERFUL_TOOLS_CONTENT}
                <span>{text.landingPage.POWERFUL_TOOLS_CONTENT}</span>
            </marquee>
            <div className={styles.bodyContentSection2}>
                <div className={styles.titleContent}>{text.landingPage.SECURITY_AND_IT_HEADER_CONTENT} </div>
                <div className={styles.titleSubContent}>{text.landingPage.SECURITY_AND_IT_SUB_CONTENT}</div>
            </div>

            <div className={styles.cardContentSection}>
                {cardContainerData.map((ele, i) => {
                    return (
                        <CardComponent key={i} image={ele.image} heading={ele.heading} subHeading={ele.subHeading} />
                    );
                })}
            </div>
            <div className={styles.buttonContentSection}>
                <a href="#getStarted">GET STARTED</a>
            </div>
        </div>
    );
}

export default Tools;
