cmapi.channel["map.overlay.update.complete"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Schema for map.message.complete Details object",
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "overlayId": {
        "type": "string"
      },
      "parentId": {
        "type": "string"
      },
      "properties": {
        "type": "object"
      },
      "menuId": {
        "type": "string",
        "extension": "User Manipulation - Context Menus"
      }
    },
    "required": ["overlayId"]
  }
};
