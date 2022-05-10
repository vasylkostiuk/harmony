import {ApolloClient, from, HttpLink} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import Router from "next/router";
import initCache from "./persistCache";

const httpLink = new HttpLink({
    uri: "https://api-us-east-1.graphcms.com/v2/cl2gfmaf42zy601xmf6kr2bfn/master",
    headers: {
        authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTIwOTMwMDcsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsMmdmbWFmNDJ6eTYwMXhtZjZrcjJiZm4vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjBiMGE5YjQtMmRlOC00OGM4LThmMWEtNmY2MDBkOTM4MzllIiwianRpIjoiY2wyeWxpcjhoM2cyZDAxeXc2c2NiNWgzOCJ9.U74IerWjZDkGpNlQHewC6Y0XxklweDeqBbadmu421_IdY9nLWCNpuB6Xj5ZS5VIBWBMCzaMIQv4Qv4fvz8rhZqL6rIWuThTuoufFiKLjqd_AIMdWXtcWBEoLKBdL5D2dL8UPsoxynzhdnBGzitJDdB_uqqBDeFz2E-vdf6be8tSVeepS4b6vJgbzCE9GwteuHgt0i9rWFANIwVWnyLwoahptJufWOUljGc6BqjcUVqevcpdZIpduqNSB_kl1ovYK4oaWVhSUDJVQ-ySNyw2Y-atcjUykNtg2fipnYKX7Glow2huPkEfB3JwpDTyfLgl4BWgK7os-R4RJwisxfuSvmSon4y-q7KB3bSqSjNviBg9D8UhkMO-JZUkHQyYQI3KjDeYdDA6bUF5VXQJBRi0iNQzW7f3bRdfUNRHzHd8nLul4iO-0oCthDiIBfzi6VvZXH6R4HqNXbYv6aN3f-LNqP4Q7S8JxuH2exCaaEl5_jjpC-se9Q8YE04FdfU5xw5qJpJB_3RlVQml2UwiUg9l3CEZE9w0jPyll-Qr65hjAmVXlcCjVBq4lV6kvd9_0KXEDf2s92L1h8kXcZZPzy23tCnve1hlYiXkMqCzQZZ0hoJ5AuxLDBtuXOZUdiXA94CeQCONiJLXdUdS-ssZaTjlh-52Prslc-LE1oEItZ3vhcTg"
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (typeof window !== "undefined" && (graphQLErrors || networkError)) {
        Router.push('/error');
    }
});


export const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: initCache(),
    connectToDevTools: true
});