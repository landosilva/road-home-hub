// Source of truth for screen flow data.
// Edit via the dashboard (Save button) or directly here.
// Commit and deploy to update the live version.
window.__screenFlowData = {
  "version": 1,
  "screens": [
    {
      "id": "s1",
      "num": 1,
      "title": "Intro",
      "subtitle": "Animated title sequence with the van driving into the sunset.",
      "playDesc": "The van drives into the sunset. A journey begins.",
      "image": "images/van-sunset-road.jpg",
      "color": "var(--accent)",
      "x": 80,
      "y": 80,
      "showMenuBtn": false,
      "connections": [
        {
          "id": "c1-1",
          "label": "Start →",
          "target": "s2",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s2",
      "num": 2,
      "title": "Main menu",
      "subtitle": "New game, continue, settings, credits. The hub you return to.",
      "playDesc": "New game, continue, settings, credits.",
      "image": "images/van-driving-back.png",
      "color": "var(--accent)",
      "x": 85,
      "y": 430,
      "showMenuBtn": false,
      "connections": [
        {
          "id": "c2-1",
          "label": "▶ Continue →",
          "target": "s4",
          "style": "default",
          "popup": null
        },
        {
          "id": "c2-2",
          "label": "New Game →",
          "target": "s3",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s3",
      "num": 3,
      "title": "Character creation",
      "subtitle": "Customize both characters, choose van type and pet.",
      "playDesc": "Customize characters, van, and pet.",
      "image": "images/van-character-creation.png",
      "color": "var(--teal)",
      "x": -375,
      "y": 663,
      "showMenuBtn": true,
      "connections": [
        {
          "id": "c3-1",
          "label": "Hit the road →",
          "target": "s4",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s4",
      "num": 4,
      "title": "Driving",
      "subtitle": "The core experience. Map, stops, exploration all happen here.",
      "playDesc": "The open road. Navigate, explore, manage resources.",
      "image": "images/van-driving-road.png",
      "color": "var(--amber)",
      "x": 83,
      "y": 984,
      "showMenuBtn": true,
      "connections": [
        {
          "id": "c4-1",
          "label": "🗺 Map",
          "target": null,
          "style": "default",
          "popup": "popup-map"
        },
        {
          "id": "c4-2",
          "label": "🏠 You're home →",
          "target": "s7",
          "style": "teal",
          "popup": null
        },
        {
          "id": "c4-3",
          "label": "Find a spot to rest →",
          "target": "s5",
          "style": "next",
          "popup": null
        }
      ],
      "popups": [
        {
          "id": "popup-map",
          "title": "Map",
          "image": "images/van-map.png",
          "aspectRatio": "4/3"
        }
      ]
    },
    {
      "id": "s5",
      "num": 5,
      "title": "Camp setup",
      "subtitle": "Cook dinner, set up camp, prepare for the night.",
      "playDesc": "Cook dinner, set up camp, get ready for the night.",
      "image": "images/van-camp-setup.png",
      "color": "var(--purple)",
      "x": 671,
      "y": 813,
      "showMenuBtn": true,
      "connections": [
        {
          "id": "c5-1",
          "label": "Go to sleep →",
          "target": "s6",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s6",
      "num": 6,
      "title": "Sleep timelapse",
      "subtitle": "Watch the night pass. Events may interrupt depending on where you parked.",
      "playDesc": "The night passes in timelapse. Events may interrupt your rest.",
      "image": "images/van-night-watch.png",
      "color": "var(--purple)",
      "x": 658,
      "y": 1210,
      "showMenuBtn": true,
      "connections": [
        {
          "id": "c6-1",
          "label": "Morning — drive on →",
          "target": "s4",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s8",
      "num": 8,
      "title": "Game over",
      "subtitle": "The trip failed. The pet rewinds time — back to the start, but with legacy.",
      "playDesc": "The trip falls apart. But the pet won't let it end here...",
      "image": "images/van-game-over.png",
      "color": "var(--accent)",
      "x": -126,
      "y": 1513,
      "showMenuBtn": false,
      "connections": [
        {
          "id": "c8-1",
          "label": "Try again ↺",
          "target": "s2",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    },
    {
      "id": "s7",
      "num": 7,
      "title": "End-game gallery",
      "subtitle": "Visual diary of the journey. Photos, stats, moments.",
      "playDesc": "Your journey, laid out as a visual diary. You made it home.",
      "image": "images/van-arrival-home.png",
      "color": "var(--blue)",
      "x": 324,
      "y": 1530,
      "showMenuBtn": true,
      "connections": [
        {
          "id": "c7-1",
          "label": "Play again ↺",
          "target": "s1",
          "style": "next",
          "popup": null
        }
      ],
      "popups": []
    }
  ],
  "canvasConnections": [
    {
      "from": "s1",
      "to": "s2"
    },
    {
      "from": "s2",
      "to": "s3"
    },
    {
      "from": "s3",
      "to": "s4"
    },
    {
      "from": "s4",
      "to": "s5"
    },
    {
      "from": "s5",
      "to": "s6"
    },
    {
      "from": "s6",
      "to": "s4"
    },
    {
      "from": "s4",
      "to": "s7"
    },
    {
      "from": "s2",
      "to": "s4"
    },
    {
      "from": "s4",
      "to": "s8"
    }
  ]
};
