import {
    Header,
    Year,
    DetailInfo,
    DetailInfoType,
} from "./styled";

export const Details = ({
    header,
    year,
    extraContent,
    movie
}) => {
    const isYearMissing = !year;
    const isMovieDetails = movie
    return (
        <>
            <Header>{header}</Header>
            {
                !isYearMissing && (
                    <Year>{year}</Year>
                )
            }

            {isMovieDetails ?
                <DetailInfo>
                    <DetailInfoType>Production:</DetailInfoType> China, United States of America<br />
                    <DetailInfoType>Release date:</DetailInfoType> 24.10.2020
                </DetailInfo> :
                <DetailInfo>
                    <DetailInfoType>Birth:</DetailInfoType> China, United States of America
                    <DetailInfoType>Place of birth:</DetailInfoType> 24.10.2020
                </DetailInfo>
            }
            {extraContent}
        </>
    );
}