import styles from './Product.module.css';
import Sticky from "../global/LoadCircle/layouts/Sticky/Sticky";
import ProductImage from "./Atoms/ProductImage/ProductImage";
import ProductCta from "./Atoms/ProductCta/ProductCta";
import ProductLayout from "./Molecules/ProductLayout";
import {currentProductsVar} from "../../apolloClient/reactiveVariables/currentProduct";
import ExtendedSlider from "../global/LoadCircle/layouts/ExtendedSlider/ExtendedSlider";
import OtherProducts from "../OtherProducts/OtherProducts";
import InProductTitle from "../OtherProducts/atoms/InProductTitle/InSliderTitle";
import {useEffect, useState} from "react";

const Product = (product) => {
  const currentProduct = product?.product?.product;
  const {
      badge,
      image,
      info,
      parameters,
      price,
      colors,
      imageGallery,
      category,
      internalColor,
      placeholder,
      imageDescription,
      creditInfo
  } = currentProduct;

  const [deligated, setDeligated] = useState(false);


    useEffect(() => {
        currentProductsVar({
            ...currentProductsVar(),
            url: image?.url,
            placeholder: placeholder?.url,
            width: image?.width,
            height: image?.height,
            initialPrice: price?.currentPrice,
            calculatePrice: 0,
            internalColorPrice: 0,
            currentInternalColor: '',
            price: price?.currentPrice,
            currentColor: colors?.length ? colors[0]?.title : undefined,
            enableInsideColorArr: [],
            currentFeatures: []
        });
        setDeligated(true);
    }, [currentProduct?.id]);

    const result = <>
        <div className={styles.mobile}>
            <ProductLayout
                productTitle={info?.title}
                productDescription={info?.description}
                badgeText={badge}
                productParameters={parameters}
                imgSrc={image?.url}
                width={image?.width}
                height={image?.height}
                colors={currentProduct?.colors}
                extraFeatures={currentProduct?.extraFeatures}
                previousPrice={price?.previousPrice}
                category={category}
                internalColors={internalColor}
                imageDescription={imageDescription}
                creditInfo={creditInfo}
            />
            <OtherProducts>
                <InProductTitle
                    title={'Other Products'}
                    linkTitle={'All products'}
                    link={'product'}
                />
            </OtherProducts>
        </div>
        <div className={styles.desktop}>
            <Sticky>
                <div>
                    <ProductLayout
                        productTitle={info?.title}
                        productDescription={info?.description}
                        badgeText={badge}
                        productParameters={parameters}
                        imgSrc={image?.url}
                        width={image?.width}
                        height={image?.height}
                        colors={currentProduct?.colors}
                        extraFeatures={currentProduct?.extraFeatures}
                        previousPrice={price?.previousPrice}
                        category={category}
                        internalColors={internalColor}
                        creditInfo={creditInfo}
                    />
                </div>
                <div>
                    <ProductImage imageDescription={imageDescription}/>
                    <ProductCta previousPrice={price?.previousPrice} creditInfo={creditInfo}/>
                </div>
            </Sticky>
            <ExtendedSlider images={imageGallery.galleryImage.map(image => image.url)}/>
            <OtherProducts>
                <InProductTitle
                    title={'Other Products'}
                    linkTitle={'All products'}
                    link={'product'}
                />
            </OtherProducts>
            {/*<CenteredSlider images={imageGallery.galleryImage.map(image => image.url)}/>*/}
            {/*<Modal>*/}
            {/*    <CenteredSlider images={imageGallery.galleryImage.map(image => image.url)}/>*/}
            {/*</Modal>*/}
            {/*{*/}
            {/*    colors.map(color => {*/}
            {/*        return <FakeRenderer url={color?.image?.url} key={color?.id}/>*/}
            {/*    })*/}
            {/*}*/}
        </div>
    </>

    return (
        <>
            {deligated ? result : <></>}
        </>
    );
}

export default Product;