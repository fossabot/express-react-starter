import manageTranslations from "react-intl-translations-manager";

manageTranslations({
    messagesDirectory: "./temp/extracted_locale/",
    translationsDirectory: "./frontend/locales/",
    languages: ["de"]
});
