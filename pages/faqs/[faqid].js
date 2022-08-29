import {GetFaq, GetStaticFaqsPath} from "../../src/preRender/ISR";
import HeaderTop from "../../src/components/Header/molecules/HeaderTop/HeaderTop";
import FAQs from "../../src/components/FAQs/FAQs";
import Footer from "../../src/components/Footer/Footer";

const FAQid = ({faq, footer, header}) => {
    return (
        <>
            <div className="container">
                <HeaderTop
                    logoUrl={header?.logo?.url}
                    otherLinks={header?.otherLinks}
                    productLinks={header?.productLinks}
                />
                <FAQs title={faq?.title} qas={faq?.qAs}/>
            </div>
            <Footer footer={footer}/>
        </>
    );
}

export const getStaticPaths = GetStaticFaqsPath;

export const getStaticProps = GetFaq;

export default FAQid;