export const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
        } catch {
        return false;
    }
};

export const getUrlFromText = (text: string): string => {
    if (isValidUrl(text)) return text;
    try {
        if (text.includes(".") && !text.includes(" ")) {
            return new URL(`https://${text}`).toString();
        }
    } catch  {
        return "";
    }
    return "";
};

export const getSearchParams = (url: string): Record<string, string> => {
    const params = {} as Record<string, string>;

    new URL(url).searchParams.forEach(function (val, key) {
        params[key] = val;
    });

    return params;
};
