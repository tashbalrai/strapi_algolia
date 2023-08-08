"use strict";

const util = require("util");
const { SETTINGS_KEYS } = require("../config/algolia");

module.exports = {
  validateAlgoliaSettings: (settings) => {
    const keys = Object.keys(settings);
    if (!keys.length) {
      return true;
    }

    return keys.every((key) => SETTINGS_KEYS.includes(key));
  },
  getDataToIndex: (event, modelConfig) => {
    const fields = modelConfig?.fields;
    const excludedFields = modelConfig?.excludedFields;
    const records = [];

    if (!event.state?.data?.length) {
      algolia.config?.debug && console.log("No event state data set.");
      return;
    }

    for (const item of event.state.data) {
      const record = Object.fromEntries(
        Object.entries(item).filter(([field, data]) => {
          if (
            Array.isArray(fields) &&
            fields.length &&
            !fields.includes(field)
          ) {
            return false;
          }
          if (
            Array.isArray(excludedFields) &&
            excludedFields.length &&
            excludedFields.includes(field)
          ) {
            return false;
          }

          return true;
        })
      );
      record.objectID = item.id;
      records.push(record);
    }

    return records;
  },
  getDataToDelete: (event, modelConfig) => {
    const records = [];

    if (event.state?.data?.length) {
      for (const item of event.state.data) {
        records.push(item.id);
      }
    }

    return records;
  },
};
