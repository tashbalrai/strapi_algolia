"use strict";
const { helper } = require("./util");

module.exports = ({ strapi }) => {
  const algolia = strapi.plugin("search").service("algolia");

  algolia.loadConfig();

  const loadEventData = async (event) => {
    algolia.config?.debug &&
      console.log(
        `LoadEventData(): Event name is ${event.model.uid}, Event Action: ${event.action}`
      );

    if (algolia.config?.contentTypes?.[event.model.uid]) {
      const many = event.action.toLowerCase().includes("many");
      let filter = { where: event.params.where };

      const result = await strapi.db
        .query(event.model.uid)
        .findMany(filter)
        .then((result) => {
          return result;
        });

      event.state = { ...event.state, data: result };
      algolia.config?.debug &&
        console.log(`LoadEventData(): Event data has been set ${event.state}`);
    }
  };

  const dispatchEvent = async (event) => {
    algolia.config?.debug &&
      console.log(
        `DispatchEvent(): Event name is ${event.model.uid}, Event Action: ${event.action}`
      );
    if (algolia.config?.contentTypes?.[event.model.uid]) {
      if (!event.action.toLowerCase().includes("delete")) {
        await loadEventData(event);
      }

      algolia.index(event);
    }
  };

  strapi.db.lifecycles.subscribe({
    beforeDelete: loadEventData,
    beforeDeleteMany: loadEventData,
    afterUpdate: dispatchEvent,
    afterDelete: dispatchEvent,
    afterUpdateMany: dispatchEvent,
    afterDeleteMany: dispatchEvent,
  });
};
