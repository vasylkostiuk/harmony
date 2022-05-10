import {useQuery} from "@apollo/client";
import {GET_ARTICLES} from "../src/apolloClient/queries";
import {client} from "../src/apolloClient/client";

export default function Home() {
  const {data} = useQuery(GET_ARTICLES, {fetchPolicy: "no-cache"});
  const res = client.readQuery({
    query: GET_ARTICLES,
  });
  console.log(res, data)
  return <></>
}

