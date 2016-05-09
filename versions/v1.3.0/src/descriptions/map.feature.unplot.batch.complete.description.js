cmapi.channel["map.feature.unplot.batch.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.feature.unplot.batch.",
  "properties": {
    "features": {
      "description": "An array of feature identifier objects",
      "defaultValue": "",
      "properties": {
        "overlayId": {
          "description": "The ID of the overlay this feature was removed from.",
          "defaultValue": ""
        },
        "featureId": {
          "description": "Unique identifier for the given feature.",
          "defaultValue": ""
        }
      }
    }
  }
};
