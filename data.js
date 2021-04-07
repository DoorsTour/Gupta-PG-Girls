var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.1382838988958532,
        "pitch": 0.011749250422568025,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.369015657059439,
          "pitch": 0.15674325467035288,
          "rotation": 1.5707963267948966,
          "target": "2-office"
        },
        {
          "yaw": -3.067839502289834,
          "pitch": 0.10538766330354932,
          "rotation": 0,
          "target": "1-lobby-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby-1",
      "name": "Lobby 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.854587360518307,
        "pitch": 0.15741721521129293,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 0.06593799213227491,
          "pitch": 0.14134499616155694,
          "rotation": 0,
          "target": "0-reception"
        },
        {
          "yaw": 1.1881767246975716,
          "pitch": 0.1894073701519563,
          "rotation": 0,
          "target": "3-mess"
        },
        {
          "yaw": -2.859339314474944,
          "pitch": 0.1549519059933111,
          "rotation": 0,
          "target": "4-lobby-2"
        },
        {
          "yaw": 2.46024532159713,
          "pitch": -0.1336608917748876,
          "rotation": 0,
          "target": "14-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-office",
      "name": "Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.12699612449898012,
        "pitch": 0.3130705955097035,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 2.974727727281813,
          "pitch": 0.24949408118123628,
          "rotation": 0,
          "target": "0-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mess",
      "name": "Mess",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.577405328017603,
        "pitch": 0.18545262999520418,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -0.3559403119190332,
          "pitch": 0.02339656778553767,
          "rotation": 0,
          "target": "1-lobby-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lobby-2",
      "name": "Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.658499859226655,
        "pitch": 0.13213618943023064,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -0.9650355662889432,
          "pitch": 0.20581458303039035,
          "rotation": 3.141592653589793,
          "target": "1-lobby-1"
        },
        {
          "yaw": -1.9536221255026476,
          "pitch": 0.0755058401756461,
          "rotation": 4.71238898038469,
          "target": "5-lobby-3"
        },
        {
          "yaw": 1.6628360799154773,
          "pitch": 0.39087003946202437,
          "rotation": 3.141592653589793,
          "target": "14-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lobby-3",
      "name": "Lobby 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.05204759200778675,
        "pitch": 0.06138639127641454,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.375744396120563,
          "pitch": 0.22105614442810406,
          "rotation": 1.5707963267948966,
          "target": "4-lobby-2"
        },
        {
          "yaw": -3.0611206651163823,
          "pitch": 0.2033528627911565,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": 0.22756575350642905,
          "pitch": 0.17645078786065227,
          "rotation": 0,
          "target": "10-room-2"
        },
        {
          "yaw": 0.5191179330285589,
          "pitch": 0.1828894823501166,
          "rotation": 1.5707963267948966,
          "target": "7-room-1"
        },
        {
          "yaw": -2.710994341409359,
          "pitch": 0.19791600527517517,
          "rotation": 0,
          "target": "12-room-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.8101101862070585,
        "pitch": 0.19840293986275448,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 1.1426943423673421,
          "pitch": 0.23804262691970912,
          "rotation": 0,
          "target": "5-lobby-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-room-1",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6120731910924135,
        "pitch": 0.21792168903126807,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -1.8838638312344003,
          "pitch": 0.10897654273386337,
          "rotation": 0,
          "target": "5-lobby-3"
        },
        {
          "yaw": 1.6875028668083472,
          "pitch": 0.22117669734663004,
          "rotation": 6.283185307179586,
          "target": "8-washroom-1"
        },
        {
          "yaw": 2.3616569891270105,
          "pitch": 0.1937938780264723,
          "rotation": 0,
          "target": "9-balcony1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-washroom-1",
      "name": "Washroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4733747389363367,
        "pitch": 0.08688394010238198,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "9-balcony1",
      "name": "Balcony1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.38987355451711103,
        "pitch": 0.16183617434429642,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -1.465476043723303,
          "pitch": 0.15754655034082177,
          "rotation": 0,
          "target": "7-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.7225670270978952,
        "pitch": 0.11017164065341589,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.473782065864407,
          "pitch": 0.09974847473329795,
          "rotation": 4.71238898038469,
          "target": "5-lobby-3"
        },
        {
          "yaw": -0.3143743783391315,
          "pitch": 0.17834967931995926,
          "rotation": 0,
          "target": "11-balcony-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony-2",
      "name": "Balcony 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5183940163975169,
        "pitch": 0.024554556510565817,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -1.4890161904786048,
          "pitch": 0.06698276048610197,
          "rotation": 0,
          "target": "10-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-room-3",
      "name": "Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.15618208986445836,
        "pitch": 0.17500917494773027,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -1.5250453927354872,
          "pitch": 0.2653827030734561,
          "rotation": 0,
          "target": "5-lobby-3"
        },
        {
          "yaw": 0.9021846657053381,
          "pitch": 0.2393382195123941,
          "rotation": 0,
          "target": "13-wahroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-wahroom-3",
      "name": "Wahroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.9001625129027158,
        "pitch": 0.07369857307375582,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -0.5597860428055625,
          "pitch": 0.16928088203420621,
          "rotation": 0,
          "target": "12-room-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1825212904168296,
        "pitch": -0.11348697710016964,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -3.075135610053028,
          "pitch": 0.5881968333826464,
          "rotation": 3.141592653589793,
          "target": "1-lobby-1"
        },
        {
          "yaw": 2.6168839880732016,
          "pitch": -0.1253109915680337,
          "rotation": 0,
          "target": "4-lobby-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
