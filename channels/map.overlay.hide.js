cmapi.channel["map.overlay.hide"] = {
    schema: {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "map.overlay.hide",
        "description": "Hide existing overlay on the map.",
        "properties": {
            "overlayId": {
                "description": "The unique ID of the new overlay. If no overlayId is included, default overlay with ID equal to sending widget’s ID is assumed. If an overlay with the given ID already exists, this message will have no effect. Note that overlay IDs must be unique even across multiple parent overlays.",
                "type": "string"
            }
        },
        "required" : []
    },
    notes : []
}