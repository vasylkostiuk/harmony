import SequenceColorChanger from "./SequenceColorChanger";
import {useReactiveVar} from "@apollo/client";
import {sequenceColors, sequenceColorsMobile} from "../../../../apolloClient/reactiveVariables/sequenceColors";

const SequenceColorChangerContainer = ({isDisplayed = false, isDesktop = true}) => {
    const colors = useReactiveVar(isDesktop ? sequenceColors : sequenceColorsMobile);

    return colors && colors.length ? (
        <SequenceColorChanger isDisplayed={isDisplayed} colors={colors}/>
    ) : null;
}

export default SequenceColorChangerContainer;