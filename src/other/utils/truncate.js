export const truncate = (str, len, status=true) => {
    if (str?.length > len && str.length > 0) {
        let new_str = str + " ";
        new_str = str.substr(0, len);
        new_str = str.substr(0, new_str.lastIndexOf(" "));
        new_str = new_str.length > 0 ? new_str : str.substr(0, len);
        let s = status?new_str + " ادامه...":new_str + " ..."
        return s;
    }
    return str;
};
