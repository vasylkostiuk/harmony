import styles from './ProductLayout.module.css';
import ProductInfo from "../Atoms/ProductInfo/ProductInfo";
import TwoColumns from "../../../layouts/TwoColumns/TwoColumns";
import ColorItem from "../Atoms/ColorItem/ColorItem";
import ExtraFeature from "../Atoms/ExtraFeature/ExtraFeature";
import BottomWidget from "../../../layouts/BottomWidget/BottomWidget";
import ProductCta from "../Atoms/ProductCta/ProductCta";
import InsideColor from "../Atoms/InsideColor/InsideColor";

const ProductLayout = ({
                           productTitle,
                           productDescription,
                           badgeText,
                           productParameters,
                           imgSrc,
                           colors,
                           extraFeatures,
                           width,
                           height,
                           previousPrice,
                           category,
                           internalColors
}) => {
    const colorsArr = colors?.map((color) => {
        return <ColorItem
            color={color?.color?.hex}
            colorName={color?.title}
            colorImgUrl={color?.image?.url}
            colorImgWidth={color?.image?.width}
            colorImgHeight={color?.image?.height}
            colorPrice={color?.price}
            key={color?.id}
        />
    });

    const extraFeaturesArr = extraFeatures?.map((feature) => {
        return <ExtraFeature
            img={feature?.svgImage?.url}
            name={feature?.title}
            featurePrice={feature?.price}
            isEnableInsideColor={feature?.isEnableInsideColor}
            featureId={feature?.id}
            key={feature?.id}
        />
    });

    const insideColorsArr = internalColors?.map(color => {
        return <InsideColor
            key={color?.id}
            color={color?.color?.hex}
            colorName={color?.title}
            price={color?.price}
        />
    });

    return (
        <>
            <ProductInfo
                title={productTitle}
                description={productDescription}
                badgeText={badgeText}
                parameters={productParameters}
                imgSrc={imgSrc}
                imgWidth={width}
                imgHeight={height}
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
            {
                insideColorsArr?.length && category === "Geodome" &&
                <>
                    <h3 className={styles.extra__title}>Internal color:</h3>
                    <TwoColumns>
                        {insideColorsArr}
                    </TwoColumns>
                </>
            }
            <BottomWidget>
                <ProductCta previousPrice={previousPrice}/>
            </BottomWidget>
        </>
    );
}

export default ProductLayout;