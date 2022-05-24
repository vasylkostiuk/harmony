import styles from './ProductLayout.module.css';
import ProductInfo from "../Atoms/ProductInfo/ProductInfo";
import TwoColumns from "../../../layouts/TwoColumns/TwoColumns";
import ColorItem from "../Atoms/ColorItem/ColorItem";
import ExtraFeature from "../Atoms/ExtraFeature/ExtraFeature";

const ProductLayout = ({productTitle, productDescription, badgeText, productParameters, imgSrc, colors, extraFeatures}) => {
    const colorsArr = colors?.map((color) => {
        return <ColorItem color={color?.color?.hex} colorName={color?.title} key={color?.id}/>
    });

    const extraFeaturesArr = extraFeatures?.map((feature) => {
        return <ExtraFeature img={feature?.svgImage?.url} name={feature?.title} key={feature?.id}/>
    });

    return (
        <>
            <ProductInfo
                title={productTitle}
                description={productDescription}
                badgeText={badgeText}
                parameters={productParameters}
                imgSrc={imgSrc}
            />
            {
                colors?.length &&
                <>
                    <h3 className={styles.extra__title}>Membrane color:</h3>
                    <TwoColumns>
                        {colorsArr}
                    </TwoColumns>
                </>
            }
            {
                extraFeatures?.length &&
                <>
                    <h3 className={styles.extra__title}>Extra features:</h3>
                    <TwoColumns>
                        {extraFeaturesArr}
                    </TwoColumns>
                </>
            }
        </>
    );
}

export default ProductLayout;