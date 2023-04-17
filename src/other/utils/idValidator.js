export const idValidator = courseId => {
    const hexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    return hexRegExp.test(courseId);
};