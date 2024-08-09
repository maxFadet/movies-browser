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

} from "./styled"


export const Pagination = () => {
    return (
        <Wrapper>
            <Buttons>
                <ButtonTile>
                    <PointerLeft />
                    <ButtonText>
                        First
                    </ButtonText>
                </ButtonTile>
                <ButtonTile>
                    <PointerLeft />
                    <ButtonText>
                        Previous
                    </ButtonText>
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
                    <ButtonText>
                        Next
                    </ButtonText>
                </ButtonTile>
                <ButtonTile>
                    <PointerRight />
                    <ButtonText>
                        Last
                    </ButtonText>
                </ButtonTile>
            </Buttons>
        </Wrapper>
    )
}