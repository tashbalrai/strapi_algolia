"use strict";

const algoliasearch = require("algoliasearch").default;
const { helper } = require("../util");
const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;

module.exports = ({ strapi }) => ({
  config: {},
  client: null,
  getAlgoliaClient() {
    if (null === this.client) {
      this.client = algoliasearch(
        this.config.applicationId,
        this.config.apiKey
      );
    }
    return this.client;
  },
  getConfig() {
    return this.config;
  },
  loadConfig() {
    this.config = strapi.config.get("plugin.search");

    if (!this.config.applicationId.length || !this.config.apiKey.length) {
      console.log("Algolia search application ID and Key must be defined.");
      return;
    }
  },
  index(event) {
    const index = this.getAlgoliaClient().initIndex(
      this.config.contentTypes[event.model.uid].indexName
    );

    index
      .exists()
      .then((exists) => {
        const settings = this.config.contentTypes[event.model.uid].settings;

        if (
          (!exists || this.config.forceApplySettings) &&
          Object.keys(settings).length
        ) {
          if (!helper.validateAlgoliaSettings(settings)) {
            console.log(
              `Algolia search settings are not valid. Model name: ${event.model.uid}, Settings: ${settings}`
            );
            return;
          }

          index.setSettings(settings).catch((e) => console.error(e));
        }
      })
      .then((data) => this.doIndex(index, event))
      .catch((e) => console.error(e));
  },
  doIndex(index, event) {
    const action = event.action.toLowerCase();
    const modelConfig = this.config.contentTypes[event.model.uid];
    helper.getDataToIndex(event, modelConfig);
    if (action.includes("delete")) {
      index
        .deleteObjects(helper.getDataToDelete(event, modelConfig))
        .catch((e) => console.error(e));
    } else if (action.includes("update") && !event.params?.data?.publishedAt) {
      index
        .deleteObjects(helper.getDataToDelete(event, modelConfig))
        .catch((e) => console.error(e));
    } else if (action.includes("update") && event.params?.data?.publishedAt) {
      index
        .saveObjects(helper.getDataToIndex(event, modelConfig))
        .catch((e) => console.error(e));
    }
  },
});
