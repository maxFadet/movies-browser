import { useMediaQuery } from 'react-responsive';
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

export const Pagination = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });

    return (
        <Wrapper>
            <Buttons>
                <ButtonTile>
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
                <ButtonTile>
                    <PointerLeft />
                    {!isMobile && <ButtonText>Previous</ButtonText>}
                </ButtonTile>
            </Buttons>
            <Counter>
                <CounterText>Page</CounterText>
                <CounterNumber>1</CounterNumber>
                <CounterText>of</CounterText>
                <CounterNumber>500</CounterNumber>
            </Counter>
            <Buttons>
                <ButtonTile>
                    <PointerRight />
                    {!isMobile && <ButtonText>Next</ButtonText>}
                </ButtonTile>
                <ButtonTile>
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