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
    keyDetailType,
    keyDetailContent
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
            <DetailInfo>
                <DetailInfoType>Production:</DetailInfoType> China, United States of America
            </DetailInfo>
            <DetailInfo>
                <DetailInfoType>Release date:</DetailInfoType> 24.10.2020
            </DetailInfo>
            {extraContent}
        </>
    );
}