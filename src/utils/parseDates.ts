export const parseDates = (text: string): Array<string> => {
    const regEx = /\b\d{2}\/\d{2}\/\d{4}\b/g;
    
    const result = text.match(regEx);

    return result ? result: [];
};