import { useMediaQuery } from 'react-responsive';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Buttons,
    ButtonText,
    ButtonTile,
    Counter,
    CounterNumber,
    CounterText,
    PointerLeft,
    PointerRight,
    Wrapper,
} from "./styled";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 });

    const navigate = useNavigate();
    const location = useLocation();

    const updatePageInURL = (page) => {
        const params = new URLSearchParams(location.search);
        params.set("page", page);
        navigate(`${location.pathname}?${params.toString()}`);
        onPageChange(page);
    };

    const handleFirstPageClick = () => {
        // onPageChange(1);
        updatePageInURL(1);
    };

    const handleLastPageClick = () => {
        // onPageChange(totalPages);
        updatePageInURL(totalPages);
    };

    const handleNextPageClick = () => {
        if (currentPage < totalPages) {
            // onPageChange(currentPage + 1);
            updatePageInURL(currentPage + 1);

        }
    };

    const handlePreviousPageClick = () => {
        if (currentPage > 1) {
            // onPageChange(currentPage - 1);
            updatePageInURL(currentPage - 1);
        }
    };

    return (
        <Wrapper>
            <Buttons>
                <ButtonTile onClick={handleFirstPageClick} disabled={currentPage === 1}>
                    {isMobile ? (
                        <>
                            <PointerLeft />
                            <PointerLeft />
                        </>
                    ) : (
                        <PointerLeft />
                    )}
                    {!isMobile && <ButtonText>First</ButtonText>}
                </ButtonTile>
                <ButtonTile onClick={handlePreviousPageClick} disabled={currentPage === 1}>
                    <PointerLeft />
                    {!isMobile && <ButtonText>Previous</ButtonText>}
                </ButtonTile>
            </Buttons>
            <Counter>
                <CounterText>Page</CounterText>
                <CounterNumber>{currentPage}</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>{totalPages}</CounterNumber>
            </Counter>
            <Buttons>
                <ButtonTile onClick={handleNextPageClick} disabled={currentPage === totalPages}>
                    <PointerRight />
                    {!isMobile && <ButtonText>Next</ButtonText>}
                </ButtonTile>
                <ButtonTile onClick={handleLastPageClick} disabled={currentPage === totalPages}>
                    {isMobile ? (
                        <>
                            <PointerRight />
                            <PointerRight />
                        </>
                    ) : (
                        <PointerRight />
                    )}
                    {!isMobile && <ButtonText>Last</ButtonText>}
                </ButtonTile>
            </Buttons>
        </Wrapper>
    );
};