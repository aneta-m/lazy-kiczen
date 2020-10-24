export class Text {
    capitalizeFirstLetter = (text) => {
        if (text.typeOf !== "string") {
            return "";
        }

        return text[0].capitalize() + text.slice(1).toLowerCase();
    };
}