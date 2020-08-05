const string2boolean = (str: string | null | undefined): boolean => {
    return Boolean(Number(str));
};

export { string2boolean };
