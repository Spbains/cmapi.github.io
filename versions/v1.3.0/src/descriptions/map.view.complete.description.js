cmapi.channel["map.view.complete"].description = {
  "description": "Schema for the details object for a map.message.complete message after a map.view.zoom, map.view.center.*.",
  "properties": {
    "bounds": {
      "description": "The bounds coordinates of the maps viewing area.",
      "default": "",
      "properties": {
        "northEast": {
          "description": "The coordinates of the north east corner of the maps viewing area.",
          "default": "",
          "properties": {
            "lat": {
              "description": "The latitude of the most northen section of the viewing area. A value between -90 and 90.",
              "default": ""
            },
            "lon": {
              "description": "The longitude of the most easternly section of the viewing area. A value between -180 and 180.",
              "default": ""
            }
          }
        },
        "southWest": {
          "description": "The coordinates of the south west corner of the maps viewing area.",
          "default": "",
          "properties": {
            "lat": {
              "description": "The latitude of the most southern section of the viewing area. A value between -90 and 90.",
              "default": ""
            },
            "lon": {
              "description": "The longitude of the most westernly section of the viewing area. A value between -180 and 180.",
              "default": ""
            }
          }
        }
      }
    },
    "range": {
      "description": "The altitude of the maps view point",
      "default": ""
    },
    "center": {
      "description": "The center coordinate of the maps viewing area.",
      "default": "",
      "properties": {
        "lat": {
          "description": "The latitude of the center of the viewing area. A value between -90 and 90.",
          "default": ""
        },
        "lon": {
          "description": "The longitude of the center of the viewing area. A value between -180 and 180.",
          "default": ""
        }
      }
    }
  }
};