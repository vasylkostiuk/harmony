import SequenceShortDesktop from "../../organisms/SequenceShortDesktop/SequenceShortDesktop";
import SequenceShortMobile from "../../organisms/SequenceShortMobile/SequenceShortMobile";

const SequenceShort = ({sequenceData}) => {
    return (
        <>
            <div className="desktop">
                <SequenceShortDesktop sequenceData={sequenceData}/>
            </div>
            <div className="mobile">
                <SequenceShortMobile sequenceData={sequenceData}/>
            </div>
        </>
    );
}

export default SequenceShort;