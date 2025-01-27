export const APP_VERSION = "__APP_VERSION__";
export const IS_REVOLT =
    import.meta.env.VITE_API_URL === "https://api.revolt.chat/0.8" ||
    // future proofing
    import.meta.env.VITE_API_URL === "https://app.revolt.chat/api" ||
    import.meta.env.VITE_API_URL === "https://revolt.chat/api";
