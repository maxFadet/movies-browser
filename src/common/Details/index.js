import {
    Header,
    Year,
    DetailInfo,
    DetailInfoType,
    DetailInfoItem
} from "./styled";

export const Details = ({
    header,
    year,
    extraContent,
    productionCountries,
    releaseDate
}) => {
    const isYearMissing = !year;

    return (
        <>
            <Header>{header}</Header>
            {
                !isYearMissing && (
                    <Year>{year}</Year>
                )
            }
            {productionCountries || releaseDate ?
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
        </>
    );
}