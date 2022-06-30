import {useReactiveVar} from "@apollo/client";
import {currentProductsVar} from "../../../apolloClient/reactiveVariables/currentProduct";
import ColorItem from "../Atoms/ColorItem/ColorItem";

const ColorItemContainer = ({colorName, color, colorImgUrl, colorImgWidth, colorImgHeight, colorPrice}) => {
    const {currentColor} = useReactiveVar(currentProductsVar);
    const isColorCurrent = currentColor === colorName;

    return (
        <div
            onClick={() => currentProductsVar({
                ...currentProductsVar(),
                url: colorImgUrl,
                width: colorImgWidth,
                height: colorImgHeight,
                price: currentProductsVar().initialPrice + colorPrice,
                currentColor: colorName
            })}
        >
            <ColorItem color={color} colorName={colorName} isColorCurrent={isColorCurrent}/>
        </div>
    );
}

export default ColorItemContainer;