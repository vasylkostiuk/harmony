import SequenceProofContainer from "../src/components/SequenceProofContainer";
import {getServerSideSequence} from "./api/serverSide";

export default function Home({sequence}) {
  console.log(sequence?.sequences[0]?.image);
  if (sequence) {
    return <SequenceProofContainer images={sequence?.sequences[0]?.image}/>
  }
  return <></>
}

export const getServerSideProps = getServerSideSequence;

