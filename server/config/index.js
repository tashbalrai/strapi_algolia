"use strict";
const { yup } = require("@strapi/utils");

module.exports = {
  default: {},
  validator: (config) => {
    try {
      yup
        .object()
        .shape({
          applicationId: yup.string().required(),
          apiKey: yup.string().required(),
          prefix: yup.string(),
          excluded: yup.array().of(yup.string().required()),
          debug: yup.boolean(),
          forceApplySettings: yup.boolean(),
          contentTypes: yup.lazy((obj) => {
            const keys = Object.keys(obj);
            const shape = {};
            for (const key of keys) {
              shape[key] = yup.object({
                indexName: yup.string().required(),
                fields: yup.array().of(yup.string().required()),
                excludedFields: yup.array().of(yup.string().required()),
                settings: yup.object().shape({
                  searchableAttributes: yup.array().of(yup.string().required()),
                  attributesForFacting: yup.array().of(yup.string().required()),
                  unretrievableAttributes: yup
                    .array()
                    .of(yup.string().required()),
                  attributesToRetrieve: yup.array().of(yup.string().required()),
                  restrictSearchableAttributes: yup
                    .array()
                    .of(yup.string().required()),
                }),
              });
            }
            return yup.object(shape);
          }),
        })
        .validateSync(config);
    } catch (error) {
      console.log(`Search plugin config error: ${error.errors}`);
    }
  },
};
