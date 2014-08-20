cmapi.channel["map.feature.deselected.batch"] = {
  schema: {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "map.feature.deselected.batch",
    "description": "“De-Select,” or report that a collection of feature objects were de-selected.",
    "type": "object",
    "properties": {
      "payloads": {
        "description" : "An array of map.feature.deSelected payload objects.  See map.feature.deSelected for the object format and schema",
        "type": "Array"
      },
      "overlayId": {
        "description": "The default overlayId to be applied to all map.feature.deSelected objects in the payloads array that don’t include an overlayId. I.e., similar behavior to CSS.  See map.feature.deSelected for more details",
        "type": "string",
        "default": ""
      },
	  "messageId": {
        "description": "A globally unique ID that identifies this particular message batch.  If the messageId property is populated, maps that support the user manipulation extension MUST use this messageId in the map.message.complete, map.message.progress, and map.message.cancel messages as defined in the User Manipulation extension to indicate progress and either completion or cancellation (as appropriate) of the message batch.",
        "type": "string"
      }
    },
    "required": ["payloads"]
  },
  notes: [ ]
};