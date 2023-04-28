import styles from './Footer.module.scss';
import { FooterData, LogoImages, SocialMediaLinksAndLogos } from './data';
import { Link } from 'react-router-dom';
import ButtonComponent from '../common/ButtonComponent.common';
import { useNavigate } from 'react-router-dom';
import {text} from '../../utils/text.utils';
function Footer(): JSX.Element {
    const navigate = useNavigate();
    const handleClick = (): any => {
        navigate('/support');
    };
    return (
        <div className={styles.footer}>
            <div className={styles.endorsement}>
                <div className={styles.contents}>
                    <div className={styles.header}>{text.landingPage.ENDORSEMENTS_HEADER_TEXT}</div>
                    <div className={styles.subHeader}>{text.landingPage.ENDORSEMENTS_SUB_HEADING}</div>
                </div>
                <div className={styles.imagesSection}>
                    {LogoImages.map((ele, i: any) => {
                        return (
                            <div key={i} className={styles.logoBackground}>
                                <img src={ele.image} alt="" />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.footerSections}>
                {FooterData.map((ele, i) => {
                    return (
                        <div className={styles.footerData} key={i}>
                            <div className={styles.footerHeading}>{ele.heading}</div>
                            <ul>
                                {ele.contents.map((e, i) => {
                                    return (
                                        <Link to={e.path} key={i}>
                                            <li>{e.subHeadings}</li>
                                        </Link>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                <div className={styles.footerButton}>
                    <ButtonComponent buttonText={'Support'} onClick={handleClick} className={styles.footerButtonText} />
                    <div className={styles.followUs}>Follow US</div>
                    <div className={styles.socialMediaLogos}>
                        {SocialMediaLinksAndLogos.map((ele, i) => {
                            return (
                                <Link to={ele.link} key={i}>
                                    <img src={ele.image} alt="" />
                                </Link>
                            );
                        })}
                    </div>
                    <div className={styles.copyRight}>{text.landingPage.COPY_RIGHT_CONTENT}</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
