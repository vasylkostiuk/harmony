import titleStyles from '../SelectDate/SelectDate.module.css';
import HubContactField from "../../atoms/HubContactField/HubContactField";
import styles from './EnterDetails.module.css';
import {validateEmail, validatePhoneNumber} from "../../../../services/contactValidation";

const EnterDetails = () => {
    return (
        <div className={styles.container}>
            <h3 className={titleStyles.title} style={{marginBottom: '30px'}}>1. Enter your details</h3>
            <HubContactField
                type={"text"}
                placeholder={"Name"}
                label={"First Name"}
                contactField={"firstName"}
            />
            <HubContactField
                type={"text"}
                placeholder={"Second Name"}
                label={"Second Name"}
                contactField={"secondName"}
            />
            <HubContactField
                type={"email"}
                placeholder={"email@gmail.com"}
                label={"E-mail"}
                contactField={"email"}
                validation={validateEmail}
                errorMessage={"Fill this field or type actual email, please"}
            />
            <HubContactField
                type={"tel"}
                placeholder={"+1 999 999 9999"}
                label={"Phone number"}
                contactField={"phone"}
                validation={validatePhoneNumber}
                errorMessage={"Fill this field or type actual phone number, please"}
            />
            <HubContactField
                type={"text"}
                placeholder={"Comment"}
                label={"Comment"}
                contactField={"message"}
            />

        </div>
    );
}

export default EnterDetails;