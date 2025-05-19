export const toFirstUpperCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const toTitleCase = (str: string): string => str.replace(/\b(\w)/g, s => s.toUpperCase());
