import {
    StyledDetailsTile,
    Image,
    Description,
    Details,
} from "./styled";

export const DetailsTile = ({ image, mainDetails, description }) => {
    const isMainDetailsMissing = !mainDetails;

    return (
        <StyledDetailsTile>
            <Image
                src={image}
                alt=""
            >
            </Image>
            {
                !isMainDetailsMissing && (
                    <Details>
                        {mainDetails}
                    </Details>
                )
            }
            <Description>
                {description}
            </Description>
        </StyledDetailsTile>
    );
};