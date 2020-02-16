
import {
    createValidator,
    composeValidators,
    combineValidators,
    isRequired,
    isAlphabetic,
} from "revalidate";

const isValidEmail = createValidator(
    message => value => {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return message;
        }
    },
    "Invalid email address"
);


export const validate = combineValidators({
    firstName: composeValidators(
        isRequired({ message: "plase enter your first name" }),
        isAlphabetic({ message: "Numbers are not acceptes" })
    )(),
    lastName: composeValidators(isRequired({ message: "plase enter your last name" }),
        isAlphabetic({ message: "Numbers are not acceptes" })
    )(),
    email: composeValidators(
        isRequired({ message: "plase enter your email address" }),
        isValidEmail
    )(),
    telephone: isRequired({ message: "plase enter your telephone number" })

});