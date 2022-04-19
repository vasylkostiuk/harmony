import {ecopods} from "../../images";
import {useImage} from "../../hooks/useImage";

export const EcopodArray = () => {
    const [AA0, AA0S] = useImage(ecopods[0]);
    const [AA1, AA1S] = useImage(ecopods[1]);
    const [AA2, AA2S] = useImage(ecopods[2]);
    const [AA3, AA3S] = useImage(ecopods[3]);
    const [AA4, AA4S] = useImage(ecopods[4]);
    const [AA5, AA5S] = useImage(ecopods[5]);
    const [AA6, AA6S] = useImage(ecopods[6]);

    return  Array.of(
        [AA0, AA0S],
        [AA1, AA1S],
        [AA2, AA2S],
        [AA3, AA3S],
        [AA4, AA4S],
        [AA5, AA5S],
        [AA6, AA6S],
    );
}