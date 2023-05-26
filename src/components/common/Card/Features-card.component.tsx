import { useState } from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../FormComponents/CustomButtonComponent/CustomButton.component';
interface featuresCardProps {
    heading: string;
    subHeading: Array<string>;
    featuresText: string;
    id: number;
    features: Array<string>;
}
function FeaturesCardComponent({ heading, subHeading, featuresText, features, id }: featuresCardProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleMouseEnter = (): void => {
        setIsHovered(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovered(false);
    };

    const cardStyle = {
        backgroundColor: isHovered ? '#012f51' : '#ffffff',
        boxShadow: isHovered ? '0 2px 10px 2px rgba(2, 15, 28, 0.3)' : '0 2px 10px 2px rgba(100, 100, 100, 0.3)',
        transition: 'background-color 0.4s ease-in-out',
    };

    const headingStyle = {
        color: isHovered ? '#ebf6ff' : '#012f51',
        fontSize: '24px',
        transition: 'color 0.4s ease-in-out',
    };

    const subheadingStyle = {
        backgroundColor: isHovered ? '#e9f8ea' : '',
        border: isHovered ? 'solid 0.5px #23bb2d' : '',
        transition: 'color 0.4s ease-in-out',
    };

    const subHeadingStyleSpan = {
        color: isHovered ? '#23bb2d' : '#012f51',
    };

    const featuresTextStyle = {
        color: isHovered ? ' #ebf6ff' : '',
        transition: 'color 0.4s ease-in-out',
    };

    const contentsSpan = {
        color: isHovered ? ' #dedede' : '#8f8f8f',
    };

    const handleClick = (e: any): void => {
        e.preventDefault();
        navigate('/signup');
    };
    return (
        <div
            className="sanerNowCardContents"
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="sanerNowCardContentsSection">
                <div className={id === 4 ? 'ribbon' : ' '}>
                    <section>
                        <span className={id === 4 ? 'ribbon3' : ''}>{id === 4 ? 'Most Popular' : ''}</span>
                    </section>
                </div>

                <div className={'heading'} style={headingStyle}>
                    {heading}
                </div>

                <div className={id === 4 ? 'card2SubContents' : 'subContents'}>
                    {subHeading.map((ele, i) => {
                        return (
                            <div key={i} className={'subHeadings'} style={subheadingStyle}>
                                <span style={subHeadingStyleSpan}>{ele}</span>
                            </div>
                        );
                    })}
                </div>
                <div className={'featuresText'} style={featuresTextStyle}>
                    {featuresText}
                </div>
                <div className="features">
                    {features.map((ele, i) => {
                        return (
                            <div className={'contents'} key={i}>
                                <div className={isHovered ? 'circlehover' : 'circleWithTick'}></div>
                                <span style={contentsSpan}>{ele}</span>
                            </div>
                        );
                    })}
                </div>

                <CustomButton
                    variant={isHovered ? 'contained' : 'outlined'}
                    type="submit"
                    fullWidth={true}
                    buttonText={'SIGN UP'}
                    onClick={handleClick}
                    from={'productFooter'}
                />
            </div>
        </div>
    );
}

export default FeaturesCardComponent;
