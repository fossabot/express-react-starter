import manageTranslations from "react-intl-translations-manager";

manageTranslations({
    messagesDirectory: "frontend/src/extracted/",
    translationsDirectory: "frontend/src/locales/",
    languages: ["de"]
});
