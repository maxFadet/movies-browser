import { useSelector } from "react-redux";

import {
    StyledDetailsTile,
    Image,
    Description,
    Details,
    Header,
    Year,
    DetailInfo,
    DetailInfoItem,
    DetailInfoType,
    IconContainer
} from "./styled";
import { selectMovieDetails } from
    "../../features/MovieDetailsPage/slices/movieDetailsSlice";
import { StyledProfileIcon } from "../StyledProfileIcon";
import { StyledVideoIcon } from "../StyledVideoIcon";

export const DetailsTile = ({ extraContent }) => {

    const {
        title,
        poster_path,
        overview,
        release_date,
        production_countries
    } = useSelector(selectMovieDetails);

    const year = new Date(release_date).getFullYear();
    const areMovieDetails = production_countries || release_date;

    return (
        <StyledDetailsTile>
            {
                poster_path ?
                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/> :
                    <IconContainer>
                        {areMovieDetails ? <StyledVideoIcon /> : <StyledProfileIcon />}
                    </IconContainer>
            }
            <Details>
                <Header>{title}</Header>
                {
                    year && (
                        <Year>{year}</Year>
                    )
                }
                {
                    areMovieDetails ?
                        <DetailInfo>
                            <DetailInfoItem >
                                <DetailInfoType>Production:</DetailInfoType>
                                {
                                    window.innerWidth <= 475
                                        ? (Array.isArray(production_countries[0].iso_3166_1)
                                            ? production_countries[0].iso_3166_1.join(", ")
                                            : production_countries[0].iso_3166_1)
                                        : (Array.isArray(production_countries[0].name)
                                            ? production_countries[0].name.join(", ")
                                            : production_countries[0].name)
                                }
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Release date:</DetailInfoType> {
                                    new Date(release_date).toLocaleString(undefined,
                                        { year: "numeric", month: "numeric", day: "numeric" }
                                    )
                                }
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