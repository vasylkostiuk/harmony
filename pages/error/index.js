import ErrorPage from "../../src/components/global/ErrorPage/ErrorPage";

const Error = () => {
    return (
        <div className="container">
            <ErrorPage
                title={"Some error appears"}
                description={"It's not yours, it's ours"}
                message={"Something went wrong. We are working ot it."}
            />
        </div>
    );
}

export default Error;