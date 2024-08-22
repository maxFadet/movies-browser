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
import { getYear } from "../../functions/getYear";

export const DetailsTile = ({ extraContent }) => {

    const {
        title,
        poster_path,
        overview,
        release_date,
        production_countries
    } = useSelector(selectMovieDetails);

    const areMovieDetails = production_countries || release_date;

    return (
        <StyledDetailsTile>
            {
                poster_path ?
                    <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} /> :
                    <IconContainer>
                        {areMovieDetails ? <StyledVideoIcon /> : <StyledProfileIcon />}
                    </IconContainer>
            }
            <Details>
                <Header>{title}</Header>
                {
                    release_date && (
                        <Year>{getYear(release_date)}</Year>
                    )
                }
                {
                    areMovieDetails ?
                        <DetailInfo>
                            <DetailInfoItem >
                                <DetailInfoType>Production:</DetailInfoType> {
                                    production_countries ?
                                        production_countries.map(({ name, iso_3166_1 }) => (
                                            <span key={iso_3166_1}>
                                                {window.innerWidth <= 475 ? iso_3166_1 : name}
                                            </span>
                                        )) :
                                        <>Unknow</>
                                }
                            </DetailInfoItem>
                            <DetailInfoItem>
                                <DetailInfoType>Release date:</DetailInfoType> {
                                    release_date ?
                                        new Date(release_date).toLocaleString(undefined,
                                            { year: "numeric", month: "numeric", day: "numeric" }
                                        ) :
                                        <>Unknow</>
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
            {
                overview && (
                    <Description>
                        {overview}
                    </Description>
                )
            }
        </StyledDetailsTile >
    );
};