import './Card.scss';
interface CardProps {
    heading: string;
    subHeading: string;
    image: string;
}
function CardComponent({ heading, subHeading, image }: CardProps): JSX.Element {
    return (
        <div className="card-contents">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="header">{heading}</div>
            <div className="sub-heading">{subHeading}</div>
        </div>
    );
}

export default CardComponent;
