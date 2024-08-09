import { useSelector } from "react-redux";

import {
    StyledDetailsTile,
    ImageContainer,
    Description,
    Details,
    StyledVideoIcon,
    Header,
    Year,
    DetailInfo,
    DetailInfoItem,
    DetailInfoType,
} from "./styled";

import {
    selectOverview,
    selectPoster,
    selectReleaseDate,
    selectTitle,
    selectProductionCountries
} from "../../movieDetailsSlice";

export const DetailsTile = ({ extraContent }) => {
    const title = useSelector(selectTitle);
    const overview = useSelector(selectOverview);
    const poster = useSelector(selectPoster);

    const productionCountries = useSelector(selectProductionCountries);
    const releaseDate = useSelector(selectReleaseDate);

    const year = new Date(releaseDate).getFullYear();

    return (
        <StyledDetailsTile>
            {
                poster ?
                    <ImageContainer $image={poster} /> :
                    <ImageContainer>
                        <StyledVideoIcon />
                    </ImageContainer>
            }
            <Details>
                <Header>{title}</Header>
                {
                    year && (
                        <Year>{year}</Year>
                    )
                }
                {
                    productionCountries || releaseDate ?
                        <DetailInfo>
                            <DetailInfoItem >
                                <DetailInfoType>Production:</DetailInfoType> {
                                    window.innerWidth <= 475
                                        ? (Array.isArray(productionCountries[0].iso_3166_1)
                                            ? productionCountries[0].iso_3166_1.join(", ")
                                            : productionCountries[0].iso_3166_1)
                                        : (Array.isArray(productionCountries[0].name)
                                            ? productionCountries[0].name.join(", ")
                                            : productionCountries[0].name)
                                }
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Release date:</DetailInfoType> {releaseDate}
                            </DetailInfoItem>
                        </DetailInfo> :
                        <DetailInfo>
                            <DetailInfoItem>
                                <DetailInfoType>Birth:</DetailInfoType> China, United States of America
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Place of birth:</DetailInfoType> 24.10.2020
                            </DetailInfoItem>
                        </DetailInfo>
                }
                {extraContent}
            </Details>
            <Description>
                {overview}
            </Description>
        </StyledDetailsTile >
    );
};