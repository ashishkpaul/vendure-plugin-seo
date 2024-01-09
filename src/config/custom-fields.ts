import { Asset, CustomFieldConfig, LanguageCode } from "@vendure/core";

export const SeoCustomFields: CustomFieldConfig[] = [
  {
    name: "seoTitle",
    type: "localeString",
    label: [{ languageCode: LanguageCode.en, value: "SEO Title" }],
    description: [
      { languageCode: LanguageCode.en, value: "Product/Service Title" },
    ],
    ui: { tab: "SEO" },
    public: false,
  },
  {
    name: "seoDescription",
    type: "localeString",
    label: [{ languageCode: LanguageCode.en, value: "SEO Description" }],
    description: [
      { languageCode: LanguageCode.en, value: "Product description" },
    ],
    ui: { component: "text-form-input", tab: "SEO" },
    validate: (value: string) => {
        if (value?.length > 255) {
          return [
            {
              value: "Meta description can be max 255 characters",
              languageCode: LanguageCode.en,
            },
          ];
        }
    },
    public: false,
  },
  {
    name: "facebookImage",
    type: "relation",
    graphQLType: "Asset",
    entity: Asset,
    label: [
      { languageCode: LanguageCode.en, value: "Facebook SEO image" },
      { languageCode: LanguageCode.it, value: "Immagine SEO Facebook" },
    ],
    description: [
      { languageCode: LanguageCode.en, value: "Recommended size: 1200x630px" },
      {
        languageCode: LanguageCode.it,
        value: "Dimensione consigliata: 1200x630px",
      },
    ],
    ui: { tab: "SEO" },
    eager: true,
    public: false,
  },
  {
    name: "twitterImage",
    type: "relation",
    graphQLType: "Asset",
    entity: Asset,
    label: [
      { languageCode: LanguageCode.en, value: "Twitter SEO image" },
      { languageCode: LanguageCode.it, value: "Immagine SEO Twitter" },
    ],
    description: [
      { languageCode: LanguageCode.en, value: "Recommended size: 1200x675px" },
      {
        languageCode: LanguageCode.it,
        value: "Dimensione consigliata: 1200x675px",
      },
    ],
    ui: { tab: "SEO" },
    eager: true,
    public: false,
  },
];
