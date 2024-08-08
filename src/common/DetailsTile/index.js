import {
    StyledDetailsTile,
    Image,
    Description,
    Details,
} from "./styled";

export const DetailsTile = ({ image, mainDetails, overview }) => {
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
                {overview}
            </Description>
        </StyledDetailsTile>
    );
};