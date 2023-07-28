export const protectedResolver = (resolver) => (parent, args, context, info) => {
    if (!context.loginUser) {
        return {
            code: 404,
            success: false,
            message: "Please log in to perform this action",
        };
    }
    return resolver(parent, args, context, info);
};
// const a = x("1")
// const b = a("2", "d", "d", "d")
// const c = x("1")("2", "d", "d", "d")
