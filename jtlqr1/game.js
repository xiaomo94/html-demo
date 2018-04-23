var _STRINGS = {
        Ad: {
            Mobile: {
                Preroll: {
                    ReadyIn: "The game is ready in ",
                    Loading: "Your game is loading...",
                    Close: "Close"
                },
                Header: {
                    ReadyIn: "The game is ready in ",
                    Loading: "Your game is loading...",
                    Close: "Close"
                },
                End: {
                    ReadyIn: "Advertisement ends in ",
                    Loading: "Please wait ...",
                    Close: "Close"
                }
            }
        },
        Splash: {
            Loading: "Loading ...",
            LogoLine1: "Some text here",
            LogoLine2: "powered by MarketJS",
            LogoLine3: "none"
        },
        Game: {
            SelectPlayer: "Select Player",
            Win: "You win!",
            Lose: "You lose!",
            Score: "SCORE",
            Time: "TIME",
            "STREET SHOOTER": "STREET SHOOTER",
            "ARCADE MODE": "ARCADE MODE",
            "TRAINING MODE": "TRAINING MODE",
            "PLEASE SELECT SHOOTING ANGLE:": "PLEASE SELECT SHOOTING ANGLE:",
            "Your Score": "Your Score",
            "High Score": "High Score",
            "Total Shots": "Total Shots",
            Baskets: "Baskets",
            Misses: "Misses",
            Bonus: "Bonus",
            Accuracy: "Accuracy",
            RESUME: "RESUME",
            RESTART: "RESTART",
            "MAIN MENU": "MAIN MENU",
            "MORE GAMES": "MORE GAMES",
            "START GAME": "START GAME",
            "GAME PAUSED": "GAME PAUSED",
            "GAME OVER": "GAME OVER",
            BACK: "BACK",
            PLAY: "PLAY",
            "GO!": "GO!",
            "SWIPE TO SHOOT": "SWIPE TO SHOOT"
        },
        Results: {
            Title: "High score"
        }
    },
    _SPRITESHEETS = {
        UI: {
            frames: {
                "ball.png": {
                    frame: {
                        x: 159,
                        y: 514,
                        w: 41,
                        h: 41
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 42,
                        h: 41
                    },
                    sourceSize: {
                        w: 42,
                        h: 41
                    }
                },
                "button-left.png": {
                    frame: {
                        x: 0,
                        y: 633,
                        w: 261,
                        h: 95
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 261,
                        h: 95
                    },
                    sourceSize: {
                        w: 261,
                        h: 95
                    }
                },
                "button-right.png": {
                    frame: {
                        x: 0,
                        y: 296,
                        w: 252,
                        h: 95
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 252,
                        h: 95
                    },
                    sourceSize: {
                        w: 252,
                        h: 95
                    }
                },
                "finger.png": {
                    frame: {
                        x: 0,
                        y: 514,
                        w: 80,
                        h: 76
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 80,
                        h: 76
                    },
                    sourceSize: {
                        w: 80,
                        h: 76
                    }
                },
                "logo.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 419,
                        h: 232
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 419,
                        h: 232
                    },
                    sourceSize: {
                        w: 419,
                        h: 232
                    }
                },
                "menu-button.png": {
                    frame: {
                        x: 0,
                        y: 234,
                        w: 261,
                        h: 60
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 261,
                        h: 60
                    },
                    sourceSize: {
                        w: 261,
                        h: 60
                    }
                },
                "pause.png": {
                    frame: {
                        x: 0,
                        y: 592,
                        w: 31,
                        h: 31
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 31,
                        h: 31
                    },
                    sourceSize: {
                        w: 31,
                        h: 31
                    }
                },
                "player-avatar.png": {
                    frame: {
                        x: 421,
                        y: 0,
                        w: 310,
                        h: 631
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 310,
                        h: 631
                    },
                    sourceSize: {
                        w: 310,
                        h: 631
                    }
                },
                "portrait.png": {
                    frame: {
                        x: 82,
                        y: 514,
                        w: 75,
                        h: 75
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 75,
                        h: 75
                    },
                    sourceSize: {
                        w: 75,
                        h: 75
                    }
                },
                "sound-off.png": {
                    frame: {
                        x: 66,
                        y: 592,
                        w: 31,
                        h: 31
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 31,
                        h: 31
                    },
                    sourceSize: {
                        w: 31,
                        h: 31
                    }
                },
                "sound-on.png": {
                    frame: {
                        x: 33,
                        y: 592,
                        w: 31,
                        h: 31
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 31,
                        h: 31
                    },
                    sourceSize: {
                        w: 31,
                        h: 31
                    }
                },
                "thumbnail_basketfield_angle_1.jpg": {
                    frame: {
                        x: 263,
                        y: 234,
                        w: 119,
                        h: 119
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 119,
                        h: 119
                    },
                    sourceSize: {
                        w: 119,
                        h: 119
                    }
                },
                "thumbnail_basketfield_angle_2.jpg": {
                    frame: {
                        x: 0,
                        y: 393,
                        w: 119,
                        h: 119
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 119,
                        h: 119
                    },
                    sourceSize: {
                        w: 119,
                        h: 119
                    }
                },
                "thumbnail_basketfield_angle_3.jpg": {
                    frame: {
                        x: 121,
                        y: 393,
                        w: 119,
                        h: 119
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 119,
                        h: 119
                    },
                    sourceSize: {
                        w: 119,
                        h: 119
                    }
                },
                "thumbnail_basketfield_angle_4.jpg": {
                    frame: {
                        x: 263,
                        y: 514,
                        w: 119,
                        h: 119
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 119,
                        h: 119
                    },
                    sourceSize: {
                        w: 119,
                        h: 119
                    }
                },
                "thumbnail_basketfield_angle_5.jpg": {
                    frame: {
                        x: 242,
                        y: 393,
                        w: 119,
                        h: 119
                    },
                    spriteSourceSize: {
                        x: 0,
                        y: 0,
                        w: 119,
                        h: 119
                    },
                    sourceSize: {
                        w: 119,
                        h: 119
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/ui.png",
                size: {
                    w: 733,
                    h: 730
                },
                scale: "1"
            }
        },
        Basketball: {
            frames: {
                "ball_camera0010000.png": {
                    frame: {
                        x: 90,
                        y: 270,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010001.png": {
                    frame: {
                        x: 225,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010002.png": {
                    frame: {
                        x: 225,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010003.png": {
                    frame: {
                        x: 225,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010004.png": {
                    frame: {
                        x: 225,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010005.png": {
                    frame: {
                        x: 225,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010006.png": {
                    frame: {
                        x: 180,
                        y: 270,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010007.png": {
                    frame: {
                        x: 180,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010008.png": {
                    frame: {
                        x: 180,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010009.png": {
                    frame: {
                        x: 180,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010010.png": {
                    frame: {
                        x: 180,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010011.png": {
                    frame: {
                        x: 180,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010012.png": {
                    frame: {
                        x: 180,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010013.png": {
                    frame: {
                        x: 135,
                        y: 270,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010014.png": {
                    frame: {
                        x: 135,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010015.png": {
                    frame: {
                        x: 135,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010016.png": {
                    frame: {
                        x: 135,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010017.png": {
                    frame: {
                        x: 135,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010018.png": {
                    frame: {
                        x: 135,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010019.png": {
                    frame: {
                        x: 135,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010020.png": {
                    frame: {
                        x: 225,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010021.png": {
                    frame: {
                        x: 90,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010022.png": {
                    frame: {
                        x: 90,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010023.png": {
                    frame: {
                        x: 90,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010024.png": {
                    frame: {
                        x: 90,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010025.png": {
                    frame: {
                        x: 90,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010026.png": {
                    frame: {
                        x: 90,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010027.png": {
                    frame: {
                        x: 45,
                        y: 270,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010028.png": {
                    frame: {
                        x: 45,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010029.png": {
                    frame: {
                        x: 45,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010030.png": {
                    frame: {
                        x: 45,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010031.png": {
                    frame: {
                        x: 45,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010032.png": {
                    frame: {
                        x: 45,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010033.png": {
                    frame: {
                        x: 45,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010034.png": {
                    frame: {
                        x: 0,
                        y: 270,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010035.png": {
                    frame: {
                        x: 0,
                        y: 225,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010036.png": {
                    frame: {
                        x: 0,
                        y: 180,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010037.png": {
                    frame: {
                        x: 0,
                        y: 135,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010038.png": {
                    frame: {
                        x: 0,
                        y: 90,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010039.png": {
                    frame: {
                        x: 0,
                        y: 45,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                },
                "ball_camera0010040.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 44,
                        h: 44
                    },
                    spriteSourceSize: {
                        x: 38,
                        y: 61,
                        w: 120,
                        h: 160
                    },
                    sourceSize: {
                        w: 120,
                        h: 160
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/basketball.png",
                size: {
                    w: 270,
                    h: 315
                },
                scale: "1"
            }
        },
        "Player-Pick": {
            frames: {
                "shooter_00.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 301,
                        h: 243
                    },
                    spriteSourceSize: {
                        x: 128,
                        y: 350,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_01.png": {
                    frame: {
                        x: 0,
                        y: 244,
                        w: 284,
                        h: 244
                    },
                    spriteSourceSize: {
                        x: 145,
                        y: 349,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_02.png": {
                    frame: {
                        x: 263,
                        y: 702,
                        w: 259,
                        h: 262
                    },
                    spriteSourceSize: {
                        x: 148,
                        y: 331,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_03.png": {
                    frame: {
                        x: 285,
                        y: 244,
                        w: 257,
                        h: 243
                    },
                    spriteSourceSize: {
                        x: 155,
                        y: 350,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_04.png": {
                    frame: {
                        x: 302,
                        y: 0,
                        w: 252,
                        h: 215
                    },
                    spriteSourceSize: {
                        x: 164,
                        y: 378,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_05.png": {
                    frame: {
                        x: 278,
                        y: 489,
                        w: 237,
                        h: 190
                    },
                    spriteSourceSize: {
                        x: 173,
                        y: 403,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_06.png": {
                    frame: {
                        x: 0,
                        y: 702,
                        w: 262,
                        h: 203
                    },
                    spriteSourceSize: {
                        x: 176,
                        y: 390,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_07.png": {
                    frame: {
                        x: 0,
                        y: 489,
                        w: 277,
                        h: 212
                    },
                    spriteSourceSize: {
                        x: 142,
                        y: 381,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_08.png": {
                    frame: {
                        x: 523,
                        y: 488,
                        w: 242,
                        h: 222
                    },
                    spriteSourceSize: {
                        x: 133,
                        y: 371,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_09.png": {
                    frame: {
                        x: 543,
                        y: 216,
                        w: 222,
                        h: 229
                    },
                    spriteSourceSize: {
                        x: 120,
                        y: 364,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_10.png": {
                    frame: {
                        x: 523,
                        y: 711,
                        w: 227,
                        h: 235
                    },
                    spriteSourceSize: {
                        x: 107,
                        y: 358,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_11.png": {
                    frame: {
                        x: 766,
                        y: 0,
                        w: 186,
                        h: 288
                    },
                    spriteSourceSize: {
                        x: 102,
                        y: 305,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_12.png": {
                    frame: {
                        x: 766,
                        y: 289,
                        w: 183,
                        h: 295
                    },
                    spriteSourceSize: {
                        x: 103,
                        y: 298,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_13.png": {
                    frame: {
                        x: 766,
                        y: 585,
                        w: 180,
                        h: 294
                    },
                    spriteSourceSize: {
                        x: 106,
                        y: 299,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/player/player-pick.png",
                size: {
                    w: 953,
                    h: 965
                },
                scale: "1"
            }
        },
        "Player-Ready": {
            frames: {
                "shooter_14.png": {
                    frame: {
                        x: 553,
                        y: 583,
                        w: 179,
                        h: 291
                    },
                    spriteSourceSize: {
                        x: 107,
                        y: 302,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_15.png": {
                    frame: {
                        x: 553,
                        y: 291,
                        w: 179,
                        h: 290
                    },
                    spriteSourceSize: {
                        x: 106,
                        y: 303,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_16.png": {
                    frame: {
                        x: 553,
                        y: 0,
                        w: 179,
                        h: 289
                    },
                    spriteSourceSize: {
                        x: 106,
                        y: 304,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_17.png": {
                    frame: {
                        x: 370,
                        y: 571,
                        w: 181,
                        h: 287
                    },
                    spriteSourceSize: {
                        x: 104,
                        y: 306,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_18.png": {
                    frame: {
                        x: 186,
                        y: 285,
                        w: 182,
                        h: 286
                    },
                    spriteSourceSize: {
                        x: 103,
                        y: 307,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_19.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 184,
                        h: 285
                    },
                    spriteSourceSize: {
                        x: 102,
                        y: 308,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_20.png": {
                    frame: {
                        x: 0,
                        y: 287,
                        w: 184,
                        h: 284
                    },
                    spriteSourceSize: {
                        x: 102,
                        y: 309,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_21.png": {
                    frame: {
                        x: 0,
                        y: 573,
                        w: 184,
                        h: 284
                    },
                    spriteSourceSize: {
                        x: 102,
                        y: 309,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_22.png": {
                    frame: {
                        x: 186,
                        y: 0,
                        w: 183,
                        h: 283
                    },
                    spriteSourceSize: {
                        x: 103,
                        y: 310,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_23.png": {
                    frame: {
                        x: 186,
                        y: 573,
                        w: 182,
                        h: 283
                    },
                    spriteSourceSize: {
                        x: 104,
                        y: 310,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_24.png": {
                    frame: {
                        x: 370,
                        y: 285,
                        w: 181,
                        h: 284
                    },
                    spriteSourceSize: {
                        x: 105,
                        y: 309,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/player/player-ready.png",
                size: {
                    w: 734,
                    h: 876
                },
                scale: "1"
            }
        },
        "Player-Shoot": {
            frames: {
                "shooter_29.png": {
                    frame: {
                        x: 1151,
                        y: 286,
                        w: 183,
                        h: 288
                    },
                    spriteSourceSize: {
                        x: 106,
                        y: 305,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_30.png": {
                    frame: {
                        x: 1151,
                        y: 0,
                        w: 185,
                        h: 284
                    },
                    spriteSourceSize: {
                        x: 105,
                        y: 309,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_31.png": {
                    frame: {
                        x: 1134,
                        y: 874,
                        w: 188,
                        h: 282
                    },
                    spriteSourceSize: {
                        x: 103,
                        y: 311,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_32.png": {
                    frame: {
                        x: 944,
                        y: 595,
                        w: 192,
                        h: 277
                    },
                    spriteSourceSize: {
                        x: 100,
                        y: 316,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_33.png": {
                    frame: {
                        x: 938,
                        y: 1001,
                        w: 194,
                        h: 274
                    },
                    spriteSourceSize: {
                        x: 99,
                        y: 319,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_34.png": {
                    frame: {
                        x: 744,
                        y: 0,
                        w: 197,
                        h: 277
                    },
                    spriteSourceSize: {
                        x: 99,
                        y: 316,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_35.png": {
                    frame: {
                        x: 730,
                        y: 1001,
                        w: 206,
                        h: 277
                    },
                    spriteSourceSize: {
                        x: 96,
                        y: 316,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_36.png": {
                    frame: {
                        x: 513,
                        y: 970,
                        w: 215,
                        h: 278
                    },
                    spriteSourceSize: {
                        x: 94,
                        y: 315,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_37.png": {
                    frame: {
                        x: 266,
                        y: 0,
                        w: 225,
                        h: 283
                    },
                    spriteSourceSize: {
                        x: 91,
                        y: 310,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_38.png": {
                    frame: {
                        x: 263,
                        y: 363,
                        w: 240,
                        h: 280
                    },
                    spriteSourceSize: {
                        x: 85,
                        y: 313,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_39.png": {
                    frame: {
                        x: 262,
                        y: 970,
                        w: 249,
                        h: 277
                    },
                    spriteSourceSize: {
                        x: 82,
                        y: 316,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_40.png": {
                    frame: {
                        x: 262,
                        y: 677,
                        w: 256,
                        h: 291
                    },
                    spriteSourceSize: {
                        x: 69,
                        y: 302,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_41.png": {
                    frame: {
                        x: 0,
                        y: 363,
                        w: 261,
                        h: 312
                    },
                    spriteSourceSize: {
                        x: 59,
                        y: 281,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_42.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 264,
                        h: 361
                    },
                    spriteSourceSize: {
                        x: 40,
                        y: 232,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_43.png": {
                    frame: {
                        x: 0,
                        y: 677,
                        w: 260,
                        h: 412
                    },
                    spriteSourceSize: {
                        x: 42,
                        y: 181,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_44.png": {
                    frame: {
                        x: 505,
                        y: 0,
                        w: 237,
                        h: 430
                    },
                    spriteSourceSize: {
                        x: 48,
                        y: 163,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_45.png": {
                    frame: {
                        x: 520,
                        y: 432,
                        w: 208,
                        h: 468
                    },
                    spriteSourceSize: {
                        x: 50,
                        y: 125,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_48.png": {
                    frame: {
                        x: 730,
                        y: 432,
                        w: 212,
                        h: 567
                    },
                    spriteSourceSize: {
                        x: 47,
                        y: 26,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_49.png": {
                    frame: {
                        x: 944,
                        y: 0,
                        w: 205,
                        h: 593
                    },
                    spriteSourceSize: {
                        x: 55,
                        y: 0,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/player/player-shoot.png",
                size: {
                    w: 1338,
                    h: 1280
                },
                scale: "1"
            }
        },
        "Player-Stand": {
            frames: {
                "shooter_50.png": {
                    frame: {
                        x: 923,
                        y: 0,
                        w: 204,
                        h: 593
                    },
                    spriteSourceSize: {
                        x: 57,
                        y: 0,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_51.png": {
                    frame: {
                        x: 705,
                        y: 0,
                        w: 217,
                        h: 588
                    },
                    spriteSourceSize: {
                        x: 58,
                        y: 5,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_52.png": {
                    frame: {
                        x: 474,
                        y: 413,
                        w: 230,
                        h: 499
                    },
                    spriteSourceSize: {
                        x: 60,
                        y: 94,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_53.png": {
                    frame: {
                        x: 0,
                        y: 564,
                        w: 237,
                        h: 457
                    },
                    spriteSourceSize: {
                        x: 62,
                        y: 136,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_54.png": {
                    frame: {
                        x: 257,
                        y: 0,
                        w: 231,
                        h: 412
                    },
                    spriteSourceSize: {
                        x: 100,
                        y: 181,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_55.png": {
                    frame: {
                        x: 238,
                        y: 564,
                        w: 235,
                        h: 331
                    },
                    spriteSourceSize: {
                        x: 106,
                        y: 262,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_56.png": {
                    frame: {
                        x: 0,
                        y: 0,
                        w: 256,
                        h: 289
                    },
                    spriteSourceSize: {
                        x: 69,
                        y: 304,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                },
                "shooter_57.png": {
                    frame: {
                        x: 0,
                        y: 290,
                        w: 249,
                        h: 273
                    },
                    spriteSourceSize: {
                        x: 82,
                        y: 320,
                        w: 438,
                        h: 593
                    },
                    sourceSize: {
                        w: 438,
                        h: 593
                    }
                }
            },
            meta: {
                image: "media/graphics/sprites/player/player-stand.png",
                size: {
                    w: 1128,
                    h: 1022
                },
                scale: "1"
            }
        }
    };
var _SETTINGS = {
    API: {
        Enabled: !1,
        Log: {
            Events: {
                InitializeGame: !1,
                EndGame: !1,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://marketjs.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !0,
            NewWindow: !0,
            Width: 280,
            Height: 34
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !1
    }
};
var MobileAdInGamePreroll = { 
};
var MobileAdInGameHeader = { 
};
var MobileAdInGameFooter = { 
};
var MobileAdInGameEnd = { 
};
(function(b, c) {
    function d(b, s, p) {
        if (p === c && 1 === b.nodeType)
            if (p = "data-" + s.replace(qc, "-$1").toLowerCase(), p = b.getAttribute(p), "string" == typeof p) {
                try {
                    p = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : +p + "" === p ? +p : rc.test(p) ? f.parseJSON(p) : p
                } catch (d) {}
                f.data(b, s, p)
            } else p = c;
        return p
    }

    function e(b) {
        for (var c in b)
            if (!("data" === c && f.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function l() {
        return !0
    }

    function q(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function t(b, c) {
        do b = b[c]; while (b && 1 !== b.nodeType);
        return b
    }

    function j(b, c, p) {
        c = c || 0;
        if (f.isFunction(c)) return f.grep(b, function(b, v) {
            return !!c.call(b, v, b) === p
        });
        if (c.nodeType) return f.grep(b, function(b) {
            return b === c === p
        });
        if ("string" == typeof c) {
            var d = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (tc.test(c)) return f.filter(c, d, !p);
            c = f.filter(c, d)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, c) === p
        })
    }

    function m(b) {
        var c = sb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function n(b, c) {
        if (1 === c.nodeType && f.hasData(b)) {
            var p, d, j;
            d = f._data(b);
            var e = f._data(c, d),
                K = d.events;
            if (K)
                for (p in delete e.handle, e.events = {}, K) {
                    d = 0;
                    for (j = K[p].length; d < j; d++) f.event.add(c, p, K[p][d])
                }
            e.data && (e.data = f.extend({}, e.data))
        }
    }

    function u(b, c) {
        var p;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), p = c.nodeName.toLowerCase(), "object" === p ? (c.parentNode && (c.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(c.innerHTML) && (c.innerHTML = b.innerHTML)) : "input" === p && tb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === p ? c.selected = b.defaultSelected : "input" === p || "textarea" === p ? c.defaultValue = b.defaultValue : "script" === p && c.text !== b.text && (c.text = b.text), c.removeAttribute(f.expando))
    }

    function r(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function x(b) {
        tb.test(b.type) && (b.defaultChecked = b.checked)
    }

    function z(b, c) {
        if (c in b) return c;
        for (var p = c.charAt(0).toUpperCase() + c.slice(1), f = c, d = ub.length; d--;)
            if (c = ub[d] + p, c in b) return c;
        return f
    }

    function B(b, c) {
        return b = c || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function E(b, c) {
        for (var p, d, j = [], e = 0, K = b.length; e < K; e++) p = b[e], p.style && (j[e] = f._data(p, "olddisplay"), c ? (!j[e] && "none" === p.style.display && (p.style.display = ""), "" === p.style.display && B(p) && (j[e] = f._data(p, "olddisplay", ca(p.nodeName)))) : (d = M(p, "display"), !j[e] && "none" !== d && f._data(p, "olddisplay", d)));
        for (e = 0; e < K; e++)
            if (p = b[e], p.style && (!c || "none" === p.style.display || "" === p.style.display)) p.style.display = c ? j[e] || "" : "none";
        return b
    }

    function A(b, c, p) {
        return (b = uc.exec(c)) ? Math.max(0, b[1] - (p || 0)) + (b[2] || "px") : c
    }

    function C(b, c, p, d) {
        c = p === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var j = 0; 4 > c; c += 2) "margin" === p && (j += f.css(b, p + da[c], !0)), d ? ("content" === p && (j -= parseFloat(M(b, "padding" + da[c])) || 0), "margin" !== p && (j -= parseFloat(M(b, "border" + da[c] + "Width")) || 0)) : (j += parseFloat(M(b, "padding" + da[c])) || 0, "padding" !== p && (j += parseFloat(M(b, "border" + da[c] + "Width")) || 0));
        return j
    }

    function Y(b, c, p) {
        var d = "width" === c ? b.offsetWidth : b.offsetHeight,
            j = !0,
            e = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = M(b, c);
            if (0 > d || null == d) d = b.style[c];
            if (va.test(d)) return d;
            j = e && (f.support.boxSizingReliable || d === b.style[c]);
            d = parseFloat(d) || 0
        }
        return d + C(b, c, p || (e ? "border" : "content"), j) + "px"
    }

    function ca(b) {
        if (Ua[b]) return Ua[b];
        var c = f("<" + b + ">").appendTo(y.body),
            p = c.css("display");
        c.remove();
        if ("none" === p || "" === p) {
            ka = y.body.appendChild(ka || f.extend(y.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!la || !ka.createElement) la = (ka.contentWindow || ka.contentDocument).document, la.write("<!doctype html><html><body>"), la.close();
            c = la.body.appendChild(la.createElement(b));
            p = M(c, "display");
            y.body.removeChild(ka)
        }
        return Ua[b] = p, p
    }

    function F(b, c, p, d) {
        var j;
        if (f.isArray(c)) f.each(c, function(c, s) {
            p || vc.test(b) ? d(b, s) : F(b + "[" + ("object" == typeof s ? c : "") + "]", s, p, d)
        });
        else if (!p && "object" === f.type(c))
            for (j in c) F(b + "[" + j + "]", c[j], p, d);
        else d(b, c)
    }

    function vb(b) {
        return function(c, p) {
            "string" != typeof c && (p = c, c = "*");
            var d, j, e = c.toLowerCase().split(ea),
                K = 0,
                m = e.length;
            if (f.isFunction(p))
                for (; K < m; K++) d = e[K], (j = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[j ? "unshift" : "push"](p)
        }
    }

    function wa(b, s, p, f, d, j) {
        d = d || s.dataTypes[0];
        j = j || {};
        j[d] = !0;
        var e;
        d = b[d];
        for (var m = 0, g = d ? d.length : 0, n = b === Va; m < g && (n || !e); m++) e = d[m](s, p, f), "string" == typeof e && (!n || j[e] ? e = c : (s.dataTypes.unshift(e), e = wa(b, s, p, f, e, j)));
        return (n || !e) && !j["*"] && (e = wa(b, s, p, f, "*", j)), e
    }

    function wb(b, s) {
        var p, d, j = f.ajaxSettings.flatOptions || {};
        for (p in s) s[p] !== c && ((j[p] ? b : d || (d = {}))[p] = s[p]);
        d && f.extend(!0, b, d)
    }

    function xb() {
        try {
            return new b.XMLHttpRequest
        } catch (v) {}
    }

    function yb() {
        return setTimeout(function() {
            xa = c
        }, 0), xa = f.now()
    }

    function zb(b, c, p) {
        var d, j = 0,
            e = ya.length,
            K = f.Deferred().always(function() {
                delete m.elem
            }),
            m = function() {
                for (var c = xa || yb(), c = Math.max(0, g.startTime + g.duration - c), s = 1 - (c / g.duration || 0), p = 0, d = g.tweens.length; p < d; p++) g.tweens[p].run(s);
                return K.notifyWith(b, [g, s, c]), 1 > s && d ? c : (K.resolveWith(b, [g]), !1)
            },
            g = K.promise({
                elem: b,
                props: f.extend({}, c),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, p),
                originalProperties: c,
                originalOptions: p,
                startTime: xa || yb(),
                duration: p.duration,
                tweens: [],
                createTween: function(c, s) {
                    var p = f.Tween(b, g.opts, c, s, g.opts.specialEasing[c] || g.opts.easing);
                    return g.tweens.push(p), p
                },
                stop: function(c) {
                    for (var s = 0, p = c ? g.tweens.length : 0; s < p; s++) g.tweens[s].run(1);
                    return c ? K.resolveWith(b, [g, c]) : K.rejectWith(b, [g, c]), this
                }
            });
        c = g.props;
        p = g.opts.specialEasing;
        var n, l, r, t;
        for (d in c)
            if (n = f.camelCase(d), l = p[n], r = c[d], f.isArray(r) && (l = r[1], r = c[d] = r[0]), d !== n && (c[n] = r, delete c[d]), (t = f.cssHooks[n]) && "expand" in t)
                for (d in r = t.expand(r), delete c[n], r) d in c || (c[d] = r[d], p[d] = l);
            else p[n] = l;
        for (; j < e; j++)
            if (d = ya[j].call(g, b, c, g.opts)) return d;
        var u = g;
        f.each(c, function(b, v) {
            for (var c = (qa[b] || []).concat(qa["*"]), s = 0, p = c.length; s < p && !c[s].call(u, b, v); s++);
        });
        return f.isFunction(g.opts.start) && g.opts.start.call(b, g), f.fx.timer(f.extend(m, {
            anim: g,
            queue: g.opts.queue,
            elem: b
        })), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function O(b, c, p, d, f) {
        return new O.prototype.init(b, c, p, d, f)
    }

    function za(b, c) {
        var p, d = {
                height: b
            },
            f = 0;
        for (c = c ? 1 : 0; 4 > f; f += 2 - c) p = da[f], d["margin" + p] = d["padding" + p] = b;
        return c && (d.opacity = d.width = b), d
    }

    function Ab(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Bb, Aa, y = b.document,
        xc = b.location,
        yc = b.navigator,
        zc = b.jQuery,
        Ac = b.$,
        Cb = Array.prototype.push,
        X = Array.prototype.slice,
        Db = Array.prototype.indexOf,
        Bc = Object.prototype.toString,
        Wa = Object.prototype.hasOwnProperty,
        Xa = String.prototype.trim,
        f = function(b, c) {
            return new f.fn.init(b, c, Bb)
        },
        Ba = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Cc = /\S/,
        ea = /\s+/,
        Dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Ec = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Fc = /^[\],:{}\s]*$/,
        Gc = /(?:^|:|,)(?:\s*\[)+/g,
        Hc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Ic = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Jc = /^-ms-/,
        Kc = /-([\da-z])/gi,
        Lc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Ca = function() {
            y.addEventListener ? (y.removeEventListener("DOMContentLoaded", Ca, !1), f.ready()) : "complete" === y.readyState && (y.detachEvent("onreadystatechange", Ca), f.ready())
        },
        Fb = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, s, p) {
            var d, j;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Ec.exec(b);
                if (d && (d[1] || !s)) {
                    if (d[1]) return s = s instanceof f ? s[0] : s, j = s && s.nodeType ? s.ownerDocument || s : y, b = f.parseHTML(d[1], j, !0), Eb.test(d[1]) && f.isPlainObject(s) && this.attr.call(b, s, !0), f.merge(this, b);
                    if ((s = y.getElementById(d[2])) && s.parentNode) {
                        if (s.id !== d[2]) return p.find(b);
                        this.length = 1;
                        this[0] = s
                    }
                    return this.context = y, this.selector = b, this
                }
                return !s || s.jquery ? (s || p).find(b) : this.constructor(s).find(b)
            }
            return f.isFunction(b) ? p.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return X.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, p) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + p : c && (b.selector = this.selector + "." + c + "(" + p + ")"), b
        },
        each: function(b, c) {
            return f.each(this, b, c)
        },
        ready: function(b) {
            return f.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(c, p) {
                return b.call(c, p, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Cb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, s, p, d, j, e, K = arguments[0] || {},
            m = 1,
            g = arguments.length,
            n = !1;
        "boolean" == typeof K && (n = K, K = arguments[1] || {}, m = 2);
        "object" != typeof K && !f.isFunction(K) && (K = {});
        for (g === m && (K = this, --m); m < g; m++)
            if (null != (b = arguments[m]))
                for (s in b) p = K[s], d = b[s], K !== d && (n && d && (f.isPlainObject(d) || (j = f.isArray(d))) ? (j ? (j = !1, e = p && f.isArray(p) ? p : []) : e = p && f.isPlainObject(p) ? p : {}, K[s] = f.extend(n, e, d)) : d !== c && (K[s] = d));
        return K
    };
    f.extend({
        noConflict: function(v) {
            return b.$ === f && (b.$ = Ac), v && b.jQuery === f && (b.jQuery = zc), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!y.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Aa.resolveWith(y, [f]), f.fn.trigger && f(y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Fb[Bc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !Wa.call(b, "constructor") && !Wa.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (s) {
                return !1
            }
            for (var p in b);
            return p === c || Wa.call(b, p)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, p) {
            var d;
            return !b || "string" != typeof b ? null : ("boolean" == typeof c && (p = c, c = 0), c = c || y, (d = Eb.exec(b)) ? [c.createElement(d[1])] : (d = f.buildFragment([b], c, p ? null : []), f.merge([], (d.cacheable ? f.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(v) {
            if (!v || "string" != typeof v) return null;
            v = f.trim(v);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(v);
            if (Fc.test(v.replace(Hc, "@").replace(Ic, "]").replace(Gc, ""))) return (new Function("return " + v))();
            f.error("Invalid JSON: " + v)
        },
        parseXML: function(v) {
            var s, p;
            if (!v || "string" != typeof v) return null;
            try {
                b.DOMParser ? (p = new DOMParser, s = p.parseFromString(v, "text/xml")) : (s = new ActiveXObject("Microsoft.XMLDOM"), s.async = "false", s.loadXML(v))
            } catch (d) {
                s = c
            }
            return (!s || !s.documentElement || s.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + v), s
        },
        noop: function() {},
        globalEval: function(v) {
            v && Cc.test(v) && (b.execScript || function(v) {
                b.eval.call(b, v)
            })(v)
        },
        camelCase: function(b) {
            return b.replace(Jc, "ms-").replace(Kc, Lc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, s, p) {
            var d, j = 0,
                e = b.length,
                m = e === c || f.isFunction(b);
            if (p)
                if (m)
                    for (d in b) {
                        if (!1 === s.apply(b[d], p)) break
                    } else
                        for (; j < e && !1 !== s.apply(b[j++], p););
                else if (m)
                for (d in b) {
                    if (!1 === s.call(b[d], d, b[d])) break
                } else
                    for (; j < e && !1 !== s.call(b[j], j, b[j++]););
            return b
        },
        trim: Xa && !Xa.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : Xa.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Dc, "")
        },
        makeArray: function(b, c) {
            var p, d = c || [];
            return null != b && (p = f.type(b), null == b.length || "string" === p || "function" === p || "regexp" === p || f.isWindow(b) ? Cb.call(d, b) : f.merge(d, b)), d
        },
        inArray: function(b, c, p) {
            var d;
            if (c) {
                if (Db) return Db.call(c, b, p);
                d = c.length;
                for (p = p ? 0 > p ? Math.max(0, d + p) : p : 0; p < d; p++)
                    if (p in c && c[p] === b) return p
            }
            return -1
        },
        merge: function(b, s) {
            var p = s.length,
                d = b.length,
                f = 0;
            if ("number" == typeof p)
                for (; f < p; f++) b[d++] = s[f];
            else
                for (; s[f] !== c;) b[d++] = s[f++];
            return b.length = d, b
        },
        grep: function(b, c, p) {
            var d, f = [],
                j = 0,
                e = b.length;
            for (p = !!p; j < e; j++) d = !!c(b[j], j), p !== d && f.push(b[j]);
            return f
        },
        map: function(b, s, p) {
            var d, j, e = [],
                m = 0,
                g = b.length;
            if (b instanceof f || g !== c && "number" == typeof g && (0 < g && b[0] && b[g - 1] || 0 === g || f.isArray(b)))
                for (; m < g; m++) d = s(b[m], m, p), null != d && (e[e.length] = d);
            else
                for (j in b) d = s(b[j], j, p), null != d && (e[e.length] = d);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(b, s) {
            var p, d, j;
            return "string" == typeof s && (p = b[s], s = b, b = p), f.isFunction(b) ? (d = X.call(arguments, 2), j = function() {
                return b.apply(s, d.concat(X.call(arguments)))
            }, j.guid = b.guid = b.guid || f.guid++, j) : c
        },
        access: function(b, s, p, d, j, e, m) {
            var g, n = null == p,
                l = 0,
                r = b.length;
            if (p && "object" == typeof p) {
                for (l in p) f.access(b, s, l, p[l], 1, e, d);
                j = 1
            } else if (d !== c) {
                g = m === c && f.isFunction(d);
                n && (g ? (g = s, s = function(b, c, v) {
                    return g.call(f(b), v)
                }) : (s.call(b, d), s = null));
                if (s)
                    for (; l < r; l++) s(b[l], p, g ? d.call(b[l], l, s(b[l], p)) : d, m);
                j = 1
            }
            return j ? b : n ? s.call(b) : r ? s(b[0], p) : e
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(c) {
        if (!Aa)
            if (Aa = f.Deferred(), "complete" === y.readyState) setTimeout(f.ready, 1);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", Ca, !1), b.addEventListener("load", f.ready, !1);
        else {
            y.attachEvent("onreadystatechange", Ca);
            b.attachEvent("onload", f.ready);
            var s = !1;
            try {
                s = null == b.frameElement && y.documentElement
            } catch (p) {}
            s && s.doScroll && function sc() {
                if (!f.isReady) {
                    try {
                        s.doScroll("left")
                    } catch (b) {
                        return setTimeout(sc, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Aa.promise(c)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Fb["[object " + c + "]"] = c.toLowerCase()
    });
    Bb = f(y);
    var Gb = {};
    f.Callbacks = function(b) {
        var s;
        if ("string" == typeof b) {
            if (!(s = Gb[b])) {
                s = b;
                var p = Gb[s] = {};
                s = (f.each(s.split(ea), function(b, c) {
                    p[c] = !0
                }), p)
            }
        } else s = f.extend({}, b);
        b = s;
        var d, j, e, m, g, n, l = [],
            r = !b.once && [],
            t = function(c) {
                d = b.memory && c;
                j = !0;
                n = m || 0;
                m = 0;
                g = l.length;
                for (e = !0; l && n < g; n++)
                    if (!1 === l[n].apply(c[0], c[1]) && b.stopOnFalse) {
                        d = !1;
                        break
                    }
                e = !1;
                l && (r ? r.length && t(r.shift()) : d ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var c = l.length;
                        (function wc(c) {
                            f.each(c, function(c, s) {
                                var p = f.type(s);
                                "function" === p && (!b.unique || !u.has(s)) ? l.push(s) : s && s.length && "string" !== p && wc(s)
                            })
                        })(arguments);
                        e ? g = l.length : d && (m = c, t(d))
                    }
                    return this
                },
                remove: function() {
                    return l && f.each(arguments, function(b, c) {
                        for (var v; - 1 < (v = f.inArray(c, l, v));) l.splice(v, 1), e && (v <= g && g--, v <= n && n--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, l)
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = r = d = c, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return r = c, d || u.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(b, c) {
                    return c = c || [], c = [b, c.slice ? c.slice() : c], l && (!j || r) && (e ? r.push(c) : t(c)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!j
                }
            };
        return u
    };
    f.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                p = "pending",
                d = {
                    state: function() {
                        return p
                    },
                    always: function() {
                        return j.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(v) {
                            f.each(c, function(c, s) {
                                var p = s[0],
                                    d = b[c];
                                j[s[1]](f.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(v.resolve).fail(v.reject).progress(v.notify) : v[p + "With"](this === j ? v : this, [b])
                                } : v[p])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, d) : d
                    }
                },
                j = {};
            return d.pipe = d.then, f.each(c, function(b, v) {
                var f = v[2],
                    e = v[3];
                d[v[1]] = f.add;
                e && f.add(function() {
                    p = e
                }, c[b ^ 1][2].disable, c[2][2].lock);
                j[v[0]] = f.fire;
                j[v[0] + "With"] = f.fireWith
            }), d.promise(j), b && b.call(j, j), j
        },
        when: function(b) {
            var c = 0,
                p = X.call(arguments),
                d = p.length,
                j = 1 !== d || b && f.isFunction(b.promise) ? d : 0,
                e = 1 === j ? b : f.Deferred(),
                m = function(b, c, v) {
                    return function(s) {
                        c[b] = this;
                        v[b] = 1 < arguments.length ? X.call(arguments) : s;
                        v === g ? e.notifyWith(c, v) : --j || e.resolveWith(c, v)
                    }
                },
                g, n, l;
            if (1 < d) {
                g = Array(d);
                n = Array(d);
                for (l = Array(d); c < d; c++) p[c] && f.isFunction(p[c].promise) ? p[c].promise().done(m(c, l, p)).fail(e.reject).progress(m(c, n, g)) : --j
            }
            return j || e.resolveWith(l, p), e.promise()
        }
    });
    var Mc = f,
        Ya, L, Da, fa, Ea, Fa, Q, ga, Ga, Za, ra, Hb, H = y.createElement("div");
    H.setAttribute("className", "t");
    H.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Da = H.getElementsByTagName("*");
    fa = H.getElementsByTagName("a")[0];
    fa.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Da || !Da.length) Ya = {};
    else {
        Ea = y.createElement("select");
        Fa = Ea.appendChild(y.createElement("option"));
        Q = H.getElementsByTagName("input")[0];
        L = {
            leadingWhitespace: 3 === H.firstChild.nodeType,
            tbody: !H.getElementsByTagName("tbody").length,
            htmlSerialize: !!H.getElementsByTagName("link").length,
            style: /top/.test(fa.getAttribute("style")),
            hrefNormalized: "/a" === fa.getAttribute("href"),
            opacity: /^0.5/.test(fa.style.opacity),
            cssFloat: !!fa.style.cssFloat,
            checkOn: "on" === Q.value,
            optSelected: Fa.selected,
            getSetAttribute: "t" !== H.className,
            enctype: !!y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === y.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        Q.checked = !0;
        L.noCloneChecked = Q.cloneNode(!0).checked;
        Ea.disabled = !0;
        L.optDisabled = !Fa.disabled;
        try {
            delete H.test
        } catch (Od) {
            L.deleteExpando = !1
        }!H.addEventListener && H.attachEvent && H.fireEvent && (H.attachEvent("onclick", Hb = function() {
            L.noCloneEvent = !1
        }), H.cloneNode(!0).fireEvent("onclick"), H.detachEvent("onclick", Hb));
        Q = y.createElement("input");
        Q.value = "t";
        Q.setAttribute("type", "radio");
        L.radioValue = "t" === Q.value;
        Q.setAttribute("checked", "checked");
        Q.setAttribute("name", "t");
        H.appendChild(Q);
        ga = y.createDocumentFragment();
        ga.appendChild(H.lastChild);
        L.checkClone = ga.cloneNode(!0).cloneNode(!0).lastChild.checked;
        L.appendChecked = Q.checked;
        ga.removeChild(Q);
        ga.appendChild(H);
        if (H.attachEvent)
            for (Za in {
                submit: !0,
                change: !0,
                focusin: !0
            }) Ga = "on" + Za, (ra = Ga in H) || (H.setAttribute(Ga, "return;"), ra = "function" == typeof H[Ga]), L[Za + "Bubbles"] = ra;
        Ya = (f(function() {
            var c, s, p, d, f = y.getElementsByTagName("body")[0];
            f && (c = y.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(c, f.firstChild), s = y.createElement("div"), c.appendChild(s), s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", p = s.getElementsByTagName("td"), p[0].style.cssText = "padding:0;margin:0;border:0;display:none", ra = 0 === p[0].offsetHeight, p[0].style.display = "", p[1].style.display = "none", L.reliableHiddenOffsets = ra && 0 === p[0].offsetHeight, s.innerHTML = "", s.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", L.boxSizing = 4 === s.offsetWidth, L.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (L.pixelPosition = "1%" !== (b.getComputedStyle(s, null) || {}).top, L.boxSizingReliable = "4px" === (b.getComputedStyle(s, null) || {
                width: "4px"
            }).width, d = y.createElement("div"), d.style.cssText = s.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", d.style.marginRight = d.style.width = "0", s.style.width = "1px", s.appendChild(d), L.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)), "undefined" != typeof s.style.zoom && (s.innerHTML = "", s.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", L.inlineBlockNeedsLayout = 3 === s.offsetWidth, s.style.display = "block", s.style.overflow = "visible", s.innerHTML = "<div></div>", s.firstChild.style.width = "5px", L.shrinkWrapBlocks = 3 !== s.offsetWidth, c.style.zoom = 1), f.removeChild(c))
        }), ga.removeChild(H), Da = fa = Ea = Fa = Q = ga = H = null, L)
    }
    Mc.support = Ya;
    var rc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        qc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, s, p, d) {
            if (f.acceptData(b)) {
                var j, e, m = f.expando,
                    g = "string" == typeof s,
                    n = b.nodeType,
                    l = n ? f.cache : b,
                    r = n ? b[m] : b[m] && m;
                if (r && l[r] && (d || l[r].data) || !(g && p === c)) {
                    r || (n ? b[m] = r = f.deletedIds.pop() || f.guid++ : r = m);
                    l[r] || (l[r] = {}, n || (l[r].toJSON = f.noop));
                    if ("object" == typeof s || "function" == typeof s) d ? l[r] = f.extend(l[r], s) : l[r].data = f.extend(l[r].data, s);
                    return j = l[r], d || (j.data || (j.data = {}), j = j.data), p !== c && (j[f.camelCase(s)] = p), g ? (e = j[s], null == e && (e = j[f.camelCase(s)])) : e = j, e
                }
            }
        },
        removeData: function(b, c, p) {
            if (f.acceptData(b)) {
                var d, j, m, g = b.nodeType,
                    n = g ? f.cache : b,
                    l = g ? b[f.expando] : f.expando;
                if (n[l]) {
                    if (c && (d = p ? n[l] : n[l].data)) {
                        f.isArray(c) || (c in d ? c = [c] : (c = f.camelCase(c), c in d ? c = [c] : c = c.split(" ")));
                        j = 0;
                        for (m = c.length; j < m; j++) delete d[c[j]];
                        if (!(p ? e : f.isEmptyObject)(d)) return
                    }
                    if (p || !(delete n[l].data, !e(n[l]))) g ? f.cleanData([b], !0) : f.support.deleteExpando || n != n.window ? delete n[l] : n[l] = null
                }
            }
        },
        _data: function(b, c, p) {
            return f.data(b, c, p, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    f.fn.extend({
        data: function(b, s) {
            var p, j, e, m, g, n = this[0],
                l = 0,
                r = null;
            if (b === c) {
                if (this.length && (r = f.data(n), 1 === n.nodeType && !f._data(n, "parsedAttrs"))) {
                    e = n.attributes;
                    for (g = e.length; l < g; l++) m = e[l].name, m.indexOf("data-") || (m = f.camelCase(m.substring(5)), d(n, m, r[m]));
                    f._data(n, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (p = b.split(".", 2), p[1] = p[1] ? "." + p[1] : "", j = p[1] + "!", f.access(this, function(s) {
                if (s === c) return r = this.triggerHandler("getData" + j, [p[0]]), r === c && n && (r = f.data(n, b), r = d(n, b, r)), r === c && p[1] ? this.data(p[0]) : r;
                p[1] = s;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + j, p);
                    f.data(this, b, s);
                    c.triggerHandler("changeData" +
                        j, p)
                })
            }, null, s, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, c, p) {
            var d;
            if (b) return c = (c || "fx") + "queue", d = f._data(b, c), p && (!d || f.isArray(p) ? d = f._data(b, c, f.makeArray(p)) : d.push(p)), d || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var p = f.queue(b, c),
                d = p.length,
                j = p.shift(),
                e = f._queueHooks(b, c),
                m = function() {
                    f.dequeue(b, c)
                };
            "inprogress" === j && (j = p.shift(), d--);
            j && ("fx" === c && p.unshift("inprogress"), delete e.stop, j.call(b, m, e));
            !d && e && e.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return f._data(b, d) || f._data(b, d, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, c + "queue", !0);
                    f.removeData(b, d, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, s) {
            var d = 2;
            return "string" != typeof b && (s = b, b = "fx", d--), arguments.length < d ? f.queue(this[0], b) : s === c ? this : this.each(function() {
                var c = f.queue(this, b, s);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this, b)
            })
        },
        delay: function(b, c) {
            return b = f.fx ? f.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, s) {
                var d = setTimeout(c, b);
                s.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, s) {
            var d, j = 1,
                e = f.Deferred(),
                m = this,
                g = this.length,
                n = function() {
                    --j || e.resolveWith(m, [m])
                };
            "string" != typeof b && (s = b, b = c);
            for (b = b || "fx"; g--;)(d = f._data(m[g], b + "queueHooks")) && d.empty && (j++, d.empty.add(n));
            return n(), e.promise(s)
        }
    });
    var Z, Ib, Jb, Kb = /[\t\r\n]/g,
        Nc = /\r/g,
        Oc = /^(?:button|input)$/i,
        Pc = /^(?:button|input|object|select|textarea)$/i,
        Qc = /^a(?:rea|)$/i,
        Lb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Mb = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, c) {
            return f.access(this, f.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return f.access(this, f.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] || b, this.each(function() {
                try {
                    this[b] = c, delete this[b]
                } catch (s) {}
            })
        },
        addClass: function(b) {
            var c, d, j, e, m, g, n;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(ea);
                d = 0;
                for (j = this.length; d < j; d++)
                    if (e = this[d], 1 === e.nodeType)
                        if (!e.className && 1 === c.length) e.className = b;
                        else {
                            m = " " + e.className + " ";
                            g = 0;
                            for (n = c.length; g < n; g++) 0 > m.indexOf(" " + c[g] + " ") && (m += c[g] + " ");
                            e.className = f.trim(m)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var s, d, j, e, m, g, n;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                s = (b || "").split(ea);
                g = 0;
                for (n = this.length; g < n; g++)
                    if (j = this[g], 1 === j.nodeType && j.className) {
                        d = (" " + j.className + " ").replace(Kb, " ");
                        e = 0;
                        for (m = s.length; e < m; e++)
                            for (; 0 <= d.indexOf(" " + s[e] + " ");) d = d.replace(" " + s[e] + " ", " ");
                        j.className = b ? f.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                j = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) {
                f(this).toggleClass(b.call(this, d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var e, m = 0, g = f(this), n = c, l = b.split(ea); e = l[m++];) n = j ? n : !g.hasClass(e), g[n ? "addClass" : "removeClass"](e);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Kb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var s, d, j, e = this[0];
            if (arguments.length) return j = f.isFunction(b), this.each(function(d) {
                var p, e = f(this);
                if (1 === this.nodeType && (j ? p = b.call(this, d, e.val()) : p = b, null == p ? p = "" : "number" == typeof p ? p += "" : f.isArray(p) && (p = f.map(p, function(b) {
                    return null == b ? "" : b + ""
                })), s = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !s || !("set" in s) || s.set(this, p, "value") === c)) this.value = p
            });
            if (e) return s = f.valHooks[e.type] || f.valHooks[e.nodeName.toLowerCase()], s && "get" in s && (d = s.get(e, "value")) !== c ? d : (d = e.value, "string" == typeof d ? d.replace(Nc, "") : null == d ? "" : d)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, j = b.selectedIndex,
                        e = [],
                        m = b.options,
                        g = "select-one" === b.type;
                    if (0 > j) return null;
                    b = g ? j : 0;
                    for (d = g ? j + 1 : m.length; b < d; b++)
                        if (c = m[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (g) return c;
                            e.push(c)
                        }
                    return g && !e.length && m.length ? f(m[j]).val() : e
                },
                set: function(b, c) {
                    var d = f.makeArray(c);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, p, j) {
            var e, m, g = b.nodeType;
            if (b && !(3 === g || 8 === g || 2 === g)) {
                if (j && f.isFunction(f.fn[d])) return f(b)[d](p);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, d, p);
                (j = 1 !== g || !f.isXMLDoc(b)) && (d = d.toLowerCase(), m = f.attrHooks[d] || (Lb.test(d) ? Ib : Z));
                if (p !== c) {
                    if (null === p) {
                        f.removeAttr(b, d);
                        return
                    }
                    return m && "set" in m && j && (e = m.set(b, p, d)) !== c ? e : (b.setAttribute(d, p + ""), p)
                }
                return m && "get" in m && j && null !== (e = m.get(b, d)) ? e : (e = b.getAttribute(d), null === e ? c : e)
            }
        },
        removeAttr: function(b, c) {
            var d, j, e, m, g = 0;
            if (c && 1 === b.nodeType)
                for (j = c.split(ea); g < j.length; g++)(e = j[g]) && (d = f.propFix[e] || e, m = Lb.test(e), m || f.attr(b, e, ""), b.removeAttribute(Mb ? e : d), m && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Oc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return Z && f.nodeName(b, "button") ? Z.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (Z && f.nodeName(b, "button")) return Z.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, p) {
            var j, e, m, g = b.nodeType;
            if (b && !(3 === g || 8 === g || 2 === g)) return m = 1 !== g || !f.isXMLDoc(b), m && (d = f.propFix[d] || d, e = f.propHooks[d]), p !== c ? e && "set" in e && (j = e.set(b, p, d)) !== c ? j : b[d] = p : e && "get" in e && null !== (j = e.get(b, d)) ? j : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Pc.test(b.nodeName) || Qc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Ib = {
        get: function(b, d) {
            var p, j = f.prop(b, d);
            return !0 === j || "boolean" != typeof j && (p = b.getAttributeNode(d)) && !1 !== p.nodeValue ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
            var j;
            return !1 === c ? f.removeAttr(b, d) : (j = f.propFix[d] || d, j in b && (b[j] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Mb || (Jb = {
        name: !0,
        id: !0,
        coords: !0
    }, Z = f.valHooks.button = {
        get: function(b, d) {
            var p;
            return p = b.getAttributeNode(d), p && (Jb[d] ? "" !== p.value : p.specified) ? p.value : c
        },
        set: function(b, c, d) {
            var j = b.getAttributeNode(d);
            return j || (j = y.createAttribute(d), b.setAttributeNode(j)), j.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, v) {
                if ("" === v) return b.setAttribute(c, "auto"), v
            }
        })
    }), f.attrHooks.contenteditable = {
        get: Z.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            Z.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, d) {
        f.attrHooks[d] = f.extend(f.attrHooks[d], {
            get: function(b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() || c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var $a = /^(?:textarea|input|select)$/i,
        Nb = /^([^\.]*|)(?:\.(.+)|)$/,
        Rc = /(?:^|\s)hover(\.\S+|)\b/,
        Sc = /^key/,
        Tc = /^(?:mouse|contextmenu)|click/,
        Ob = /^(?:focusinfocus|focusoutblur)$/,
        Pb = function(b) {
            return f.event.special.hover ? b : b.replace(Rc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, d, p, j, e) {
            var m, g, n, l, r, t, u, q, x;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !p || !(m = f._data(b)))) {
                p.handler && (u = p, p = u.handler, e = u.selector);
                p.guid || (p.guid = f.guid++);
                (n = m.events) || (m.events = n = {});
                (g = m.handle) || (m.handle = g = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(g.elem, arguments) : c
                }, g.elem = b);
                d = f.trim(Pb(d)).split(" ");
                for (m = 0; m < d.length; m++) {
                    l = Nb.exec(d[m]) || [];
                    r = l[1];
                    t = (l[2] || "").split(".").sort();
                    x = f.event.special[r] || {};
                    r = (e ? x.delegateType : x.bindType) || r;
                    x = f.event.special[r] || {};
                    l = f.extend({
                        type: r,
                        origType: l[1],
                        data: j,
                        handler: p,
                        guid: p.guid,
                        selector: e,
                        needsContext: e && f.expr.match.needsContext.test(e),
                        namespace: t.join(".")
                    }, u);
                    q = n[r];
                    if (!q && (q = n[r] = [], q.delegateCount = 0, !x.setup || !1 === x.setup.call(b, j, t, g))) b.addEventListener ? b.addEventListener(r, g, !1) : b.attachEvent && b.attachEvent("on" + r, g);
                    x.add && (x.add.call(b, l), l.handler.guid || (l.handler.guid = p.guid));
                    e ? q.splice(q.delegateCount++, 0, l) : q.push(l);
                    f.event.global[r] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, j, e) {
            var m, g, n, l, r, t, u, q, x, z, y = f.hasData(b) && f._data(b);
            if (y && (u = y.events)) {
                c = f.trim(Pb(c || "")).split(" ");
                for (m = 0; m < c.length; m++)
                    if (g = Nb.exec(c[m]) || [], n = l = g[1], g = g[2], n) {
                        q = f.event.special[n] || {};
                        n = (j ? q.delegateType : q.bindType) || n;
                        x = u[n] || [];
                        r = x.length;
                        g = g ? RegExp("(^|\\.)" + g.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (t = 0; t < x.length; t++) z = x[t], (e || l === z.origType) && (!d || d.guid === z.guid) && (!g || g.test(z.namespace)) && (!j || j === z.selector || "**" === j && z.selector) && (x.splice(t--, 1), z.selector && x.delegateCount--, q.remove && q.remove.call(b, z));
                        0 === x.length && r !== x.length && ((!q.teardown || !1 === q.teardown.call(b, g, y.handle)) && f.removeEvent(b, n, y.handle), delete u[n])
                    } else
                        for (n in u) f.event.remove(b, n + c[m], d, j, !0);
                f.isEmptyObject(u) && (delete y.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(v, d, p, j) {
            if (!p || 3 !== p.nodeType && 8 !== p.nodeType) {
                var e, m, g, n, l, r, t, u = v.type || v;
                n = [];
                if (!Ob.test(u + f.event.triggered) && (0 <= u.indexOf("!") && (u = u.slice(0, -1), e = !0), 0 <= u.indexOf(".") && (n = u.split("."), u = n.shift(), n.sort()), p && !f.event.customEvent[u] || f.event.global[u]))
                    if (v = "object" == typeof v ? v[f.expando] ? v : new f.Event(u, v) : new f.Event(u), v.type = u, v.isTrigger = !0, v.exclusive = e, v.namespace = n.join("."), v.namespace_re = v.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n = 0 > u.indexOf(":") ? "on" + u : "", p) {
                        if (v.result = c, v.target || (v.target = p), d = null != d ? f.makeArray(d) : [], d.unshift(v), l = f.event.special[u] || {}, !(l.trigger && !1 === l.trigger.apply(p, d))) {
                            t = [
                                [p, l.bindType || u]
                            ];
                            if (!j && !l.noBubble && !f.isWindow(p)) {
                                m = l.delegateType || u;
                                e = Ob.test(m + u) ? p : p.parentNode;
                                for (g = p; e; e = e.parentNode) t.push([e, m]), g = e;
                                g === (p.ownerDocument || y) && t.push([g.defaultView || g.parentWindow || b, m])
                            }
                            for (m = 0; m < t.length && !v.isPropagationStopped(); m++) e = t[m][0], v.type = t[m][1], (r = (f._data(e, "events") || {})[v.type] && f._data(e, "handle")) && r.apply(e, d), (r = n && e[n]) && f.acceptData(e) && r.apply && !1 === r.apply(e, d) && v.preventDefault();
                            return v.type = u, !j && !v.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.ownerDocument, d)) && ("click" !== u || !f.nodeName(p, "a")) && f.acceptData(p) && n && p[u] && ("focus" !== u && "blur" !== u || 0 !== v.target.offsetWidth) && !f.isWindow(p) && (g = p[n], g && (p[n] = null), f.event.triggered = u, p[u](), f.event.triggered = c, g && (p[n] = g)), v.result
                        }
                    } else
                        for (m in p = f.cache, p) p[m].events && p[m].events[u] && f.event.trigger(v, d, p[m].handle.elem, !0)
            }
        },
        dispatch: function(v) {
            v = f.event.fix(v || b.event);
            var d, p, j, e, m, g, n = (f._data(this, "events") || {})[v.type] || [],
                l = n.delegateCount,
                r = X.call(arguments),
                u = !v.exclusive && !v.namespace,
                t = f.event.special[v.type] || {},
                q = [];
            r[0] = v;
            v.delegateTarget = this;
            if (!(t.preDispatch && !1 === t.preDispatch.call(this, v))) {
                if (l && (!v.button || "click" !== v.type))
                    for (p = v.target; p != this; p = p.parentNode || this)
                        if (!0 !== p.disabled || "click" !== v.type) {
                            e = {};
                            m = [];
                            for (d = 0; d < l; d++) j = n[d], g = j.selector, e[g] === c && (e[g] = j.needsContext ? 0 <= f(g, this).index(p) : f.find(g, this, null, [p]).length), e[g] && m.push(j);
                            m.length && q.push({
                                elem: p,
                                matches: m
                            })
                        }
                n.length > l && q.push({
                    elem: this,
                    matches: n.slice(l)
                });
                for (d = 0; d < q.length && !v.isPropagationStopped(); d++) {
                    e = q[d];
                    v.currentTarget = e.elem;
                    for (p = 0; p < e.matches.length && !v.isImmediatePropagationStopped(); p++)
                        if (j = e.matches[p], u || !v.namespace && !j.namespace || v.namespace_re && v.namespace_re.test(j.namespace)) v.data = j.data, v.handleObj = j, j = ((f.event.special[j.origType] || {}).handle || j.handler).apply(e.elem, r), j !== c && (v.result = j, !1 === j && (v.preventDefault(), v.stopPropagation()))
                }
                return t.postDispatch && t.postDispatch.call(this, v), v.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var j, f, e, m = d.button,
                    g = d.fromElement;
                return null == b.pageX && null != d.clientX && (j = b.target.ownerDocument || y, f = j.documentElement, e = j.body, b.pageX = d.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft || e && e.clientLeft || 0), b.pageY = d.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)), !b.relatedTarget && g && (b.relatedTarget = g === b.target ? d.toElement : g), !b.which && m !== c && (b.which = m & 1 ? 1 : m & 2 ? 3 : m & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, j = b,
                e = f.event.fixHooks[b.type] || {},
                m = e.props ? this.props.concat(e.props) : this.props;
            b = f.Event(j);
            for (c = m.length; c;) d = m[--c], b[d] = j[d];
            return b.target || (b.target = j.srcElement || y), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, e.filter ? e.filter(b, j) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, j) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            j ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle = f.event.dispatch;
    f.removeEvent = y.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? l : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(), this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = l;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = l;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, v = b.relatedTarget,
                    j = b.handleObj;
                if (!v || v !== this && !f.contains(this, v)) b.type = j.origType, d = j.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if ($a.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                $a.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger && f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !$a.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            j = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && y.addEventListener(b, j, !0)
            },
            teardown: function() {
                0 === --d && y.removeEventListener(b, j, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, d, j, e, m) {
            var n, l;
            if ("object" == typeof b) {
                "string" != typeof d && (j = j || d, d = c);
                for (l in b) this.on(l, d, j, b[l], m);
                return this
            }
            null == j && null == e ? (e = d, j = d = c) : null == e && ("string" == typeof d ? (e = j, j = c) : (e = j, j = d, d = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === m && (n = e, e = function(b) {
                return f().off(b), n.apply(this, arguments)
            }, e.guid = n.guid || (n.guid = f.guid++)), this.each(function() {
                f.event.add(this, b, e, j, d)
            })
        },
        one: function(b, c, d, j) {
            return this.on(b, c, d, j, 1)
        },
        off: function(b, d, j) {
            var e, m;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (m in b) this.off(m, d, b[m]);
                return this
            }
            if (!1 === d || "function" == typeof d) j = d, d = c;
            return !1 === j && (j = g), this.each(function() {
                f.event.remove(this, b, j, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b, null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, j) {
            return this.on(c, b, d, j)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || f.guid++,
                j = 0,
                e = function(d) {
                    var p = (f._data(this, "lastToggle" + b.guid) || 0) % j;
                    return f._data(this, "lastToggle" + b.guid, p + 1), d.preventDefault(), c[p].apply(this, arguments) || !1
                };
            for (e.guid = d; j < c.length;) c[j++].guid = d;
            return this.click(e)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        f.fn[c] = function(b, d) {
            return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
        };
        Sc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
        Tc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
    });
    var Uc = b,
        G = function(b, c, d, j) {
            d = d || [];
            c = c || U;
            var f, e, m, g, n = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== n && 9 !== n) return [];
            m = Ha(c);
            if (!m && !j && (f = Vc.exec(b)))
                if (g = f[1])
                    if (9 === n) {
                        e = c.getElementById(g);
                        if (!e || !e.parentNode) return d;
                        if (e.id === g) return d.push(e), d
                    } else {
                        if (c.ownerDocument && (e = c.ownerDocument.getElementById(g)) && Qb(c, e) && e.id === g) return d.push(e), d
                    } else {
                if (f[2]) return ma.apply(d, na.call(c.getElementsByTagName(b), 0)), d;
                if ((g = f[3]) && Rb && c.getElementsByClassName) return ma.apply(d, na.call(c.getElementsByClassName(g), 0)), d
            }
            return ab(b.replace(Ia, "$1"), c, d, j, m)
        },
        sa = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Sb = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ha = function(b) {
            return V(function(c) {
                return c = +c, V(function(d, j) {
                    for (var f, e = b([], d.length, c), m = e.length; m--;) d[f = e[m]] && (d[f] = !(j[f] = d[f]))
                })
            })
        },
        Ja = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        La = function(b, c) {
            var d, j, f, e, m, g, n;
            if (m = Tb[I][b]) return c ? 0 : m.slice(0);
            m = b;
            g = [];
            for (n = J.preFilter; m;) {
                if (!d || (j = Wc.exec(m))) j && (m = m.slice(j[0].length)), g.push(f = []);
                d = !1;
                if (j = Xc.exec(m)) f.push(d = new Ub(j.shift())), m = m.slice(d.length), d.type = j[0].replace(Ia, " ");
                for (e in J.filter)(j = Ka[e].exec(m)) && (!n[e] || (j = n[e](j, U, !0))) && (f.push(d = new Ub(j.shift())), m = m.slice(d.length), d.type = e, d.matches = j);
                if (!d) break
            }
            return c ? m.length : m ? G.error(b) : Tb(b, g).slice(0)
        },
        cb = function(b, c, d) {
            var j = c.dir,
                f = d && "parentNode" === c.dir,
                e = Yc++;
            return c.first ? function(c, d, p) {
                for (; c = c[j];)
                    if (f || 1 === c.nodeType) return b(c, d, p)
            } : function(c, d, p) {
                if (p)
                    for (; c = c[j];) {
                        if ((f || 1 === c.nodeType) && b(c, d, p)) return c
                    } else
                        for (var s, m = ta + " " + e + " ", g = m + bb; c = c[j];)
                            if (f || 1 === c.nodeType) {
                                if ((s = c[I]) === g) return c.sizset;
                                if ("string" == typeof s && 0 === s.indexOf(m)) {
                                    if (c.sizset) return c
                                } else {
                                    c[I] = g;
                                    if (b(c, d, p)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        db = function(b) {
            return 1 < b.length ? function(c, d, j) {
                for (var f = b.length; f--;)
                    if (!b[f](c, d, j)) return !1;
                return !0
            } : b[0]
        },
        Ma = function(b, c, d, j, f) {
            for (var e, m = [], g = 0, n = b.length, l = null != c; g < n; g++)
                if (e = b[g])
                    if (!d || d(e, j, f)) m.push(e), l && c.push(g);
            return m
        },
        eb = function(b, c, d, j, f, e) {
            return j && !j[I] && (j = eb(j)), f && !f[I] && (f = eb(f, e)), V(function(e, m, g, n) {
                if (!e || !f) {
                    var l, r, u = [],
                        t = [],
                        N = m.length;
                    if (!(r = e)) {
                        r = c || "*";
                        var q = g.nodeType ? [g] : g,
                            x = [];
                        l = 0;
                        for (var z = q.length; l < z; l++) G(r, q[l], x, e);
                        r = x
                    }
                    q = b && (e || !c) ? Ma(r, u, b, g, n) : r;
                    x = d ? f || (e ? b : N || j) ? [] : m : q;
                    d && d(q, x, g, n);
                    if (j) {
                        r = Ma(x, t);
                        j(r, [], g, n);
                        for (g = r.length; g--;)
                            if (l = r[g]) x[t[g]] = !(q[t[g]] = l)
                    }
                    if (e)
                        for (g = b && x.length; g--;) {
                            if (l = x[g]) e[u[g]] = !(m[u[g]] = l)
                        } else x = Ma(x === m ? x.splice(N, x.length) : x), f ? f(null, m, x, n) : ma.apply(m, x)
                }
            })
        },
        fb = function(b) {
            var c, d, j, f = b.length,
                e = J.relative[b[0].type];
            d = e || J.relative[" "];
            for (var m = e ? 1 : 0, g = cb(function(b) {
                return b === c
            }, d, !0), n = cb(function(b) {
                return -1 < Vb.call(c, b)
            }, d, !0), l = [
                function(b, d, v) {
                    return !e && (v || d !== Na) || ((c = d).nodeType ? g(b, d, v) : n(b, d, v))
                }
            ]; m < f; m++)
                if (d = J.relative[b[m].type]) l = [cb(db(l), d)];
                else {
                    d = J.filter[b[m].type].apply(null, b[m].matches);
                    if (d[I]) {
                        for (j = ++m; j < f && !J.relative[b[j].type]; j++);
                        return eb(1 < m && db(l), 1 < m && b.slice(0, m - 1).join("").replace(Ia, "$1"), d, m < j && fb(b.slice(m, j)), j < f && fb(b = b.slice(j)), j < f && b.join(""))
                    }
                    l.push(d)
                }
            return db(l)
        },
        ab = function(b, c, d, j, f) {
            var e, m, g, n, l = La(b);
            if (!j && 1 === l.length) {
                m = l[0] = l[0].slice(0);
                if (2 < m.length && "ID" === (g = m[0]).type && 9 === c.nodeType && !f && J.relative[m[1].type]) {
                    c = J.find.ID(g.matches[0].replace(ia, ""), c, f)[0];
                    if (!c) return d;
                    b = b.slice(m.shift().length)
                }
                for (e = Ka.POS.test(b) ? -1 : m.length - 1; 0 <= e; e--) {
                    g = m[e];
                    if (J.relative[n = g.type]) break;
                    if (n = J.find[n])
                        if (j = n(g.matches[0].replace(ia, ""), gb.test(m[0].type) && c.parentNode || c, f)) {
                            m.splice(e, 1);
                            b = j.length && m.join("");
                            if (!b) return ma.apply(d, na.call(j, 0)), d;
                            break
                        }
                }
            }
            return hb(b, l)(j, c, f, d, gb.test(b)), d
        },
        Wb = function() {},
        bb, ib, J, Oa, Ha, Qb, hb, jb, ua, Na, Xb = !0,
        I = ("sizcache" + Math.random()).replace(".", ""),
        Ub = String,
        U = Uc.document,
        T = U.documentElement,
        ta = 0,
        Yc = 0,
        Zc = [].pop,
        ma = [].push,
        na = [].slice,
        Vb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        V = function(b, c) {
            return b[I] = null == c || c, b
        },
        kb = function() {
            var b = {},
                c = [];
            return V(function(d, j) {
                return c.push(d) > J.cacheLength && delete b[c.shift()], b[d] = j
            }, b)
        },
        Yb = kb(),
        Tb = kb(),
        Zb = kb(),
        $b = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        lb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + $b + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Wc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Xc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        $c = RegExp(lb),
        Vc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        gb = /[\x20\t\r\n\f]*[+~]/,
        ad = /h\d/i,
        bd = /input|select|textarea|button/i,
        ia = /\\(?!\\)/g,
        Ka = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $b),
            PSEUDO: RegExp("^" + lb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        aa = function(b) {
            var c = U.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        cd = aa(function(b) {
            return b.appendChild(U.createComment("")), !b.getElementsByTagName("*").length
        }),
        dd = aa(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        ed = aa(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Rb = aa(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        fd = aa(function(b) {
            b.id = I + 0;
            b.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>";
            T.insertBefore(b, T.firstChild);
            var c = U.getElementsByName && U.getElementsByName(I).length === 2 + U.getElementsByName(I + 0).length;
            return ib = !U.getElementById(I), T.removeChild(b), c
        });
    try {
        na.call(T.childNodes, 0)[0].nodeType
    } catch (Pd) {
        na = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    G.matches = function(b, c) {
        return G(b, null, null, c)
    };
    G.matchesSelector = function(b, c) {
        return 0 < G(c, null, null, [b]).length
    };
    Oa = G.getText = function(b) {
        var c, d = "",
            j = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b = b.nextSibling) d += Oa(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[j]; j++) d += Oa(c);
        return d
    };
    Ha = G.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Qb = G.contains = T.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            j = c && c.parentNode;
        return b === j || !(!j || !(1 === j.nodeType && d.contains && d.contains(j)))
    } : T.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    G.attr = function(b, c) {
        var d, j = Ha(b);
        return j || (c = c.toLowerCase()), (d = J.attrHandle[c]) ? d(b) : j || ed ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    J = G.selectors = {
        cacheLength: 50,
        createPseudo: V,
        match: Ka,
        attrHandle: dd ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: ib ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: cd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var j, f = [], e = 0; j = d[e]; e++) 1 === j.nodeType && f.push(j);
                    return f
                }
                return d
            },
            NAME: fd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Rb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ia, ""), b[3] = (b[4] || b[5] || "").replace(ia, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || G.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && G.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Ka.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) $c.test(c) && (d = La(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: ib ? function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ia, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ia, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = Yb[I][b];
                return c || (c = Yb(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(j) {
                    j = G.attr(j, b);
                    return null == j ? "!=" === c : c ? (j += "", "=" === c ? j === d : "!=" === c ? j !== d : "^=" === c ? d && 0 === j.indexOf(d) : "*=" === c ? d && -1 < j.indexOf(d) : "$=" === c ? d && j.substr(j.length - d.length) === d : "~=" === c ? -1 < (" " + j + " ").indexOf(d) : "|=" === c ? j === d || j.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, j) {
                return "nth" === b ? function(b) {
                    var c, f;
                    c = b.parentNode;
                    if (1 === d && 0 === j) return !0;
                    if (c) {
                        f = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (f++, b === c)); c = c.nextSibling);
                    }
                    return f -= j, f === d || 0 === f % d && 0 <= f / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 === d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, j = J.pseudos[b] || J.setFilters[b.toLowerCase()] || G.error("unsupported pseudo: " + b);
                return j[I] ? j(c) : 1 < j.length ? (d = [b, b, "", c], J.setFilters.hasOwnProperty(b.toLowerCase()) ? V(function(b, d) {
                    for (var f, v = j(b, c), e = v.length; e--;) f = Vb.call(b, v[e]), b[f] = !(d[f] = v[e])
                }) : function(b) {
                    return j(b, 0, d)
                }) : j
            }
        },
        pseudos: {
            not: V(function(b) {
                var c = [],
                    d = [],
                    j = hb(b.replace(Ia, "$1"));
                return j[I] ? V(function(b, c, d, f) {
                    f = j(b, null, f, []);
                    for (var v = b.length; v--;)
                        if (d = f[v]) b[v] = !(c[v] = d)
                }) : function(b, f, v) {
                    return c[0] = b, j(c, null, v, d), !d.pop()
                }
            }),
            has: V(function(b) {
                return function(c) {
                    return 0 < G(b, c).length
                }
            }),
            contains: V(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Oa(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" === c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !J.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return ad.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: sa("radio"),
            checkbox: sa("checkbox"),
            file: sa("file"),
            password: sa("password"),
            image: sa("image"),
            submit: Sb("submit"),
            reset: Sb("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return bd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ha(function() {
                return [0]
            }),
            last: ha(function(b, c) {
                return [c - 1]
            }),
            eq: ha(function(b, c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ha(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ha(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ha(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ha(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    jb = T.compareDocumentPosition ? function(b, c) {
        return b === c ? (ua = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return ua = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, j, f = [],
            e = [];
        d = b.parentNode;
        j = c.parentNode;
        var m = d;
        if (d === j) return Ja(b, c);
        if (!d) return -1;
        if (!j) return 1;
        for (; m;) f.unshift(m), m = m.parentNode;
        for (m = j; m;) e.unshift(m), m = m.parentNode;
        d = f.length;
        j = e.length;
        for (m = 0; m < d && m < j; m++)
            if (f[m] !== e[m]) return Ja(f[m], e[m]);
        return m === d ? Ja(b, e[m], -1) : Ja(f[m], c, 1)
    };
    [0, 0].sort(jb);
    Xb = !ua;
    G.uniqueSort = function(b) {
        var c, d = 1;
        ua = Xb;
        b.sort(jb);
        if (ua)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    G.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    hb = G.compile = function(b, c) {
        var d, j = [],
            f = [],
            e = Zb[I][b];
        if (!e) {
            c || (c = La(b));
            for (d = c.length; d--;) e = fb(c[d]), e[I] ? j.push(e) : f.push(e);
            var m = 0 < j.length,
                g = 0 < f.length,
                n = function(b, c, d, e, v) {
                    var p, s, l = [],
                        r = 0,
                        u = "0",
                        t = b && [],
                        q = null != v,
                        N = Na,
                        x = b || g && J.find.TAG("*", v && c.parentNode || c),
                        z = ta += null == N ? 1 : Math.E;
                    for (q && (Na = c !== U && c, bb = n.el); null != (v = x[u]); u++) {
                        if (g && v) {
                            for (p = 0; s = f[p]; p++)
                                if (s(v, c, d)) {
                                    e.push(v);
                                    break
                                }
                            q && (ta = z, bb = ++n.el)
                        }
                        m && ((v = !s && v) && r--, b && t.push(v))
                    }
                    r += u;
                    if (m && u !== r) {
                        for (p = 0; s = j[p]; p++) s(t, l, c, d);
                        if (b) {
                            if (0 < r)
                                for (; u--;)!t[u] && !l[u] && (l[u] = Zc.call(e));
                            l = Ma(l)
                        }
                        ma.apply(e, l);
                        q && !b && 0 < l.length && 1 < r + j.length && G.uniqueSort(e)
                    }
                    return q && (ta = z, Na = N), t
                };
            d = (n.el = 0, m ? V(n) : n);
            e = Zb(b, d)
        }
        return e
    };
    if (U.querySelectorAll) {
        var ac, gd = ab,
            hd = /'|\\/g,
            id = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            W = [":focus"],
            Pa = [":active", ":focus"],
            Qa = T.matchesSelector || T.mozMatchesSelector || T.webkitMatchesSelector || T.oMatchesSelector || T.msMatchesSelector;
        aa(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || W.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || W.push(":checked")
        });
        aa(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && W.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || W.push(":enabled", ":disabled")
        });
        W = RegExp(W.join("|"));
        ab = function(b, c, d, j, f) {
            if (!j && !f && (!W || !W.test(b))) {
                var e, m, g = !0,
                    n = I;
                m = c;
                e = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    e = La(b);
                    (g = c.getAttribute("id")) ? n = g.replace(hd, "\\$&"): c.setAttribute("id", n);
                    n = "[id='" + n + "'] ";
                    for (m = e.length; m--;) e[m] = n + e[m].join("");
                    m = gb.test(b) && c.parentNode || c;
                    e = e.join(",")
                }
                if (e) try {
                    return ma.apply(d, na.call(m.querySelectorAll(e), 0)), d
                } catch (l) {} finally {
                    g || c.removeAttribute("id")
                }
            }
            return gd(b, c, d, j, f)
        };
        Qa && (aa(function(b) {
            ac = Qa.call(b, "div");
            try {
                Qa.call(b, "[test!='']:sizzle"), Pa.push("!=", lb)
            } catch (c) {}
        }), Pa = RegExp(Pa.join("|")), G.matchesSelector = function(b, c) {
            c = c.replace(id, "='$1']");
            if (!Ha(b) && !Pa.test(c) && (!W || !W.test(c))) try {
                var d = Qa.call(b, c);
                if (d || ac || b.document && 11 !== b.document.nodeType) return d
            } catch (j) {}
            return 0 < G(c, null, null, [b]).length
        })
    }
    J.pseudos.nth = J.pseudos.eq;
    J.filters = Wb.prototype = J.pseudos;
    J.setFilters = new Wb;
    G.attr = f.attr;
    f.find = G;
    f.expr = G.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = G.uniqueSort;
    f.text = G.getText;
    f.isXMLDoc = G.isXML;
    f.contains = G.contains;
    var jd = /Until$/,
        kd = /^(?:parents|prev(?:Until|All))/,
        tc = /^.[^:#\[\.,]*$/,
        bc = f.expr.match.needsContext,
        ld = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, j, e, m, g, n = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = n.length; c < d; c++)
                    if (f.contains(n[c], this)) return !0
            });
            g = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (j = g.length, f.find(b, this[c], g), 0 < c)
                    for (e = j; e < g.length; e++)
                        for (m = 0; m < j; m++)
                            if (g[m] === g[e]) {
                                g.splice(e--, 1);
                                break
                            }
            return g
        },
        has: function(b) {
            var c, d = f(b, this),
                j = d.length;
            return this.filter(function() {
                for (c = 0; c < j; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(j(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(j(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? bc.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, j = 0, e = this.length, m = [], g = bc.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; j < e; j++)
                for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (g ? -1 < g.index(d) : f.find.matchesSelector(d, b)) {
                        m.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return m = 1 < m.length ? f.unique(m) : m, this.pushStack(m, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                j = f.merge(this.get(), d);
            return this.pushStack(q(d[0]) || q(j[0]) ? j : f.unique(j))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return t(b, "nextSibling")
        },
        prev: function(b) {
            return t(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, j) {
            var e = f.map(this, c, d);
            return jd.test(b) || (j = d), j && "string" == typeof j && (e = f.filter(j, e)), e = 1 < this.length && !ld[b] ? f.unique(e) : e, 1 < this.length && kd.test(b) && (e = e.reverse()), this.pushStack(e, b, X.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, j) {
            var e = [];
            for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !f(b).is(j));) 1 === b.nodeType && e.push(b), b = b[d];
            return e
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var sb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        md = / jQuery\d+="(?:null|\d+)"/g,
        mb = /^\s+/,
        cc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        dc = /<([\w:]+)/,
        nd = /<tbody/i,
        od = /<|&#?\w+;/,
        pd = /<(?:script|style|link)/i,
        qd = /<(?:script|object|embed|option|style)/i,
        nb = RegExp("<(?:" + sb + ")[\\s/>]", "i"),
        tb = /^(?:checkbox|radio)$/,
        ec = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rd = /\/(java|ecma)script/i,
        sd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        fc = m(y),
        ob = fc.appendChild(y.createElement("div"));
    S.optgroup = S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    f.support.htmlSerialize || (S._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!q(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b, this), "before", this.selector)
            }
        },
        after: function() {
            if (!q(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, j = 0; null != (d = this[j]); j++)
                if (!b || f.filter(b, [d]).length)!c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    j = 0,
                    e = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(md, "") : c;
                if ("string" == typeof b && !pd.test(b) && (f.support.htmlSerialize || !nb.test(b)) && (f.support.leadingWhitespace || !mb.test(b)) && !S[(dc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(cc, "<$1></$2>");
                    try {
                        for (; j < e; j++) d = this[j] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (m) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return q(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    j = d.html();
                d.replaceWith(b.call(this, c, j))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, j) {
            b = [].concat.apply([], b);
            var e, m, g, n = 0,
                l = b[0],
                r = [],
                u = this.length;
            if (!f.support.checkClone && 1 < u && "string" == typeof l && ec.test(l)) return this.each(function() {
                f(this).domManip(b, d, j)
            });
            if (f.isFunction(l)) return this.each(function(e) {
                var m = f(this);
                b[0] = l.call(this, e, d ? m.html() : c);
                m.domManip(b, d, j)
            });
            if (this[0]) {
                e = f.buildFragment(b, this, r);
                g = e.fragment;
                m = g.firstChild;
                1 === g.childNodes.length && (g = m);
                if (m) {
                    d = d && f.nodeName(m, "tr");
                    for (e = e.cacheable || u - 1; n < u; n++) j.call(d && f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], n === e ? g : f.clone(g, !0, !0))
                }
                g = m = null;
                r.length && f.each(r, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(sd, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, j) {
        var e, m, g, n = b[0];
        return d = d || y, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof n && 512 > n.length && d === y && "<" === n.charAt(0) && !qd.test(n) && (f.support.checkClone || !ec.test(n)) && (f.support.html5Clone || !nb.test(n)) && (m = !0, e = f.fragments[n], g = e !== c), e || (e = d.createDocumentFragment(), f.clean(b, d, e, j), m && (f.fragments[n] = g && e)), {
            fragment: e,
            cacheable: m
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var j, e = 0,
                m = [];
            d = f(d);
            var g = d.length;
            j = 1 === this.length && this[0].parentNode;
            if ((null == j || j && 11 === j.nodeType && 1 === j.childNodes.length) && 1 === g) return d[c](this[0]), this;
            for (; e < g; e++) j = (0 < e ? this.clone(!0) : this).get(), f(d[e])[c](j), m = m.concat(j);
            return this.pushStack(m, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var j, e, m, g;
            f.support.html5Clone || f.isXMLDoc(b) || !nb.test("<" + b.nodeName + ">") ? g = b.cloneNode(!0) : (ob.innerHTML = b.outerHTML, ob.removeChild(g = ob.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                u(b, g);
                j = r(b);
                e = r(g);
                for (m = 0; j[m]; ++m) e[m] && u(j[m], e[m])
            }
            if (c && (n(b, g), d)) {
                j = r(b);
                e = r(g);
                for (m = 0; j[m]; ++m) n(j[m], e[m])
            }
            return g
        },
        clean: function(b, c, d, j) {
            var e, g, n, l, r, u, t, q = c === y && fc,
                z = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = y;
            for (e = 0; null != (n = b[e]); e++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" == typeof n)
                        if (od.test(n)) {
                            q = q || m(c);
                            u = c.createElement("div");
                            q.appendChild(u);
                            n = n.replace(cc, "<$1></$2>");
                            g = (dc.exec(n) || ["", ""])[1].toLowerCase();
                            l = S[g] || S._default;
                            r = l[0];
                            for (u.innerHTML = l[1] + n + l[2]; r--;) u = u.lastChild;
                            if (!f.support.tbody) {
                                r = nd.test(n);
                                l = "table" === g && !r ? u.firstChild && u.firstChild.childNodes : "<table>" === l[1] && !r ? u.childNodes : [];
                                for (g = l.length - 1; 0 <= g; --g) f.nodeName(l[g], "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g])
                            }!f.support.leadingWhitespace && mb.test(n) && u.insertBefore(c.createTextNode(mb.exec(n)[0]), u.firstChild);
                            n = u.childNodes;
                            u.parentNode.removeChild(u)
                        } else n = c.createTextNode(n);
                    n.nodeType ? z.push(n) : f.merge(z, n)
                }
            u && (n = u = q = null);
            if (!f.support.appendChecked)
                for (e = 0; null != (n = z[e]); e++) f.nodeName(n, "input") ? x(n) : "undefined" != typeof n.getElementsByTagName && f.grep(n.getElementsByTagName("input"), x);
            if (d) {
                b = function(b) {
                    if (!b.type || rd.test(b.type)) return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (e = 0; null != (n = z[e]); e++)
                    if (!f.nodeName(n, "script") || !b(n)) d.appendChild(n), "undefined" != typeof n.getElementsByTagName && (t = f.grep(f.merge([], n.getElementsByTagName("script")), b), z.splice.apply(z, [e + 1, 0].concat(t)), e += t.length)
            }
            return z
        },
        cleanData: function(b, c) {
            for (var d, j, e, m, g = 0, n = f.expando, l = f.cache, r = f.support.deleteExpando, u = f.event.special; null != (e = b[g]); g++)
                if (c || f.acceptData(e))
                    if (d = (j = e[n]) && l[j]) {
                        if (d.events)
                            for (m in d.events) u[m] ? f.event.remove(e, m) : f.removeEvent(e, m, d.handle);
                        l[j] && (delete l[j], r ? delete e[n] : e.removeAttribute ? e.removeAttribute(n) : e[n] = null, f.deletedIds.push(j))
                    }
        }
    });
    var Ra, ba;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ra = f.uaMatch(yc.userAgent);
    ba = {};
    Ra.browser && (ba[Ra.browser] = !0, ba.version = Ra.version);
    ba.chrome ? ba.webkit = !0 : ba.webkit && (ba.safari = !0);
    f.browser = ba;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c, d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, j) {
            return j && j instanceof f && !(j instanceof b) && (j = b(j)), f.fn.init.call(this, d, j, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(y);
        return b
    };
    var M, ka, la, pb = /alpha\([^)]*\)/i,
        td = /opacity=([^)]*)/,
        ud = /^(top|right|bottom|left)$/,
        vd = /^(none|table(?!-c[ea]).+)/,
        gc = /^margin/,
        uc = RegExp("^(" + Ba + ")(.*)$", "i"),
        va = RegExp("^(" + Ba + ")(?!px)[a-z%]+$", "i"),
        wd = RegExp("^([-+])=(" + Ba + ")", "i"),
        Ua = {},
        xd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        hc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        da = ["Top", "Right", "Bottom", "Left"],
        ub = ["Webkit", "O", "Moz", "ms"],
        yd = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, j) {
                return j !== c ? f.style(b, d, j) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? yd.apply(this, arguments) : this.each(function() {
                (d ? b : B(this)) ? f(this).show(): f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = M(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, j, e) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var m, g, n, l = f.camelCase(d),
                    r = b.style;
                d = f.cssProps[l] || (f.cssProps[l] = z(r, l));
                n = f.cssHooks[d] || f.cssHooks[l];
                if (j === c) return n && "get" in n && (m = n.get(b, !1, e)) !== c ? m : r[d];
                g = typeof j;
                "string" === g && (m = wd.exec(j)) && (j = (m[1] + 1) * m[2] + parseFloat(f.css(b, d)), g = "number");
                if (!(null == j || "number" === g && isNaN(j)))
                    if ("number" === g && !f.cssNumber[l] && (j += "px"), !n || !("set" in n) || (j = n.set(b, j, e)) !== c) try {
                        r[d] = j
                    } catch (u) {}
            }
        },
        css: function(b, d, j, e) {
            var m, g, n, l = f.camelCase(d);
            return d = f.cssProps[l] || (f.cssProps[l] = z(b.style, l)), n = f.cssHooks[d] || f.cssHooks[l], n && "get" in n && (m = n.get(b, !0, e)), m === c && (m = M(b, d)), "normal" === m && d in hc && (m = hc[d]), j || e !== c ? (g = parseFloat(m), j || f.isNumeric(g) ? g || 0 : m) : m
        },
        swap: function(b, c, d) {
            var j, f = {};
            for (j in c) f[j] = b.style[j], b.style[j] = c[j];
            d = d.call(b);
            for (j in c) b.style[j] = f[j];
            return d
        }
    });
    b.getComputedStyle ? M = function(c, d) {
        var j, e, m, g, n = b.getComputedStyle(c, null),
            l = c.style;
        return n && (j = n[d], "" === j && !f.contains(c.ownerDocument, c) && (j = f.style(c, d)), va.test(j) && gc.test(d) && (e = l.width, m = l.minWidth, g = l.maxWidth, l.minWidth = l.maxWidth = l.width = j, j = n.width, l.width = e, l.minWidth = m, l.maxWidth = g)), j
    } : y.documentElement.currentStyle && (M = function(b, c) {
        var d, j, f = b.currentStyle && b.currentStyle[c],
            e = b.style;
        return null == f && e && e[c] && (f = e[c]), va.test(f) && !ud.test(c) && (d = e.left, j = b.runtimeStyle && b.runtimeStyle.left, j && (b.runtimeStyle.left = b.currentStyle.left), e.left = "fontSize" === c ? "1em" : f, f = e.pixelLeft + "px", e.left = d, j && (b.runtimeStyle.left = j)), "" === f ? "auto" : f
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, j) {
                if (d) return 0 === b.offsetWidth && vd.test(M(b, "display")) ? f.swap(b, xd, function() {
                    return Y(b, c, j)
                }) : Y(b, c, j)
            },
            set: function(b, d, j) {
                return A(b, d, j ? C(b, c, j, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return td.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                j = b.currentStyle,
                e = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                m = j && j.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(m.replace(pb, "")) && d.removeAttribute && (d.removeAttribute("filter"), j && !j.filter))) d.filter = pb.test(m) ? m.replace(pb, e) : m + " " + e
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return M(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var j = M(b, c);
                        return va.test(j) ? f(b).position()[c] + "px" : j
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || M(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var j = "string" == typeof d ? d.split(" ") : [d],
                    f = {};
                for (d = 0; 4 > d; d++) f[b + da[d] + c] = j[d] || j[d - 2] || j[0];
                return f
            }
        };
        gc.test(b) || (f.cssHooks[b + c].set = A)
    });
    var zd = /%20/g,
        vc = /\[\]$/,
        ic = /\r?\n/g,
        Ad = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Bd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Bd.test(this.nodeName) || Ad.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(ic, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(ic, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var j, e = [],
            m = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            m(this.name, this.value)
        });
        else
            for (j in b) F(j, b[j], d, m);
        return e.join("&").replace(zd, "+")
    };
    var oa, ja, Cd = /#.*$/,
        Dd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Ed = /^(?:GET|HEAD)$/,
        Fd = /^\/\//,
        jc = /\?/,
        Gd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Hd = /([?&])_=[^&]*/,
        kc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        lc = f.fn.load,
        Va = {},
        mc = {},
        nc = ["*/"] + ["*"];
    try {
        ja = xc.href
    } catch (Qd) {
        ja = y.createElement("a"), ja.href = "", ja = ja.href
    }
    oa = kc.exec(ja.toLowerCase()) || [];
    f.fn.load = function(b, d, j) {
        if ("string" != typeof b && lc) return lc.apply(this, arguments);
        if (!this.length) return this;
        var e, m, g, n = this,
            l = b.indexOf(" ");
        return 0 <= l && (e = b.slice(l, b.length), b = b.slice(0, l)), f.isFunction(d) ? (j = d, d = c) : d && "object" == typeof d && (m = "POST"), f.ajax({
            url: b,
            type: m,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                j && n.each(j, g || [b.responseText, c, b])
            }
        }).done(function(b) {
            g = arguments;
            n.html(e ? f("<div>").append(b.replace(Gd, "")).find(e) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, j, e, m) {
            return f.isFunction(j) && (m = m || e, e = j, j = c), f.ajax({
                type: d,
                url: b,
                data: j,
                success: e,
                dataType: m
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b, c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? wb(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), wb(b, c), b
        },
        ajaxSettings: {
            url: ja,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(oa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": nc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: vb(Va),
        ajaxTransport: vb(mc),
        ajax: function(b, d) {
            function j(b, d, g, p) {
                var v, r, s, t, N, P = d;
                if (2 !== E) {
                    E = 2;
                    l && clearTimeout(l);
                    n = c;
                    m = p || "";
                    D.readyState = 0 < b ? 4 : 0;
                    if (g) {
                        t = q;
                        p = D;
                        var R, A, C, H, J = t.contents,
                            I = t.dataTypes,
                            L = t.responseFields;
                        for (A in L) A in g && (p[L[A]] = g[A]);
                        for (;
                            "*" === I[0];) I.shift(), R === c && (R = t.mimeType || p.getResponseHeader("content-type"));
                        if (R)
                            for (A in J)
                                if (J[A] && J[A].test(R)) {
                                    I.unshift(A);
                                    break
                                }
                        if (I[0] in g) C = I[0];
                        else {
                            for (A in g) {
                                if (!I[0] || t.converters[A + " " + I[0]]) {
                                    C = A;
                                    break
                                }
                                H || (H = A)
                            }
                            C = C || H
                        }
                        t = g = C ? (C !== I[0] && I.unshift(C), g[C]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (q.ifModified && (N = D.getResponseHeader("Last-Modified"), N && (f.lastModified[e] = N), N = D.getResponseHeader("Etag"), N && (f.etag[e] = N)), 304 === b) P = "notmodified", v = !0;
                        else {
                            var F;
                            a: {
                                v = q;
                                r = t;
                                var M, P = v.dataTypes.slice();
                                g = P[0];
                                R = {};
                                A = 0;
                                v.dataFilter && (r = v.dataFilter(r, v.dataType));
                                if (P[1])
                                    for (F in v.converters) R[F.toLowerCase()] = v.converters[F];
                                for (; s = P[++A];)
                                    if ("*" !== s) {
                                        if ("*" !== g && g !== s) {
                                            F = R[g + " " + s] || R["* " + s];
                                            if (!F)
                                                for (M in R)
                                                    if (N = M.split(" "), N[1] === s && (F = R[g + " " + N[0]] || R["* " + N[0]])) {
                                                        !0 === F ? F = R[M] : !0 !== R[M] && (s = N[0], P.splice(A--, 0, s));
                                                        break
                                                    }
                                            if (!0 !== F)
                                                if (F && v["throws"]) r = F(r);
                                                else try {
                                                    r = F(r)
                                                } catch (O) {
                                                    F = {
                                                        state: "parsererror",
                                                        error: F ? O : "No conversion from " + g + " to " + s
                                                    };
                                                    break a
                                                }
                                        }
                                        g = s
                                    }
                                F = {
                                    state: "success",
                                    data: r
                                }
                            }
                            v = F;
                            P = v.state;
                            r = v.data;
                            s = v.error;
                            v = !s
                        } else if (s = P, !P || b) P = "error", 0 > b && (b = 0);
                    D.status = b;
                    D.statusText = (d || P) + "";
                    v ? y.resolveWith(x, [r, P, D]) : y.rejectWith(x, [D, P, s]);
                    D.statusCode(G);
                    G = c;
                    u && z.trigger("ajax" + (v ? "Success" : "Error"), [D, q, v ? r : s]);
                    B.fireWith(x, [D, P]);
                    u && (z.trigger("ajaxComplete", [D, q]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var e, m, g, n, l, r, u, t, q = f.ajaxSetup({}, d),
                x = q.context || q,
                z = x !== q && (x.nodeType || x instanceof f) ? f(x) : f.event,
                y = f.Deferred(),
                B = f.Callbacks("once memory"),
                G = q.statusCode || {},
                A = {},
                C = {},
                E = 0,
                H = "canceled",
                D = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!E) {
                            var d = b.toLowerCase();
                            b = C[d] = C[d] || b;
                            A[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === E ? m : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === E) {
                            if (!g)
                                for (g = {}; d = Dd.exec(m);) g[d[1].toLowerCase()] = d[2];
                            d = g[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return E || (q.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || H, n && n.abort(b), j(0, b), this
                    }
                };
            y.promise(D);
            D.success = D.done;
            D.error = D.fail;
            D.complete = B.add;
            D.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > E)
                        for (c in b) G[c] = [G[c], b[c]];
                    else c = b[D.status], D.always(c)
                }
                return this
            };
            q.url = ((b || q.url) + "").replace(Cd, "").replace(Fd, oa[1] + "//");
            q.dataTypes = f.trim(q.dataType || "*").toLowerCase().split(ea);
            null == q.crossDomain && (r = kc.exec(q.url.toLowerCase()) || !1, q.crossDomain = r && r.join(":") + (r[3] ? "" : "http:" === r[1] ? 80 : 443) !== oa.join(":") + (oa[3] ? "" : "http:" === oa[1] ? 80 : 443));
            q.data && q.processData && "string" != typeof q.data && (q.data = f.param(q.data, q.traditional));
            wa(Va, q, d, D);
            if (2 === E) return D;
            u = q.global;
            q.type = q.type.toUpperCase();
            q.hasContent = !Ed.test(q.type);
            u && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!q.hasContent && (q.data && (q.url += (jc.test(q.url) ? "&" : "?") + q.data, delete q.data), e = q.url, !1 === q.cache)) {
                r = f.now();
                var J = q.url.replace(Hd, "$1_=" + r);
                q.url = J + (J === q.url ? (jc.test(q.url) ? "&" : "?") + "_=" + r : "")
            }(q.data && q.hasContent && !1 !== q.contentType || d.contentType) && D.setRequestHeader("Content-Type", q.contentType);
            q.ifModified && (e = e || q.url, f.lastModified[e] && D.setRequestHeader("If-Modified-Since", f.lastModified[e]), f.etag[e] && D.setRequestHeader("If-None-Match", f.etag[e]));
            D.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : q.accepts["*"]);
            for (t in q.headers) D.setRequestHeader(t, q.headers[t]);
            if (!q.beforeSend || !1 !== q.beforeSend.call(x, D, q) && 2 !== E) {
                H = "abort";
                for (t in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) D[t](q[t]);
                if (n = wa(mc, q, d, D)) {
                    D.readyState = 1;
                    u && z.trigger("ajaxSend", [D, q]);
                    q.async && 0 < q.timeout && (l = setTimeout(function() {
                        D.abort("timeout")
                    }, q.timeout));
                    try {
                        E = 1, n.send(A, j)
                    } catch (I) {
                        if (2 > E) j(-1, I);
                        else throw I;
                    }
                } else j(-1, "No Transport");
                return D
            }
            return D.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var oc = [],
        Id = /\?/,
        Sa = /(=)\?(?=&|$)|\?\?/,
        Jd = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = oc.pop() || f.expando + "_" + Jd++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, j, e) {
        var m, g, n, l = d.data,
            r = d.url,
            u = !1 !== d.jsonp,
            t = u && Sa.test(r),
            q = u && !t && "string" == typeof l && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Sa.test(l);
        if ("jsonp" === d.dataTypes[0] || t || q) return m = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, g = b[m], t ? d.url = r.replace(Sa, "$1" + m) : q ? d.data = l.replace(Sa, "$1" + m) : u && (d.url += (Id.test(r) ? "&" : "?") + d.jsonp + "=" + m), d.converters["script json"] = function() {
            return n || f.error(m + " was not called"), n[0]
        }, d.dataTypes[0] = "json", b[m] = function() {
            n = arguments
        }, e.always(function() {
            b[m] = g;
            d[m] && (d.jsonpCallback = j.jsonpCallback, oc.push(m));
            n && f.isFunction(g) && g(n[0]);
            n = g = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, j = y.head || y.getElementsByTagName("head")[0] || y.documentElement;
            return {
                send: function(f, e) {
                    d = y.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, f) {
                        if (f || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, j && d.parentNode && j.removeChild(d), d = c, f || e(200, "success")
                    };
                    j.insertBefore(d, j.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var pa, qb = b.ActiveXObject ? function() {
            for (var b in pa) pa[b](0, 1)
        } : !1,
        Kd = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && xb())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : xb;
    var rb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!rb,
        cors: !!rb && "withCredentials" in rb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var j;
            return {
                send: function(e, m) {
                    var g, n, l = d.xhr();
                    d.username ? l.open(d.type, d.url, d.async, d.username, d.password) : l.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (n in d.xhrFields) l[n] = d.xhrFields[n];
                    d.mimeType && l.overrideMimeType && l.overrideMimeType(d.mimeType);
                    !d.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (n in e) l.setRequestHeader(n, e[n])
                    } catch (r) {}
                    l.send(d.hasContent && d.data || null);
                    j = function(b, e) {
                        var n, p, r, u, t;
                        try {
                            if (j && (e || 4 === l.readyState))
                                if (j = c, g && (l.onreadystatechange = f.noop, qb && delete pa[g]), e) 4 !== l.readyState && l.abort();
                                else {
                                    n = l.status;
                                    r = l.getAllResponseHeaders();
                                    u = {};
                                    (t = l.responseXML) && t.documentElement && (u.xml = t);
                                    try {
                                        u.text = l.responseText
                                    } catch (q) {}
                                    try {
                                        p = l.statusText
                                    } catch (x) {
                                        p = ""
                                    }!n && d.isLocal && !d.crossDomain ? n = u.text ? 200 : 404 : 1223 === n && (n = 204)
                                }
                        } catch (z) {
                            e || m(-1, z)
                        }
                        u && m(n, p, u, r)
                    };
                    d.async ? 4 === l.readyState ? setTimeout(j, 0) : (g = ++Kd, qb && (pa || (pa = {}, f(b).unload(qb)), pa[g] = j), l.onreadystatechange = j) : j()
                },
                abort: function() {
                    j && j(0, 1)
                }
            }
        }
    });
    var xa, Ta, Ld = /^(?:toggle|show|hide)$/,
        Md = RegExp("^(?:([-+])=|)(" + Ba + ")([a-z%]*)$", "i"),
        Nd = /queueHooks$/,
        ya = [
            function(b, c, d) {
                var j, e, m, g, n, l, r = this,
                    u = b.style,
                    t = {},
                    q = [],
                    x = b.nodeType && B(b);
                d.queue || (n = f._queueHooks(b, "fx"), null == n.unqueued && (n.unqueued = 0, l = n.empty.fire, n.empty.fire = function() {
                    n.unqueued || l()
                }), n.unqueued++, r.always(function() {
                    r.always(function() {
                        n.unqueued--;
                        f.queue(b, "fx").length || n.empty.fire()
                    })
                }));
                1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === ca(b.nodeName) ? u.display = "inline-block" : u.zoom = 1));
                d.overflow && (u.overflow = "hidden", f.support.shrinkWrapBlocks || r.done(function() {
                    u.overflow = d.overflow[0];
                    u.overflowX = d.overflow[1];
                    u.overflowY = d.overflow[2]
                }));
                for (j in c) e = c[j], Ld.exec(e) && (delete c[j], e !== (x ? "hide" : "show") && q.push(j));
                if (e = q.length) {
                    m = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                    x ? f(b).show() : r.done(function() {
                        f(b).hide()
                    });
                    r.done(function() {
                        var c;
                        f.removeData(b, "fxshow", !0);
                        for (c in t) f.style(b, c, t[c])
                    });
                    for (j = 0; j < e; j++) c = q[j], g = r.createTween(c, x ? m[c] : 0), t[c] = m[c] || f.style(b, c), c in m || (m[c] = g.start, x && (g.end = g.start, g.start = "width" === c || "height" === c ? 1 : 0))
                }
            }
        ],
        qa = {
            "*": [
                function(b, c) {
                    var d, j, e = this.createTween(b, c),
                        m = Md.exec(c),
                        g = e.cur(),
                        n = +g || 0,
                        l = 1,
                        r = 20;
                    if (m) {
                        d = +m[2];
                        j = m[3] || (f.cssNumber[b] ? "" : "px");
                        if ("px" !== j && n) {
                            n = f.css(e.elem, b, !0) || d || 1;
                            do l = l || ".5", n /= l, f.style(e.elem, b, n + j); while (l !== (l = e.cur() / g) && 1 !== l && --r)
                        }
                        e.unit = j;
                        e.start = n;
                        e.end = m[1] ? n + (m[1] + 1) * d : d
                    }
                    return e
                }
            ]
        };
    f.Animation = f.extend(zb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, j = 0, e = b.length; j < e; j++) d = b[j], qa[d] = qa[d] || [], qa[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? ya.unshift(b) : ya.push(b)
        }
    });
    f.Tween = O;
    O.prototype = {
        constructor: O,
        init: function(b, c, d, j, e, m) {
            this.elem = b;
            this.prop = d;
            this.easing = e || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = j;
            this.unit = m || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = O.propHooks[this.prop];
            return b && b.get ? b.get(this) : O.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = O.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : O.propHooks._default.set(this), this
        }
    };
    O.prototype.init.prototype = O.prototype;
    O.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(j, e, m) {
            return null == j || "boolean" == typeof j || !b && f.isFunction(j) && f.isFunction(e) ? d.apply(this, arguments) : this.animate(za(c, !0), j, e, m)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, j) {
            return this.filter(B).css("opacity", 0).show().end().animate({
                opacity: c
            }, b, d, j)
        },
        animate: function(b, c, d, j) {
            var e = f.isEmptyObject(b),
                m = f.speed(c, d, j);
            c = function() {
                var c = zb(this, f.extend({}, b), m);
                e && c.stop(!0)
            };
            return e || !1 === m.queue ? this.each(c) : this.queue(m.queue, c)
        },
        stop: function(b, d, j) {
            var e = function(b) {
                var c = b.stop;
                delete b.stop;
                c(j)
            };
            return "string" != typeof b && (j = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    m = f.timers,
                    g = f._data(this);
                if (d) g[d] && g[d].stop && e(g[d]);
                else
                    for (d in g) g[d] && g[d].stop && Nd.test(d) && e(g[d]);
                for (d = m.length; d--;) m[d].elem === this && (null == b || m[d].queue === b) && (m[d].anim.stop(j), c = !1, m.splice(d, 1));
                (c || !j) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: za("show"),
        slideUp: za("hide"),
        slideToggle: za("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, j) {
            return this.animate(c, b, d, j)
        }
    });
    f.speed = function(b, c, d) {
        var j = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        j.duration = f.fx.off ? 0 : "number" == typeof j.duration ? j.duration : j.duration in f.fx.speeds ? f.fx.speeds[j.duration] : f.fx.speeds._default;
        if (null == j.queue || !0 === j.queue) j.queue = "fx";
        return j.old = j.complete, j.complete = function() {
            f.isFunction(j.old) && j.old.call(this);
            j.queue && f.dequeue(this, j.queue)
        }, j
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = O.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
            d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Ta && (Ta = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Ta);
        Ta = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var pc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b === c ? this : this.each(function(c) {
            f.offset.setOffset(this, b, c)
        });
        var d, j, e, m, g, n, l, r = {
                top: 0,
                left: 0
            },
            u = this[0],
            t = u && u.ownerDocument;
        if (t) return (j = t.body) === u ? f.offset.bodyOffset(u) : (d = t.documentElement, f.contains(d, u) ? ("undefined" != typeof u.getBoundingClientRect && (r = u.getBoundingClientRect()), e = Ab(t), m = d.clientTop || j.clientTop || 0, g = d.clientLeft || j.clientLeft || 0, n = e.pageYOffset || d.scrollTop, l = e.pageXOffset || d.scrollLeft, {
            top: r.top + n - m,
            left: r.left + l - g
        }) : r)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var j = f.css(b, "position");
            "static" === j && (b.style.position = "relative");
            var e = f(b),
                m = e.offset(),
                g = f.css(b, "top"),
                n = f.css(b, "left"),
                l = {},
                r = {},
                u, t;
            ("absolute" === j || "fixed" === j) && -1 < f.inArray("auto", [g, n]) ? (r = e.position(), u = r.top, t = r.left) : (u = parseFloat(g) || 0, t = parseFloat(n) || 0);
            f.isFunction(c) && (c = c.call(b, d, m));
            null != c.top && (l.top = c.top - m.top + u);
            null != c.left && (l.left = c.left - m.left + t);
            "using" in c ? c.using.call(b, l) : e.css(l)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    j = pc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, j.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, j.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - j.top,
                    left: d.left - j.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || y.body; b && !pc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || y.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var j = /Y/.test(d);
        f.fn[b] = function(e) {
            return f.access(this, function(b, e, m) {
                var g = Ab(b);
                if (m === c) return g ? d in g ? g[d] : g.document.documentElement[e] : b[e];
                g ? g.scrollTo(j ? f(g).scrollLeft() : m, j ? m : f(g).scrollTop()) : b[e] = m
            }, b, e, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(j, e) {
            f.fn[e] = function(e, m) {
                var g = arguments.length && (j || "boolean" != typeof e),
                    n = j || (!0 === e || !0 === m ? "margin" : "border");
                return f.access(this, function(d, j, e) {
                    var m;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (m = d.documentElement, Math.max(d.body["scroll" + b], m["scroll" + b], d.body["offset" + b], m["offset" + b], m["client" + b])) : e === c ? f.css(d, j, e, n) : f.style(d, j, e, n)
                }, d, g ? e : c, g, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
}
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] || null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var l = document.createElement("object");
            l.id = "jukebox-flashstream-" + this.id;
            l.setAttribute("type", "application/x-shockwave-flash");
            l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            l.setAttribute("width", "0");
            l.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), l.appendChild(b);
            c.outerHTML = l.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c = document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started = b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" === typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ? this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                e: "3gp",
                m: ["audio/3gpp", "audio/amr"]
            }, {
                e: "aac",
                m: ["audio/aac", "audio/aacp"]
            }, {
                e: "amr",
                m: ["audio/amr", "audio/3gpp"]
            }, {
                e: "caf",
                m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
            }, {
                e: "m4a",
                m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
            }, {
                e: "mp3",
                m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
            }, {
                e: "mpga",
                m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
            }, {
                e: "mp4",
                m: ["audio/mp4", "video/mp4"]
            }, {
                e: "ogg",
                m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
            }, {
                e: "wav",
                m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
            }, {
                e: "webm",
                m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
            }], d, e, g = 0, l = c.length; g < l; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var q = 0, t = c[g].m.length; q < t; q++)
                        if (d = c[g].m[q], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (j) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length && this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d], c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = function() {
        this.init()
    };
    b.prototype = {
        init: function() {
            var b = this || c;
            b._codecs = {};
            b._howls = [];
            b._muted = !1;
            b._volume = 1;
            b._canPlayEvent = "canplaythrough";
            b._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null;
            b.masterGain = null;
            b.noAudio = !1;
            b.usingWebAudio = !0;
            b.autoSuspend = !0;
            b.ctx = null;
            b.mobileAutoEnable = !0;
            b._setup();
            return b
        },
        volume: function(b) {
            var d = this || c;
            b = parseFloat(b);
            d.ctx || t();
            if ("undefined" !== typeof b && 0 <= b && 1 >= b) {
                d._volume = b;
                if (d._muted) return d;
                d.usingWebAudio && (d.masterGain.gain.value = b);
                for (var e = 0; e < d._howls.length; e++)
                    if (!d._howls[e]._webAudio)
                        for (var g = d._howls[e]._getSoundIds(), l = 0; l < g.length; l++) {
                            var q = d._howls[e]._soundById(g[l]);
                            q && q._node && (q._node.volume = q._volume * b)
                        }
                    return d
            }
            return d._volume
        },
        mute: function(b) {
            var d = this || c;
            d.ctx || t();
            d._muted = b;
            d.usingWebAudio && (d.masterGain.gain.value = b ? 0 : d._volume);
            for (var e = 0; e < d._howls.length; e++)
                if (!d._howls[e]._webAudio)
                    for (var g = d._howls[e]._getSoundIds(), l = 0; l < g.length; l++) {
                        var q = d._howls[e]._soundById(g[l]);
                        q && q._node && (q._node.muted = b ? !0 : q._muted)
                    }
                return d
        },
        unload: function() {
            for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
            b.usingWebAudio && b.ctx && "undefined" !== typeof b.ctx.close && (b.ctx.close(), b.ctx = null, t());
            return b
        },
        codecs: function(b) {
            return (this || c)._codecs[b.replace(/^x-/, "")]
        },
        _setup: function() {
            var b = this || c;
            b.state = b.ctx ? b.ctx.state || "running" : "running";
            b._autoSuspend();
            if (!b.usingWebAudio)
                if ("undefined" !== typeof Audio) try {
                    var d = new Audio;
                    "undefined" === typeof d.oncanplaythrough && (b._canPlayEvent = "canplay")
                } catch (e) {
                    b.noAudio = !0
                } else b.noAudio = !0;
            try {
                d = new Audio, d.muted && (b.noAudio = !0)
            } catch (g) {}
            b.noAudio || b._setupCodecs();
            return b
        },
        _setupCodecs: function() {
            var b = this || c,
                d = null;
            try {
                d = "undefined" !== typeof Audio ? new Audio : null
            } catch (e) {
                return b
            }
            if (!d || "function" !== typeof d.canPlayType) return b;
            var g = d.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
                l = l && 33 > parseInt(l[0].split("/")[1], 10);
            b._codecs = {
                mp3: !(l || !g && !d.canPlayType("audio/mp3;").replace(/^no$/, "")),
                mpeg: !!g,
                opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                aac: !!d.canPlayType("audio/aac;").replace(/^no$/, ""),
                caf: !!d.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                m4a: !!(d.canPlayType("audio/x-m4a;") || d.canPlayType("audio/m4a;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                mp4: !!(d.canPlayType("audio/x-mp4;") || d.canPlayType("audio/mp4;") || d.canPlayType("audio/aac;")).replace(/^no$/, ""),
                weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                flac: !!(d.canPlayType("audio/x-flac;") || d.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return b
        },
        _enableMobileAudio: function() {
            var b = this || c,
                d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(b._navigator && b._navigator.userAgent),
                e = !!("ontouchend" in window || b._navigator && 0 < b._navigator.maxTouchPoints || b._navigator && 0 < b._navigator.msMaxTouchPoints);
            if (!b._mobileEnabled && b.ctx && (d || e)) {
                b._mobileEnabled = !1;
                !b._mobileUnloaded && 44100 !== b.ctx.sampleRate && (b._mobileUnloaded = !0, b.unload());
                b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
                var g = function() {
                    var c = b.ctx.createBufferSource();
                    c.buffer = b._scratchBuffer;
                    c.connect(b.ctx.destination);
                    "undefined" === typeof c.start ? c.noteOn(0) : c.start(0);
                    c.onended = function() {
                        c.disconnect(0);
                        b._mobileEnabled = !0;
                        b.mobileAutoEnable = !1;
                        document.removeEventListener("touchend", g, !0)
                    }
                };
                document.addEventListener("touchend", g, !0);
                return b
            }
        },
        _autoSuspend: function() {
            var b = this;
            if (b.autoSuspend && b.ctx && "undefined" !== typeof b.ctx.suspend && c.usingWebAudio) {
                for (var d = 0; d < b._howls.length; d++)
                    if (b._howls[d]._webAudio)
                        for (var e = 0; e < b._howls[d]._sounds.length; e++)
                            if (!b._howls[d]._sounds[e]._paused) return b;
                b._suspendTimer && clearTimeout(b._suspendTimer);
                b._suspendTimer = setTimeout(function() {
                    b.autoSuspend && (b._suspendTimer = null, b.state = "suspending", b.ctx.suspend().then(function() {
                        b.state = "suspended";
                        b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume())
                    }))
                }, 3E4);
                return b
            }
        },
        _autoResume: function() {
            var b = this;
            if (b.ctx && "undefined" !== typeof b.ctx.resume && c.usingWebAudio) return "running" === b.state && b._suspendTimer ? (clearTimeout(b._suspendTimer), b._suspendTimer = null) : "suspended" === b.state ? (b.state = "resuming", b.ctx.resume().then(function() {
                b.state = "running";
                for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit("resume")
            }), b._suspendTimer && (clearTimeout(b._suspendTimer), b._suspendTimer = null)) : "suspending" === b.state && (b._resumeAfterSuspend = !0), b
        }
    };
    var c = new b,
        d = function(b) {
            !b.src || 0 === b.src.length ? console.error("An array of source files must be passed with any new Howl.") : this.init(b)
        };
    d.prototype = {
        init: function(b) {
            var d = this;
            c.ctx || t();
            d._autoplay = b.autoplay || !1;
            d._format = "string" !== typeof b.format ? b.format : [b.format];
            d._html5 = b.html5 || !1;
            d._muted = b.mute || !1;
            d._loop = b.loop || !1;
            d._pool = b.pool || 5;
            d._preload = "boolean" === typeof b.preload ? b.preload : !0;
            d._rate = b.rate || 1;
            d._sprite = b.sprite || {};
            d._src = "string" !== typeof b.src ? b.src : [b.src];
            d._volume = void 0 !== b.volume ? b.volume : 1;
            d._duration = 0;
            d._state = "unloaded";
            d._sounds = [];
            d._endTimers = {};
            d._queue = [];
            d._onend = b.onend ? [{
                fn: b.onend
            }] : [];
            d._onfade = b.onfade ? [{
                fn: b.onfade
            }] : [];
            d._onload = b.onload ? [{
                fn: b.onload
            }] : [];
            d._onloaderror = b.onloaderror ? [{
                fn: b.onloaderror
            }] : [];
            d._onpause = b.onpause ? [{
                fn: b.onpause
            }] : [];
            d._onplay = b.onplay ? [{
                fn: b.onplay
            }] : [];
            d._onstop = b.onstop ? [{
                fn: b.onstop
            }] : [];
            d._onmute = b.onmute ? [{
                fn: b.onmute
            }] : [];
            d._onvolume = b.onvolume ? [{
                fn: b.onvolume
            }] : [];
            d._onrate = b.onrate ? [{
                fn: b.onrate
            }] : [];
            d._onseek = b.onseek ? [{
                fn: b.onseek
            }] : [];
            d._onresume = [];
            d._webAudio = c.usingWebAudio && !d._html5;
            "undefined" !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
            c._howls.push(d);
            d._autoplay && d._queue.push({
                event: "play",
                action: function() {
                    d.play()
                }
            });
            d._preload && d.load();
            return d
        },
        load: function() {
            var b = null;
            if (c.noAudio) this._emit("loaderror", null, "No audio support.");
            else {
                "string" === typeof this._src && (this._src = [this._src]);
                for (var d = 0; d < this._src.length; d++) {
                    var n, u;
                    if (this._format && this._format[d]) n = this._format[d];
                    else {
                        u = this._src[d];
                        if ("string" !== typeof u) {
                            this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }(n = /^data:audio\/([^;,]+);/i.exec(u)) || (n = /\.([^.]+)$/.exec(u.split("?", 1)[0]));
                        n && (n = n[1].toLowerCase())
                    } if (c.codecs(n)) {
                        b = this._src[d];
                        break
                    }
                }
                if (b) {
                    this._src = b;
                    this._state = "loading";
                    "https:" === window.location.protocol && "http:" === b.slice(0, 5) && (this._html5 = !0, this._webAudio = !1);
                    new e(this);
                    if (this._webAudio) {
                        var r = this,
                            t = r._src;
                        if (g[t]) r._duration = g[t].duration, q(r);
                        else if (/^data:[^;]+;base64,/.test(t)) {
                            b = atob(t.split(",")[1]);
                            d = new Uint8Array(b.length);
                            for (n = 0; n < b.length; ++n) d[n] = b.charCodeAt(n);
                            l(d.buffer, r)
                        } else {
                            var z = new XMLHttpRequest;
                            z.open("GET", t, !0);
                            z.responseType = "arraybuffer";
                            z.onload = function() {
                                var b = (z.status + "")[0];
                                "0" !== b && "2" !== b && "3" !== b ? r._emit("loaderror", null, "Failed loading audio file with status: " +
                                    z.status + ".") : l(z.response, r)
                            };
                            z.onerror = function() {
                                r._webAudio && (r._html5 = !0, r._webAudio = !1, r._sounds = [], delete g[t], r.load())
                            };
                            try {
                                z.send()
                            } catch (B) {
                                z.onerror()
                            }
                        }
                    }
                    return this
                }
                this._emit("loaderror", null, "No codec support for selected audio sources.")
            }
        },
        play: function(b, d) {
            var e = this,
                g = null;
            if ("number" === typeof b) g = b, b = null;
            else {
                if ("string" === typeof b && "loaded" === e._state && !e._sprite[b]) return null;
                if ("undefined" === typeof b) {
                    b = "__default";
                    for (var l = 0, t = 0; t < e._sounds.length; t++) e._sounds[t]._paused && !e._sounds[t]._ended && (l++, g = e._sounds[t]._id);
                    1 === l ? b = null : g = null
                }
            }
            var q = g ? e._soundById(g) : e._inactiveSound();
            if (!q) return null;
            g && !b && (b = q._sprite || "__default");
            if ("loaded" !== e._state && !e._sprite[b]) return e._queue.push({
                event: "play",
                action: function() {
                    e.play(e._soundById(q._id) ? q._id : void 0)
                }
            }), q._id;
            if (g && !q._paused) return d || setTimeout(function() {
                e._emit("play", q._id)
            }, 0), q._id;
            e._webAudio && c._autoResume();
            var B = Math.max(0, 0 < q._seek ? q._seek : e._sprite[b][0] / 1E3),
                E = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) /
                    1E3 - B),
                A = 1E3 * E / Math.abs(q._rate);
            q._paused = !1;
            q._ended = !1;
            q._sprite = b;
            q._seek = B;
            q._start = e._sprite[b][0] / 1E3;
            q._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1E3;
            q._loop = !(!q._loop && !e._sprite[b][2]);
            var C = q._node;
            if (e._webAudio) g = function() {
                e._refreshBuffer(q);
                C.gain.setValueAtTime(q._muted || e._muted ? 0 : q._volume, c.ctx.currentTime);
                q._playStart = c.ctx.currentTime;
                "undefined" === typeof C.bufferSource.start ? q._loop ? C.bufferSource.noteGrainOn(0, B, 86400) : C.bufferSource.noteGrainOn(0, B, E) : q._loop ? C.bufferSource.start(0,
                    B, 86400) : C.bufferSource.start(0, B, E);
                Infinity !== A && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), A));
                d || setTimeout(function() {
                    e._emit("play", q._id)
                }, 0)
            }, l = "running" === c.state, "loaded" === e._state && l ? g() : (e.once(l ? "load" : "resume", g, l ? q._id : null), e._clearTimer(q._id));
            else {
                var Y = function() {
                        C.currentTime = B;
                        C.muted = q._muted || e._muted || c._muted || C.muted;
                        C.volume = q._volume * c.volume();
                        C.playbackRate = q._rate;
                        setTimeout(function() {
                            C.play();
                            Infinity !== A && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), A));
                            d || e._emit("play", q._id)
                        }, 0)
                    },
                    g = "loaded" === e._state && (window && window.ejecta || !C.readyState && c._navigator.isCocoonJS);
                if (4 === C.readyState || g) Y();
                else {
                    var ca = function() {
                        Y();
                        C.removeEventListener(c._canPlayEvent, ca, !1)
                    };
                    C.addEventListener(c._canPlayEvent, ca, !1);
                    e._clearTimer(q._id)
                }
            }
            return q._id
        },
        pause: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "pause",
                action: function() {
                    d.pause(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), g = 0; g < e.length; g++) {
                d._clearTimer(e[g]);
                var l = d._soundById(e[g]);
                if (l && !l._paused && (l._seek = d.seek(e[g]), l._rateSeek = 0, l._paused = !0, d._stopFade(e[g]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) break;
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else(!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
                c || d._emit("pause", l ? l._id : null)
            }
            return d
        },
        stop: function(b, c) {
            var d = this;
            if ("loaded" !== d._state) return d._queue.push({
                event: "stop",
                action: function() {
                    d.stop(b)
                }
            }), d;
            for (var e = d._getSoundIds(b), g = 0; g < e.length; g++) {
                d._clearTimer(e[g]);
                var l = d._soundById(e[g]);
                if (l && (l._seek = l._start || 0, l._rateSeek = 0, l._paused = !0, l._ended = !0, d._stopFade(e[g]), l._node))
                    if (d._webAudio) {
                        if (!l._node.bufferSource) {
                            c || d._emit("stop", l._id);
                            break
                        }
                        "undefined" === typeof l._node.bufferSource.stop ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0);
                        d._cleanBuffer(l._node)
                    } else if (!isNaN(l._node.duration) || Infinity === l._node.duration) l._node.currentTime = l._start || 0, l._node.pause();
                l && !c && d._emit("stop", l._id)
            }
            return d
        },
        mute: function(b, d) {
            var e = this;
            if ("loaded" !== e._state) return e._queue.push({
                event: "mute",
                action: function() {
                    e.mute(b, d)
                }
            }), e;
            if ("undefined" === typeof d)
                if ("boolean" === typeof b) e._muted = b;
                else return e._muted;
            for (var g = e._getSoundIds(d), l = 0; l < g.length; l++) {
                var q = e._soundById(g[l]);
                q && (q._muted = b, e._webAudio && q._node ? q._node.gain.setValueAtTime(b ? 0 : q._volume, c.ctx.currentTime) : q._node && (q._node.muted = c._muted ? !0 : b), e._emit("mute", q._id))
            }
            return e
        },
        volume: function() {
            var b = this,
                d = arguments,
                e, g;
            if (0 === d.length) return b._volume;
            1 === d.length || 2 === d.length && "undefined" === typeof d[1] ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 <= d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            var l;
            if ("undefined" !== typeof e && 0 <= e && 1 >= e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "volume",
                    action: function() {
                        b.volume.apply(b, d)
                    }
                }), b;
                "undefined" === typeof g && (b._volume = e);
                g = b._getSoundIds(g);
                for (var q = 0; q < g.length; q++)
                    if (l = b._soundById(g[q])) l._volume = e, d[2] || b._stopFade(g[q]), b._webAudio && l._node && !l._muted ? l._node.gain.setValueAtTime(e, c.ctx.currentTime) : l._node && !l._muted && (l._node.volume = e * c.volume()), b._emit("volume", l._id)
            } else return (l = g ? b._soundById(g) : b._sounds[0]) ? l._volume : 0;
            return b
        },
        fade: function(b, d, e, g) {
            var l = this,
                q = Math.abs(b - d),
                t = b > d ? "out" : "in",
                B = q / 0.01,
                q = 0 < B ? e / B : e;
            4 > q && (B = Math.ceil(B / (4 / q)), q = 4);
            if ("loaded" !== l._state) return l._queue.push({
                event: "fade",
                action: function() {
                    l.fade(b, d, e, g)
                }
            }), l;
            l.volume(b, g);
            for (var E = l._getSoundIds(g), A = 0; A < E.length; A++) {
                var C = l._soundById(E[A]);
                if (C) {
                    g || l._stopFade(E[A]);
                    if (l._webAudio && !C._muted) {
                        var Y = c.ctx.currentTime,
                            ca = Y + e / 1E3;
                        C._volume = b;
                        C._node.gain.setValueAtTime(b, Y);
                        C._node.gain.linearRampToValueAtTime(d, ca)
                    }
                    var F = b;
                    C._interval = setInterval(function(b, c) {
                        0 < B && (F += "in" === t ? 0.01 : -0.01);
                        F = Math.max(0, F);
                        F = Math.min(1, F);
                        F = Math.round(100 * F) / 100;
                        l._webAudio ? ("undefined" === typeof g && (l._volume = F), c._volume = F) : l.volume(F, b, !0);
                        F === d && (clearInterval(c._interval), c._interval = null, l.volume(F, b),
                            l._emit("fade", b))
                    }.bind(l, E[A], C), q)
                }
            }
            return l
        },
        _stopFade: function(b) {
            var d = this._soundById(b);
            d && d._interval && (this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime), clearInterval(d._interval), d._interval = null, this._emit("fade", b));
            return this
        },
        loop: function() {
            var b = arguments,
                c, d;
            if (0 === b.length) return this._loop;
            if (1 === b.length)
                if ("boolean" === typeof b[0]) this._loop = c = b[0];
                else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
            else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
            d = this._getSoundIds(d);
            for (var e = 0; e < d.length; e++)
                if (b = this._soundById(d[e]))
                    if (b._loop = c, this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c)) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            return this
        },
        rate: function() {
            var b = this,
                d = arguments,
                e, g;
            0 === d.length ? g = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : e = parseFloat(d[0]) : 2 === d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            var l;
            if ("number" === typeof e) {
                if ("loaded" !== b._state) return b._queue.push({
                    event: "rate",
                    action: function() {
                        b.rate.apply(b, d)
                    }
                }), b;
                "undefined" === typeof g && (b._rate = e);
                g = b._getSoundIds(g);
                for (var q = 0; q < g.length; q++)
                    if (l = b._soundById(g[q])) {
                        l._rateSeek = b.seek(g[q]);
                        l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
                        l._rate = e;
                        b._webAudio && l._node && l._node.bufferSource ? l._node.bufferSource.playbackRate.value = e : l._node && (l._node.playbackRate = e);
                        var t = b.seek(g[q]),
                            t = 1E3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1E3 - t) / Math.abs(l._rate);
                        if (b._endTimers[g[q]] || !l._paused) b._clearTimer(g[q]), b._endTimers[g[q]] = setTimeout(b._ended.bind(b, l), t);
                        b._emit("rate", l._id)
                    }
            } else return (l = b._soundById(g)) ? l._rate : b._rate;
            return b
        },
        seek: function() {
            var b = this,
                d = arguments,
                e, g;
            0 === d.length ? g = b._sounds[0]._id : 1 === d.length ? 0 <= b._getSoundIds().indexOf(d[0]) ? g = parseInt(d[0], 10) : (g = b._sounds[0]._id, e = parseFloat(d[0])) : 2 === d.length && (e = parseFloat(d[0]), g = parseInt(d[1], 10));
            if ("undefined" === typeof g) return b;
            if ("loaded" !== b._state) return b._queue.push({
                event: "seek",
                action: function() {
                    b.seek.apply(b, d)
                }
            }), b;
            var l = b._soundById(g);
            if (l)
                if ("number" === typeof e && 0 <= e) {
                    var q = b.playing(g);
                    q && b.pause(g, !0);
                    l._seek = e;
                    l._ended = !1;
                    b._clearTimer(g);
                    q && b.play(g, !0);
                    !b._webAudio && l._node && (l._node.currentTime = e);
                    b._emit("seek", g)
                } else return b._webAudio ? (e = b.playing(g) ? c.ctx.currentTime - l._playStart : 0, l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate))) : l._node.currentTime;
            return b
        },
        playing: function(b) {
            if ("number" === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
            for (b = 0; b < this._sounds.length; b++)
                if (!this._sounds[b]._paused) return !0;
            return !1
        },
        duration: function(b) {
            var c = this._duration;
            (b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1E3);
            return c
        },
        state: function() {
            return this._state
        },
        unload: function() {
            for (var b = this._sounds, d = 0; d < b.length; d++) {
                b[d]._paused || (this.stop(b[d]._id), this._emit("end", b[d]._id));
                this._webAudio || (b[d]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", b[d]._node.removeEventListener("error", b[d]._errorFn, !1), b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1));
                delete b[d]._node;
                this._clearTimer(b[d]._id);
                var e = c._howls.indexOf(this);
                0 <= e && c._howls.splice(e, 1)
            }
            b = !0;
            for (d = 0; d < c._howls.length; d++)
                if (c._howls[d]._src === this._src) {
                    b = !1;
                    break
                }
            g && b && delete g[this._src];
            c.noAudio = !1;
            this._state = "unloaded";
            this._sounds = [];
            return null
        },
        on: function(b, c, d, e) {
            b = this["_on" + b];
            "function" === typeof c && b.push(e ? {
                id: d,
                fn: c,
                once: e
            } : {
                id: d,
                fn: c
            });
            return this
        },
        off: function(b, c, d) {
            var e = this["_on" +
                    b],
                g = 0;
            if (c)
                for (g = 0; g < e.length; g++) {
                    if (c === e[g].fn && d === e[g].id) {
                        e.splice(g, 1);
                        break
                    }
                } else if (b) this["_on" + b] = [];
                else {
                    b = Object.keys(this);
                    for (g = 0; g < b.length; g++) 0 === b[g].indexOf("_on") && Array.isArray(this[b[g]]) && (this[b[g]] = [])
                }
            return this
        },
        once: function(b, c, d) {
            this.on(b, c, d, 1);
            return this
        },
        _emit: function(b, c, d) {
            for (var e = this["_on" + b], g = e.length - 1; 0 <= g; g--)
                if (!e[g].id || e[g].id === c || "load" === b) setTimeout(function(b) {
                    b.call(this, c, d)
                }.bind(this, e[g].fn), 0), e[g].once && this.off(b, e[g].fn, e[g].id);
            return this
        },
        _loadQueue: function() {
            var b = this;
            if (0 < b._queue.length) {
                var c = b._queue[0];
                b.once(c.event, function() {
                    b._queue.shift();
                    b._loadQueue()
                });
                c.action()
            }
            return b
        },
        _ended: function(b) {
            var d = b._sprite,
                d = !(!b._loop && !this._sprite[d][2]);
            this._emit("end", b._id);
            !this._webAudio && d && this.stop(b._id, !0).play(b._id);
            if (this._webAudio && d) {
                this._emit("play", b._id);
                b._seek = b._start || 0;
                b._rateSeek = 0;
                b._playStart = c.ctx.currentTime;
                var e = 1E3 * (b._stop - b._start) / Math.abs(b._rate);
                this._endTimers[b._id] = setTimeout(this._ended.bind(this,
                    b), e)
            }
            this._webAudio && !d && (b._paused = !0, b._ended = !0, b._seek = b._start || 0, b._rateSeek = 0, this._clearTimer(b._id), this._cleanBuffer(b._node), c._autoSuspend());
            !this._webAudio && !d && this.stop(b._id);
            return this
        },
        _clearTimer: function(b) {
            this._endTimers[b] && (clearTimeout(this._endTimers[b]), delete this._endTimers[b]);
            return this
        },
        _soundById: function(b) {
            for (var c = 0; c < this._sounds.length; c++)
                if (b === this._sounds[c]._id) return this._sounds[c];
            return null
        },
        _inactiveSound: function() {
            this._drain();
            for (var b = 0; b < this._sounds.length; b++)
                if (this._sounds[b]._ended) return this._sounds[b].reset();
            return new e(this)
        },
        _drain: function() {
            var b = this._pool,
                c = 0,
                d = 0;
            if (!(this._sounds.length < b)) {
                for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
                for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--) this._sounds[d]._ended && (this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0), this._sounds.splice(d, 1), c--)
            }
        },
        _getSoundIds: function(b) {
            if ("undefined" === typeof b) {
                b = [];
                for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
                return b
            }
            return [b]
        },
        _refreshBuffer: function(b) {
            b._node.bufferSource = c.ctx.createBufferSource();
            b._node.bufferSource.buffer = g[this._src];
            b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
            if (b._node.bufferSource.loop = b._loop) b._node.bufferSource.loopStart = b._start || 0, b._node.bufferSource.loopEnd = b._stop;
            b._node.bufferSource.playbackRate.value = b._rate;
            return this
        },
        _cleanBuffer: function(b) {
            if (this._scratchBuffer) {
                b.bufferSource.onended = null;
                b.bufferSource.disconnect(0);
                try {
                    b.bufferSource.buffer = this._scratchBuffer
                } catch (c) {}
            }
            b.bufferSource = null;
            return this
        }
    };
    var e = function(b) {
        this._parent = b;
        this.init()
    };
    e.prototype = {
        init: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            b._sounds.push(this);
            this.create();
            return this
        },
        create: function() {
            var b = this._parent,
                d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
            b._webAudio ? (this._node = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), this._node.gain.setValueAtTime(d, c.ctx.currentTime), this._node.paused = !0, this._node.connect(c.masterGain)) : (this._node = new Audio, this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(c._canPlayEvent, this._loadFn, !1), this._node.src = b._src, this._node.preload = "auto", this._node.volume = d * c.volume(), this._node.load());
            return this
        },
        reset: function() {
            var b = this._parent;
            this._muted = b._muted;
            this._loop = b._loop;
            this._volume = b._volume;
            this._muted = b._muted;
            this._rate = b._rate;
            this._rateSeek = this._seek = 0;
            this._ended = this._paused = !0;
            this._sprite = "__default";
            this._id = Math.round(Date.now() * Math.random());
            return this
        },
        _errorListener: function() {
            this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0);
            this._node.removeEventListener("error", this._errorListener, !1)
        },
        _loadListener: function() {
            var b = this._parent;
            b._duration = Math.ceil(10 * this._node.duration) / 10;
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue());
            this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1)
        }
    };
    var g = {},
        l = function(b, d) {
            c.ctx.decodeAudioData(b, function(b) {
                b && 0 < d._sounds.length && (g[d._src] = b, q(d, b))
            }, function() {
                d._emit("loaderror", null, "Decoding audio data failed.")
            })
        },
        q = function(b,
            c) {
            c && !b._duration && (b._duration = c.duration);
            0 === Object.keys(b._sprite).length && (b._sprite = {
                __default: [0, 1E3 * b._duration]
            });
            "loaded" !== b._state && (b._state = "loaded", b._emit("load"), b._loadQueue())
        },
        t = function() {
            try {
                "undefined" !== typeof AudioContext ? c.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? c.ctx = new webkitAudioContext : c.usingWebAudio = !1
            } catch (b) {
                c.usingWebAudio = !1
            }
            var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
                e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                e = e ? parseInt(e[1], 10) : null;
            if (d && e && 9 > e && (d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase()), c._navigator && c._navigator.standalone && !d || c._navigator && !c._navigator.standalone && !d)) c.usingWebAudio = !1;
            c.usingWebAudio && (c.masterGain = "undefined" === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain(), c.masterGain.gain.value = 1, c.masterGain.connect(c.ctx.destination));
            c._setup()
        };
    "function" === typeof define && define.amd && define([], function() {
        return {
            Howler: c,
            Howl: d
        }
    });
    "undefined" !== typeof exports && (exports.Howler = c, exports.Howl = d);
    "undefined" !== typeof window ? (window.HowlerGlobal = b, window.Howler = c, window.Howl = d, window.Sound = e) : "undefined" !== typeof global && (global.HowlerGlobal = b, global.Howler = c, global.Howl = d, global.Sound = e)
})();
(function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(b) {
        if (!this.ctx || !this.ctx.listener) return this;
        for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
        return this
    };
    HowlerGlobal.prototype.pos = function(b, c, d) {
        if (!this.ctx || !this.ctx.listener) return this;
        c = "number" !== typeof c ? this._pos[1] : c;
        d = "number" !== typeof d ? this._pos[2] : d;
        if ("number" === typeof b) this._pos = [b, c, d], this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
        else return this._pos;
        return this
    };
    HowlerGlobal.prototype.orientation = function(b, c, d, e, j, m) {
        if (!this.ctx || !this.ctx.listener) return this;
        var n = this._orientation;
        c = "number" !== typeof c ? n[1] : c;
        d = "number" !== typeof d ? n[2] : d;
        e = "number" !== typeof e ? n[3] : e;
        j = "number" !== typeof j ? n[4] : j;
        m = "number" !== typeof m ? n[5] : m;
        if ("number" === typeof b) this._orientation = [b, c, d, e, j, m], this.ctx.listener.setOrientation(b, c, d, e, j, m);
        else return n;
        return this
    };
    var b = Howl.prototype.init;
    Howl.prototype.init = function(c) {
        this._orientation = c.orientation || [1, 0, 0];
        this._stereo = c.stereo || null;
        this._pos = c.pos || null;
        this._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
            coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
            coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
            distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : "inverse",
            maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : 1E4,
            panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : "HRTF",
            refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : 1,
            rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : 1
        };
        this._onstereo = c.onstereo ? [{
            fn: c.onstereo
        }] : [];
        this._onpos = c.onpos ? [{
            fn: c.onpos
        }] : [];
        this._onorientation = c.onorientation ? [{
            fn: c.onorientation
        }] : [];
        return b.call(this, c)
    };
    Howl.prototype.stereo = function(b, c) {
        var d = this;
        if (!d._webAudio) return d;
        if ("loaded" !== d._state) return d._queue.push({
            event: "stereo",
            action: function() {
                d.stereo(b, c)
            }
        }), d;
        var t = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
        if ("undefined" === typeof c)
            if ("number" === typeof b) d._stereo = b, d._pos = [b, 0, 0];
            else return d._stereo;
        for (var j = d._getSoundIds(c), m = 0; m < j.length; m++) {
            var n = d._soundById(j[m]);
            if (n)
                if ("number" === typeof b) n._stereo = b, n._pos = [b, 0, 0], n._node && (n._pannerAttr.panningModel = "equalpower", (!n._panner || !n._panner.pan) && e(n, t), "spatial" === t ? n._panner.setPosition(b, 0, 0) : n._panner.pan.value = b), d._emit("stereo", n._id);
                else return n._stereo
        }
        return d
    };
    Howl.prototype.pos = function(b, c, d, t) {
        var j = this;
        if (!j._webAudio) return j;
        if ("loaded" !== j._state) return j._queue.push({
            event: "pos",
            action: function() {
                j.pos(b, c, d, t)
            }
        }), j;
        c = "number" !== typeof c ? 0 : c;
        d = "number" !== typeof d ? -0.5 : d;
        if ("undefined" === typeof t)
            if ("number" === typeof b) j._pos = [b, c, d];
            else return j._pos;
        for (var m = j._getSoundIds(t), n = 0; n < m.length; n++) {
            var u = j._soundById(m[n]);
            if (u)
                if ("number" === typeof b) u._pos = [b, c, d], u._node && ((!u._panner || u._panner.pan) && e(u, "spatial"), u._panner.setPosition(b, c, d)), j._emit("pos", u._id);
                else return u._pos
        }
        return j
    };
    Howl.prototype.orientation = function(b, c, d, t) {
        var j = this;
        if (!j._webAudio) return j;
        if ("loaded" !== j._state) return j._queue.push({
            event: "orientation",
            action: function() {
                j.orientation(b, c, d, t)
            }
        }), j;
        c = "number" !== typeof c ? j._orientation[1] : c;
        d = "number" !== typeof d ? j._orientation[2] : d;
        if ("undefined" === typeof t)
            if ("number" === typeof b) j._orientation = [b, c, d];
            else return j._orientation;
        for (var m = j._getSoundIds(t), n = 0; n < m.length; n++) {
            var u = j._soundById(m[n]);
            if (u)
                if ("number" === typeof b) u._orientation = [b, c, d], u._node && (u._panner || (u._pos || (u._pos = j._pos || [0, 0, -0.5]), e(u, "spatial")), u._panner.setOrientation(b, c, d)), j._emit("orientation", u._id);
                else return u._orientation
        }
        return j
    };
    Howl.prototype.pannerAttr = function() {
        var b = arguments,
            c, d;
        if (!this._webAudio) return this;
        if (0 === b.length) return this._pannerAttr;
        if (1 === b.length)
            if ("object" === typeof b[0]) c = b[0], "undefined" === typeof d && (this._pannerAttr = {
                coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : this._coneInnerAngle,
                coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : this._coneOuterAngle,
                coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : this._coneOuterGain,
                distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : this._distanceModel,
                maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : this._maxDistance,
                panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : this._panningModel,
                refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : this._refDistance,
                rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : this._rolloffFactor
            });
            else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
        else 2 === b.length && (c = b[0], d = parseInt(b[1], 10));
        d = this._getSoundIds(d);
        for (var t = 0; t < d.length; t++)
            if (b = this._soundById(d[t])) {
                var j = b._pannerAttr,
                    j = {
                        coneInnerAngle: "undefined" !== typeof c.coneInnerAngle ? c.coneInnerAngle : j.coneInnerAngle,
                        coneOuterAngle: "undefined" !== typeof c.coneOuterAngle ? c.coneOuterAngle : j.coneOuterAngle,
                        coneOuterGain: "undefined" !== typeof c.coneOuterGain ? c.coneOuterGain : j.coneOuterGain,
                        distanceModel: "undefined" !== typeof c.distanceModel ? c.distanceModel : j.distanceModel,
                        maxDistance: "undefined" !== typeof c.maxDistance ? c.maxDistance : j.maxDistance,
                        panningModel: "undefined" !== typeof c.panningModel ? c.panningModel : j.panningModel,
                        refDistance: "undefined" !== typeof c.refDistance ? c.refDistance : j.refDistance,
                        rolloffFactor: "undefined" !== typeof c.rolloffFactor ? c.rolloffFactor : j.rolloffFactor
                    },
                    m = b._panner;
                m ? (m.coneInnerAngle = j.coneInnerAngle, m.coneOuterAngle = j.coneOuterAngle, m.coneOuterGain = j.coneOuterGain, m.distanceModel = j.distanceModel, m.maxDistance = j.maxDistance, m.panningModel = j.panningModel, m.refDistance = j.refDistance, m.rolloffFactor = j.rolloffFactor) : (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, "spatial"))
            }
        return this
    };
    var c = Sound.prototype.init;
    Sound.prototype.init = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._stereo = b._stereo;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        c.call(this);
        this._stereo ? b.stereo(this._stereo) : this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
    };
    var d = Sound.prototype.reset;
    Sound.prototype.reset = function() {
        var b = this._parent;
        this._orientation = b._orientation;
        this._pos = b._pos;
        this._pannerAttr = b._pannerAttr;
        return d.call(this)
    };
    var e = function(b, c) {
        "spatial" === (c || "spatial") ? (b._panner = Howler.ctx.createPanner(), b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle, b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle, b._panner.coneOuterGain = b._pannerAttr.coneOuterGain, b._panner.distanceModel = b._pannerAttr.distanceModel, b._panner.maxDistance = b._pannerAttr.maxDistance, b._panner.panningModel = b._pannerAttr.panningModel, b._panner.refDistance = b._pannerAttr.refDistance, b._panner.rolloffFactor = b._pannerAttr.rolloffFactor, b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]), b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2])) : (b._panner = Howler.ctx.createStereoPanner(), b._panner.pan.value = b._stereo);
        b._panner.connect(b._node);
        b._paused || b._parent.pause(b._id, !0).play(b._id)
    }
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b, c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var l = ig.$new("canvas");
            l.width = b.width;
            l.height = b.height;
            var q = l.getContext("2d");
            ig.System.SCALE.CRISP(l, q);
            var z = ig.getVendorAttribute(q, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(q, "getImageDataHD");
            var B = b.width / z,
                E = b.height / z;
            l.width = Math.ceil(B);
            l.height = Math.ceil(E);
            q.drawImage(b, 0, 0, B, E);
            return 1 === z ? q.getImageData(c, d, e, g) : q.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var l = d.requires[g];
                    ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    l = ig._loadQueue[c].requires;
                    for (g = 0; g < l.length; g++) d = ig.modules[l[g]], (!d || !d.loaded) && e.push(l[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio = b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var l = c++;
            d[l] = !0;
            var n = function() {
                d[l] && (b.requestAnimationFrame(n, g), e())
            };
            b.requestAnimationFrame(n, g);
            return l
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        l = 0;
    b.ig.Class = function() {};
    var q = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var g = c.apply(this, arguments);
                this.parent = e;
                return g
            }
        }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var m = this.prototype;
        e = !0;
        var n = new this;
        e = !1;
        for (var u in c) n[u] = "function" == typeof c[u] && "function" == typeof m[u] && g.test(c[u]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = m[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(u, c[u]) : c[u];
        d.prototype = n;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = q;
        d.classId = n.classId = ++l;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this), ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var l = g.getContext("2d"), q = l.getImageData(0, 0, d, e), t = 0; t < e; t++)
                for (var j = 0; j < d; j++) {
                    var m = 4 * (Math.floor(t / b) * this.width + Math.floor(j / b)),
                        n = 4 * (t * d + j);
                    q.data[n] = c.data[m];
                    q.data[n + 1] = c.data[m + 1];
                    q.data[n + 2] = c.data[m + 2];
                    q.data[n + 3] = c.data[m + 3]
                }
            l.putImageData(q, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, l) {
            if (this.loaded) {
                var q = ig.system.scale;
                g = (g ? g : this.width) * q;
                l = (l ? l : this.height) * q;
                ig.system.context.drawImage(this.data, d ? d * q : 0, e ? e * q : 0, g, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, l);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, l, q) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var t = ig.system.scale,
                    j = Math.floor(e * t),
                    m = Math.floor(g * t),
                    n = l ? -1 : 1,
                    u = q ? -1 : 1;
                if (l || q) ig.system.context.save(), ig.system.context.scale(n, u);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * t, Math.floor(d * e / this.width) * g * t, j, m, ig.system.getDrawPos(b) * n - (l ? j : 0), ig.system.getDrawPos(c) * u - (q ? m : 0), j, m);
                (l || q) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (l = 0; l < b.length; l++) e = b.charCodeAt(l), c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                l = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, l);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var l = 4 * g + 3;
                127 < c.data[l] ? e++ : 128 > c.data[l] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var l = new Audio(e);
            d && (l.addEventListener("canplaythrough", function t(c) {
                l.removeEventListener("canplaythrough", t, !1);
                d(b, !0, c)
            }, !1), l.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            l.preload = "auto";
            l.load();
            this.clips[b] = [l];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return l
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                get: this.getVolume.bind(this),
                set: this.setVolume.bind(this)
            }), Object.defineProperty(this, "loop", {
                get: this.getLooping.bind(this),
                set: this.setLooping.bind(this)
            })) : this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack || (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(), this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this), 50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path, this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(function() {
                    this.update();
                    this.draw()
                }.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        update: function() {},
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt = ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel = b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b, c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, g, l, q) {
        ig.system = new ig.System(b, d, e, g, l || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(q || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || c > ig.system.height || (0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle), this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b, c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y * ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision = function(b, c) {
        var d = null;
        if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
        else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
        b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c, b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
    };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
        },
        trace: function(b, c, g, l, q, t) {
            var j = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                m = Math.ceil(Math.max(Math.abs(g), Math.abs(l)) / this.tilesize);
            if (1 < m)
                for (var n = g / m, u = l / m, r = 0; r < m && (n || u) && !(this._traceStep(j,
                    b, c, n, u, q, t, g, l, r), b = j.pos.x, c = j.pos.y, j.collision.x && (g = n = 0), j.collision.y && (l = u = 0), j.collision.slope); r++);
            else this._traceStep(j, b, c, g, l, q, t, g, l, 0);
            return j
        },
        _traceStep: function(b, c, g, l, q, t, j, m, n, u) {
            b.pos.x += l;
            b.pos.y += q;
            var r = 0;
            if (l) {
                var x = 0 < l ? t : 0,
                    z = 0 > l ? this.tilesize : 0,
                    r = Math.max(Math.floor(g / this.tilesize), 0),
                    B = Math.min(Math.ceil((g + j) / this.tilesize), this.height);
                l = Math.floor((b.pos.x + x) / this.tilesize);
                var E = Math.floor((c + x) / this.tilesize);
                if (0 < u || l == E || 0 > E || E >= this.width) E = -1;
                if (0 <= l && l < this.width)
                    for (var A =
                        r; A < B && !(-1 != E && (r = this.data[A][E], 1 < r && r <= this.lastSlope && this._checkTileDef(b, r, c, g, m, n, t, j, E, A))); A++)
                        if (r = this.data[A][l], 1 == r || r > this.lastSlope || 1 < r && this._checkTileDef(b, r, c, g, m, n, t, j, l, A)) {
                            if (1 < r && r <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = r;
                            c = b.pos.x = l * this.tilesize - x + z;
                            m = 0;
                            break
                        }
            }
            if (q) {
                x = 0 < q ? j : 0;
                q = 0 > q ? this.tilesize : 0;
                r = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                z = Math.min(Math.ceil((b.pos.x + t) / this.tilesize), this.width);
                A = Math.floor((b.pos.y + x) / this.tilesize);
                B = Math.floor((g + x) / this.tilesize);
                if (0 < u || A == B || 0 > B || B >= this.height) B = -1;
                if (0 <= A && A < this.height)
                    for (l = r; l < z && !(-1 != B && (r = this.data[B][l], 1 < r && r <= this.lastSlope && this._checkTileDef(b, r, c, g, m, n, t, j, l, B))); l++)
                        if (r = this.data[A][l], 1 == r || r > this.lastSlope || 1 < r && this._checkTileDef(b, r, c, g, m, n, t, j, l, A)) {
                            if (1 < r && r <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = r;
                            b.pos.y = A * this.tilesize - x + q;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, l, q, t, j, m, n, u) {
            var r = this.tiledef[c];
            if (!r) return !1;
            c = (r[2] -
                r[0]) * this.tilesize;
            var x = (r[3] - r[1]) * this.tilesize,
                z = r[4];
            j = g + q + (0 > x ? j : 0) - (n + r[0]) * this.tilesize;
            m = l + t + (0 < c ? m : 0) - (u + r[1]) * this.tilesize;
            if (0 < c * m - x * j) {
                if (0 > q * -x + t * c) return z;
                n = Math.sqrt(c * c + x * x);
                u = x / n;
                n = -c / n;
                var B = j * u + m * n,
                    r = u * B,
                    B = n * B;
                if (r * r + B * B >= q * q + t * t) return z || 0.5 > c * (m - t) - x * (j - q);
                b.pos.x = g + q - r;
                b.pos.y = l + t - B;
                b.collision.slope = {
                    x: c,
                    y: x,
                    nx: u,
                    ny: n
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0, 1, 1, 0, !0],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0, 0, b, !0],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, l) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + l
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b, c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var l = 0; l < d; l++) this.preRenderedChunks[g][l] = this.preRenderChunk(l, g, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, g == e - 1 ? c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                l = e / this.tilesize / ig.system.scale + 1,
                q = b * this.chunkSize / ig.system.scale % this.tilesize,
                t = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var j = ig.$new("canvas");
            j.width = d;
            j.height = e;
            j.retinaResolutionEnabled = !1;
            e = j.getContext("2d");
            ig.System.scaleMode(j, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var m = 0; m < l; m++)
                    if (e + b < this.width && m + c < this.height) {
                        var n = this.data[m + c][e + b];
                        n && this.tiles.drawTile(e * this.tilesize - q, m * this.tilesize - t, n - 1, this.tilesize)
                    }
            ig.system.context = d;
            return j
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d = this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                q = this.preRenderedChunks[0].length,
                t = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, q), l = Math.min(l, t));
            for (var j = 0; e < l; e++) {
                for (var m = 0, n = d; n < g; n++) {
                    var u = this.preRenderedChunks[e % t][n % q],
                        r = -b + n * this.chunkSize - m,
                        x = -c + e * this.chunkSize - j;
                    ig.system.context.drawImage(u, r, x);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(r, x, this.chunkSize, this.chunkSize));
                    this.repeat && u.width < this.chunkSize && r + u.width < ig.system.realWidth && (m += this.chunkSize - u.width, g++)
                }
                this.repeat && u.height < this.chunkSize && x + u.height < ig.system.realHeight && (j += this.chunkSize - u.height, l++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, q = -g - this.tilesize, g = ig.system.width + this.tilesize - g, t = ig.system.height + this.tilesize - l, j = -1, l = -l - this.tilesize; l < t; j++, l += this.tilesize) {
                var m = j + e;
                if (m >= this.height || 0 > m) {
                    if (!this.repeat) continue;
                    m = (m % this.height + this.height) % this.height
                }
                for (var n = -1, u = q; u < g; n++, u += this.tilesize) {
                    b = n + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[m][b])(c = this.anims[b -
                        1]) ? c.draw(u, l) : this.tiles.drawTile(u, l, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b = "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name && delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities || this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, q = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, t = Math.floor(d.pos.x / this.cellSize); t < l; t++)
                        for (var j = g; j < q; j++)
                            if (b[t])
                                if (b[t][j]) {
                                    for (var m = b[t][j], n = 0; n < m.length; n++) d.touches(m[n]) && !e[m[n].id] && (e[m[n].id] = !0, ig.Entity.checkPair(d, m[n]));
                                    m.push(d)
                                } else b[t][j] = [d];
                else b[t] = {}, b[t][j] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            // MobileAdInGamePreroll: {
            //     "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            //     "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            // },
            // MobileAdInGameEnd: {
            //     "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            //     "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            // },
            // MobileAdInGamePreroll2: {
            //     "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            //     "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            // },
            // MobileAdInGameEnd2: {
            //     "box-width": _SETTINGS.Ad.Mobile.End.Width +
            //         2,
            //     "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            // },
            // MobileAdInGamePreroll3: {
            //     "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
            //     "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            // },
            // MobileAdInGameEnd3: {
            //     "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
            //     "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            // }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: g
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    t = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    q = Math.floor(q * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    t = e.left,
                    j = e.top,
                    l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    t = Math.floor(t + l * c) + "px",
                    q = Math.floor(j + q * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: t,
                    top: q,
                    width: g,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: g
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            window.addEventListener("orientationchange", function() {
                this.reorient();
                window.scrollTo(0, 1)
            }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
                // && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
                // && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
                // && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE 
                // && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug && console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            "object" === typeof b ? b.stop() : "string" === typeof b && this.soundList[b].stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        src: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            console.log("howler", b);
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute(!0)
        },
        unmute: function(b) {
            this.parent(b);
            Howler.mute(!1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.0010,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) : 1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        tagName: "WebaudioMusicPlayer",
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var l = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (l = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (l = b));
                var q = new XMLHttpRequest;
                q.open("GET", l, !0);
                q.responseType = "arraybuffer";
                q.onload = function() {
                    this.webaudio.context.decodeAudioData(q.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + l + '".')
                    })
                }.bind(this);
                q.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1)
                        }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var l = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", l, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", l, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration -
                                b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: "media/audio/play/static"
            },
            openingSound: {
                path: "media/audio/opening/opening"
            },
            buttonSound: {
                path: "media/audio/play/button"
            },
            swooshSound: {
                path: "media/audio/play/swoosh"
            },
            bounceSound: {
                path: "media/audio/play/bounce"
            },
            swishSound: {
                path: "media/audio/play/swish"
            },
            missSound: {
                path: "media/audio/play/miss"
            },
            whistleSound: {
                path: "media/audio/play/whistle"
            },
            applauseSound: {
                path: "media/audio/play/applause"
            }
        },
        bgm: {
            background: {
                path: "media/audio/bgm",
                startOgg: 0,
                endOgg: 26.126,
                startMp3: 0,
                endMp3: 26.126
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ? (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                loop: !0
            }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                loop: !0
            })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx)
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1), this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.game && ig.game.pauseGame();
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.game && ig.game.resumeGame();
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ? !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? (ig.ua.mobile && ig.game && ig.game.pauseGame(), ig.soundHandler && ig.soundHandler.forceMuteAll()) : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.forceUnMuteAll())
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end -
                        d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" == this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime = c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                    ig.soundHandler.forcelooped = !1
                }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed : 1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y += isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var l = b.touches[g];
                        l && this.touches.push({
                            x: (l.clientX - e.left) / c,
                            y: (l.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var l = b.touches[g];
                    l && this.touches.push({
                        x: (l.clientX - e.left) / c,
                        y: (l.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var l = b[g], q = "undefined" != typeof l.identifier ? l.identifier : "undefined" != typeof l.pointerId ? l.pointerId : 1, t = (l.clientX - e.left) / c, l = (l.clientY - e.top) / d, j = 0; j < this.touches.length; ++j) this.touches[j].identifier == q && this.touches.splice(j, 1);
                    this.touches.push({
                        x: t,
                        y: l,
                        identifier: q
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, l = 0; l < this.touches.length; ++l)
                    if (this.touches[l].identifier == g) {
                        var q = (b.clientY - e.top) / d;
                        this.touches[l].x = (b.clientX - e.left) / c;
                        this.touches[l].y = q
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.fake-storage").requires("impact.game").defines(function() {
    ig.FakeStorage = ig.Class.extend({
        tempData: {},
        init: function() {
            ig.FakeStorage.instance = this
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        set: function(b, c) {
            this.tempData[b] = JSON.stringify(c)
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        get: function(b) {
            return "undefined" == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b])
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        remove: function() {
            delete this.tempData.key
        },
        clear: function() {
            this.tempData = {}
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input", "plugins.fake-storage").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            try {
                window.localStorage.setItem("test", "test"), this.storage = new ig.Storage
            } catch (b) {
                console.log("using fake storage"), this.storage = new ig.FakeStorage
            }
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ? !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, g) {
            return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        sky: new ig.Image("media/graphics/backgrounds/sky.jpg"),
        splashBackground: new ig.Image("media/graphics/backgrounds/splash-background.jpg"),
        fonts: ["avalon-bold"],
        logo: {
            visible: !1,
            pos: {
                x: 180,
                y: 110
            },
            alpha: 0.01,
            scale: {
                x: 1.75,
                y: 1.75
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "logo.png"
        },
        init: function(b, c) {
            this.parent(b, c);
            this.initFonts();
            ig.apiHandler.run("MJSPreroll")
        },
        initFonts: function() {
            var b = ig.system.context;
            if (this.fonts && this.fonts.length)
                for (var c = 0; c < this.fonts.length; c++) {
                    var d = this.fonts[c];
                    b.font = "24px " + d;
                    b.fillStyle = "#FFFFFF";
                    b.fillText("Initialize font: " + d, -48, -48)
                }
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        update: function() {
            this.updateLogo()
        },
        updateLogo: function() {
            !0 === this.logo.spriteImage.loaded && (this.logo.visible = !0, 1 > this.logo.alpha && (this.logo.alpha = (this.logo.alpha + 0.1).limit(0, 1)), 0.75 < this.logo.scale.x && (this.logo.scale.x -= 0.1), 0.75 < this.logo.scale.y && (this.logo.scale.y -= 0.1))
        },
        draw: function() {
            var b = ig.system.context;
            this._drawStatus += (this.status - this._drawStatus) / 5;
            this._drawStatus = this._drawStatus.limit(0, 1);
            b.fillStyle = "#3262a9";
            b.fillRect(0, 0, ig.system.width, ig.system.height);
            this.drawBackground();
            this.drawLogo();
            this.drawLoadingBar();
            this.drawLoadingText()
        },
        drawLogo: function() {
            !0 === this.logo.visible && ig.drawSprite(this.logo.spriteImage, this.logo.spriteSheet, this.logo.spriteID, this.logo.pos.x,
                this.logo.pos.y, {
                    alpha: this.logo.alpha,
                    scale: this.logo.scale
                })
        },
        drawBackground: function() {
            this.sky.draw(0, 0);
            this.splashBackground.draw(0, 0)
        },
        drawLoadingBar: function() {
            var b = ig.system.context,
                c = 0.125 * ig.system.width,
                d = 0.875 * ig.system.height,
                e = 0.75 * ig.system.width,
                g = 0.05 * ig.system.height;
            b.fillStyle = "#a50c0c";
            b.fillRect(c, d, e, g);
            0 < this._drawStatus && (b.fillStyle = "#dd5d00", b.fillRect(c, d, e * this._drawStatus, g));
            b.strokeStyle = "#FFF";
            b.strokeRect(c, d, e, g)
        },
        drawLoadingText: function() {
            var b = ig.system.context,
                c = 0.125 * ig.system.width,
                d = 0.875 * ig.system.height,
                e = 0.75 * ig.system.width,
                g = 0.05 * ig.system.height,
                l = _STRINGS.Splash.Loading + " " + Math.ceil(100 * this._drawStatus) + "%";
            b.fillStyle = "#FFF";
            b.font = "23px arial";
            b.textAlign = "center";
            b.textBaseline = "middle";
            b.fillText(l, c + 0.5 * e, d + 0.5 * g)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens = b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            l = {},
            q = {},
            t = 0,
            j = this.started = this.timer = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            j = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            t = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            this.started = !0;
            this.timer = new ig.Timer;
            for (var d in c) this.initEnd(d, c, l);
            for (d in l) this.initStart(d, l, b, g), this.initDelta(d, q, b, l)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!this.started) return !1;
            if (this.delay) {
                if (this.timer.delta() < this.delay) return;
                this.delay = 0;
                this.timer.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (this.timer.delta() + t) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in q) this.propUpdate(property, b, g, q, d);
            if (1 <= c) {
                if (0 == this.loopNum || !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    j && j.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    t = 0;
                    this.timer.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, l);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(l, d);
                    for (property in l) this.initDelta(property, q, b, l);
                    t = 0;
                    this.timer.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            t += this.timer.delta()
        };
        this.resume = function() {
            this.paused = !1;
            this.timer.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, t += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
    };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn = function(b) {
        return b * b * b * b * b
    };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2, 10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn = function(b) {
        return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
    };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image("branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            g = $("#" + g.id);
            g.css("float", "left");
            g.css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth /
                    mobileWidth;
                g.css("left", this.pos.x * q);
                g.css("top", this.pos.y * l);
                g.css("width", this.size.x * q);
                g.css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(l, q), g.css("left", l + this.pos.x * multiplier), g.css("top", q + this.pos.y * multiplier), g.css("width", this.size.x * multiplier), g.css("height", this.size.y * multiplier);
            e ? g.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : g.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ? ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        angle: 0,
        alpha: 1,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        scale: {
            x: 1,
            y: 1
        },
        minScale: {
            x: 1,
            y: 1
        },
        maxScale: {
            x: 1,
            y: 1
        },
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        zIndex: 95E3,
        buttonImage: {
            image: null,
            spriteSheet: null,
            spriteID: null
        },
        textAlign: "center",
        textBaseline: "middle",
        textAnchor: {
            x: 0.5,
            y: 0.5
        },
        hidden: !1,
        disabled: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.setPos(this.pos.x, this.pos.y), this.setSize(this.size.x, this.size.y), this.updateEntityBox(), isNaN(d.zIndex) || (this.zIndex = d.zIndex, ig.game.sortEntitiesDeferred()))
        },
        ready: function() {
            this.isClicked = this.isClicking = !1
        },
        setPos: function(b, c) {
            this._POS = {
                x: b,
                y: c
            }
        },
        setSize: function(b, c) {
            this._SIZE = {
                x: b,
                y: c
            }
        },
        show: function() {
            !0 === this.hidden && (this.hidden = !1)
        },
        hide: function() {
            !1 === this.hidden && (this.hidden = !0)
        },
        enable: function() {
            !0 === this.disabled && (this.disabled = !1)
        },
        disable: function() {
            !0 !== this.disabled && (this.disabled = !0, this.isHovering && ig.game.pointer.hoveringItem === this && (ig.system.canvas.style.cursor = "default", ig.game.pointer.hoveringItem = null), this.isClicked = this.isClicking = this.isHovering = !1)
        },
        over: function() {
            !0 === this.disabled ? this.isHovering = !1 : (this.isHovering = !0, ig.system.canvas.style.cursor = "pointer")
        },
        clicked: function() {
            this.isClicked = !0 === this.disabled ? this.isClicking = !1 : !0
        },
        clicking: function() {
            this.isClicking = !0 === this.disabled ? !1 : !0
        },
        released: function() {
            this.isClicked = this.isClicking = !1
        },
        leave: function() {
            this.isHovering = !1;
            ig.system.canvas.style.cursor = "default";
            this.isClicked = this.isClicking = !1
        },
        update: function() {
            this.parent();
            this.updateEntityBox();
            this.updateHovering()
        },
        updateEntityBox: function() {
            !this.isClicked || !this.isClicking ? (this.scale.x = (this.scale.x - 0.1).limit(this.minScale.x, this.maxScale.x), this.scale.y = (this.scale.y - 0.1).limit(this.minScale.y, this.maxScale.y)) : !0 !== this.disabled && (this.scale.x = (this.scale.x + 0.1).limit(this.minScale.x, this.maxScale.x), this.scale.y = (this.scale.y + 0.1).limit(this.minScale.y, this.maxScale.y));
            this.size = {
                x: this._SIZE.x * this.scale.x,
                y: this._SIZE.y * this.scale.y
            };
            this.pos.x = this._POS.x - this.anchor.x * this.size.x;
            this.pos.y = this._POS.y - this.anchor.y * this.size.y
        },
        updateHovering: function() {
            !0 !== this.disabled && ig.game.pointer && ig.game.pointer.hoveringItem && (ig.game.pointer.hoveringItem === this ? (this.isHovering = !0, "pointer" !== ig.system.canvas.style.cursor && (ig.system.canvas.style.cursor = "pointer")) : this.isHovering = !1)
        },
        draw: function() {
            this.parent();
            !1 === this.hidden && (this.buttonImage && (this.drawButtonImage(), this.drawHoveringImage()), this.buttonText && this.drawButtonText())
        },
        drawButtonImage: function() {
            this.buttonImage.image && this.buttonImage.spriteSheet && this.buttonImage.spriteID && ig.drawSprite(this.buttonImage.image, this.buttonImage.spriteSheet, this.buttonImage.spriteID, this._POS.x, this._POS.y, {
                alpha: this.alpha,
                angle: this.angle,
                scale: this.scale
            })
        },
        drawHoveringImage: function() {
            var b = !1;
            !0 === this.isHovering && (!ig.ua.mobile && this.isHovering && (b = !0), ig.ua.mobile && this.isClicked && this.isClicking && (b = !0));
            !0 === b && (b = ig.system.context, this.alpha = 0.5, b.globalCompositeOperation = "lighter", this.drawButtonImage(), b.globalCompositeOperation = "source-over", this.alpha = 1)
        },
        drawButtonText: function() {
            if (this.buttonText.text && this.buttonText.font && this.buttonText.fillStyle) {
                var b = ig.system.context;
                b.textAlign = this.textAlign;
                b.textBaseline = this.textBaseline;
                b.font = this.buttonText.textHeight + "px " + this.buttonText.font;
                b.fillStyle = this.buttonText.fillStyle;
                b.fillText(this.buttonText.text, this.pos.x + this.size.x * this.textAnchor.x, this.pos.y + this.size.y * this.textAnchor.y)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b, c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var l = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(l, "href", c), ig.domHandler.attr(l, "target", "_blank")) : ig.domHandler.attr(l, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var q = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    t = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), q = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", q = Math.floor(q + this.pos.y * d) + "px", t = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, {
                "float": "left",
                position: "absolute",
                left: e,
                top: q,
                width: t,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(l, c);
            ig.domHandler.appendChild(g, l);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer = new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        zIndex: 250,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        textAnchor: {
            x: 0.45,
            y: 0.55
        },
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "menu-button.png"
        },
        buttonText: {
            text: _STRINGS.Game["MORE GAMES"],
            textHeight: 28,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (_SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow)) : this.kill())
        },
        ready: function() {
            this.clickableLayer = new ClickableDivLayer(this)
        },
        enable: function() {
            this.parent();
            this.show()
        },
        disable: function() {
            this.parent();
            this.hide()
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            if (b) try {
                ig.domHandler.show(b)
            } catch (c) {
                console.log(c)
            }
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            if (b) try {
                ig.domHandler.hide(b)
            } catch (c) {
                console.log(c)
            }
        },
        clicked: function() {
            this.parent()
        },
        clicking: function() {
            this.parent()
        },
        released: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image("media/graphics/opening/shield.png"),
        mIconImage: new ig.Image("media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image("media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.0010), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer = null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image("media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image("media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) : (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        ready: function() {
            this.objectArray = [];
            this.clickedObjectList = [];
            this.hoveringItem = null;
            this.isHovering = this.isReleased = this.isPressed = this.isFirstPressed = !1;
            ig.game.pointer = this
        },
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking && b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        updateDeferred: function() {
            this.deferredUpdate = !0
        },
        update: function() {
            this.parent();
            this.refreshPos();
            if (this.deferredUpdate) return this.deferredUpdate = !1;
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over && b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed = ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 4,
            y: 4
        },
        init: function(b, c, d) {
            for (; ig.game.getEntitiesByType(EntityPointerSelector).length;) ig.game.getEntitiesByType(EntityPointerSelector)[0].kill();
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var l = w / 2 - destW / 2,
                q = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", l + this.pos.x * multiplier), $("#" + g.id).css("top", q + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height = $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.buttons.button-audio").requires("game.entities.buttons.button").defines(function() {
    EntityButtonAudio = EntityButton.extend({
        zIndex: 20,
        minScale: {
            x: 1,
            y: 1
        },
        maxScale: {
            x: 1.1,
            y: 1.1
        },
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "sound-off.png"
        },
        soundKey: "buttonSound",
        soundOffImage: "sound-off.png",
        soundOnImage: "sound-on.png",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.updateButtonImage()
        },
        updateButtonImage: function() {
            var b = ig.soundHandler.checkBGM() && ig.soundHandler.checkSFX();
            this.setButtonImage(b);
            return this.buttonImage
        },
        setButtonImage: function(b) {
            this.buttonImage.spriteID = !0 === b ? this.soundOffImage : this.soundOnImage
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                this.toggleAudio();
                this.updateButtonImage()
            }
            this.parent()
        },
        toggleAudio: function() {
            !0 === (ig.soundHandler.checkBGM() && ig.soundHandler.checkSFX()) ? (ig.soundHandler.unmuteAll(!0), ig.game.playerStats.audio = !0) : (ig.soundHandler.muteAll(!0), ig.game.playerStats.audio = !1);
            ig.game.savePlayerStats()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-shooting-angle").requires("game.entities.buttons.button").defines(function() {
    EntityButtonShootingAngle = EntityButton.extend({
        zIndex: 500,
        shootingAngle: null,
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                ig.game.config.currentShootingAngle = this.shootingAngle;
                ig.game.playerStats.shootingAngle = this.shootingAngle;
                ig.game.savePlayerStats()
            }
            this.parent()
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && ig.game.config.currentShootingAngle === this.shootingAngle && this.drawHighlight()
        },
        drawHighlight: function() {
            var b = ig.system.context;
            this.highlightCount || (this.highlightCount = 0);
            this.highlightCount += 0.05;
            this.highlightAlpha = Math.sin(this.highlightCount).map(-1, 1, 0.75, 1);
            b.lineWidth = 3;
            b.strokeStyle = "rgba(255,127,0," + 0.5 * this.highlightAlpha + ")";
            b.strokeRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
            b.setLineDash([9, 6]);
            b.lineDashOffset = 2.5 * -this.highlightCount;
            b.strokeStyle = "rgba(255,127,0," + this.highlightAlpha + ")";
            b.strokeRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
            b.setLineDash([])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-back").requires("game.entities.buttons.button").defines(function() {
    EntityButtonBack = EntityButton.extend({
        zIndex: 400,
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "button-left.png"
        },
        buttonText: {
            text: _STRINGS.Game.BACK,
            textHeight: 30,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                this.dialogBox.onExit()
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-play").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPlay = EntityButton.extend({
        zIndex: 400,
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "button-right.png"
        },
        buttonText: {
            text: _STRINGS.Game.PLAY,
            textHeight: 30,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                ig.game.director.jumpTo(LevelGameArena);
                ig.game.paused = !1
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.dialog-box-training-mode").requires("impact.entity", "game.entities.buttons.button-shooting-angle", "game.entities.buttons.button-back", "game.entities.buttons.button-play").defines(function() {
    EntityDialogBoxTrainingMode = ig.Entity.extend({
        zIndex: 300,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.onEnter(), ig.game.sortEntitiesDeferred())
        },
        onEnter: function() {
            this.control.disableButton();
            this.spawnButton();
            this.disableButton();
            this.pos.y = ig.system.height +
                1;
            this.tweenIn = this.tween({
                pos: {
                    y: 0
                }
            }, 0.25, {
                onComplete: function() {
                    this.pos.y = 0;
                    this.enableButton()
                }.bind(this)
            });
            this.tweenIn.start()
        },
        onExit: function() {
            this.disableButton();
            this.tweenOut = this.tween({
                pos: {
                    y: -ig.system.width - 1
                }
            }, 0.25, {
                onComplete: function() {
                    this.pos.x = -ig.system.width - 1;
                    this.control.enableButton();
                    this.killButton();
                    this.kill()
                }.bind(this)
            });
            this.tweenOut.start()
        },
        spawnButton: function() {
            this.backButton || (this.backButton = ig.game.spawnEntity(EntityButtonBack, this.pos.x + 105, this.pos.y +
                544, {
                    size: {
                        x: 261,
                        y: 95
                    },
                    control: this.control,
                    dialogBox: this
                }));
            this.shootingAngleButtons = [];
            this.shootingAngleButtons.push(ig.game.spawnEntity(EntityButtonShootingAngle, this.pos.x + 99.5, this.pos.y + 274.5, {
                size: {
                    x: 119,
                    y: 119
                },
                control: this.control,
                dialogBox: this,
                buttonImage: {
                    image: new ig.Image(_SPRITESHEETS.UI.meta.image),
                    spriteSheet: "UI",
                    spriteID: "thumbnail_basketfield_angle_5.jpg"
                },
                shootingAngle: "court5"
            }));
            this.shootingAngleButtons.push(ig.game.spawnEntity(EntityButtonShootingAngle, this.pos.x + 244.5, this.pos.y + 274.5, {
                size: {
                    x: 119,
                    y: 119
                },
                control: this.control,
                dialogBox: this,
                buttonImage: {
                    image: new ig.Image(_SPRITESHEETS.UI.meta.image),
                    spriteSheet: "UI",
                    spriteID: "thumbnail_basketfield_angle_3.jpg"
                },
                shootingAngle: "court3"
            }));
            this.shootingAngleButtons.push(ig.game.spawnEntity(EntityButtonShootingAngle, this.pos.x + 388.5, this.pos.y + 274.5, {
                size: {
                    x: 119,
                    y: 119
                },
                control: this.control,
                dialogBox: this,
                buttonImage: {
                    image: new ig.Image(_SPRITESHEETS.UI.meta.image),
                    spriteSheet: "UI",
                    spriteID: "thumbnail_basketfield_angle_1.jpg"
                },
                shootingAngle: "court1"
            }));
            this.shootingAngleButtons.push(ig.game.spawnEntity(EntityButtonShootingAngle, this.pos.x + 166.5, this.pos.y + 413.5, {
                size: {
                    x: 119,
                    y: 119
                },
                control: this.control,
                dialogBox: this,
                buttonImage: {
                    image: new ig.Image(_SPRITESHEETS.UI.meta.image),
                    spriteSheet: "UI",
                    spriteID: "thumbnail_basketfield_angle_4.jpg"
                },
                shootingAngle: "court4"
            }));
            this.shootingAngleButtons.push(ig.game.spawnEntity(EntityButtonShootingAngle, this.pos.x + 312.5, this.pos.y + 413.5, {
                size: {
                    x: 119,
                    y: 119
                },
                control: this.control,
                dialogBox: this,
                buttonImage: {
                    image: new ig.Image(_SPRITESHEETS.UI.meta.image),
                    spriteSheet: "UI",
                    spriteID: "thumbnail_basketfield_angle_2.jpg"
                },
                shootingAngle: "court2"
            }));
            this.playButton || (this.playButton = ig.game.spawnEntity(EntityButtonPlay, this.pos.x + 380, this.pos.y + 545, {
                size: {
                    x: 261,
                    y: 95
                },
                control: this.control,
                dialogBox: this
            }))
        },
        enableButton: function() {
            this.backButton && this.backButton.enable();
            if (this.shootingAngleButtons)
                for (var b = 0; b < this.shootingAngleButtons.length; b++) this.shootingAngleButtons[b].enable();
            this.playButton && this.playButton.enable()
        },
        disableButton: function() {
            this.backButton && this.backButton.disable();
            if (this.shootingAngleButtons)
                for (var b = 0; b < this.shootingAngleButtons.length; b++) this.shootingAngleButtons[b].disable();
            this.playButton && this.playButton.disable()
        },
        killButton: function() {
            this.backButton && (this.backButton.kill(), this.backButton = null);
            if (this.shootingAngleButtons && this.shootingAngleButtons.length) {
                for (var b = 0; b < this.shootingAngleButtons.length; b++) this.shootingAngleButtons[b].kill(), this.shootingAngleButtons[b] = null;
                this.shootingAngleButtons = []
            }
            this.playButton && (this.playButton.kill(), this.playButton = null)
        },
        setTextStyle: function() {
            var b = ig.system.context;
            b.textAlign = "center";
            b.textBaseline = "middle"
        },
        update: function() {
            this.parent();
            "undefined" == typeof wm && this.updateButtonPosition()
        },
        updateButtonPosition: function() {
            this.backButton && this.backButton.setPos(this.pos.x + 105, this.pos.y + 544);
            this.shootingAngleButtons && 5 === this.shootingAngleButtons.length && (this.shootingAngleButtons[0].setPos(this.pos.x + 99.5, this.pos.y +
                274.5), this.shootingAngleButtons[1].setPos(this.pos.x + 244.5, this.pos.y + 274.5), this.shootingAngleButtons[2].setPos(this.pos.x + 388.5, this.pos.y + 274.5), this.shootingAngleButtons[3].setPos(this.pos.x + 166.5, this.pos.y + 413.5), this.shootingAngleButtons[4].setPos(this.pos.x + 312.5, this.pos.y + 413.5));
            this.playButton && this.playButton.setPos(this.pos.x + 380, this.pos.y + 545)
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && (this.setTextStyle(), this.drawBackground(), this.drawTitle(), this.drawInstruction())
        },
        drawBackground: function() {
            var b = ig.system.context;
            b.fillStyle = "rgba(0,0,0,0.83)";
            b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        },
        drawTitle: function() {
            var b = ig.system.context;
            b.fillStyle = "rgba(255,255,255,1)";
            b.font = "43px avalon-bold";
            b.fillText(_STRINGS.Game["STREET SHOOTER"], this.pos.x + 0.5 * this.size.x, this.pos.y + 0.2 * this.size.y)
        },
        drawInstruction: function() {
            var b = ig.system.context;
            b.fillStyle = "rgba(255,255,255,1)";
            b.font = "26px avalon-bold";
            b.fillText(_STRINGS.Game["PLEASE SELECT SHOOTING ANGLE:"], this.pos.x + 0.5 * this.size.x, this.pos.y + 0.275 * this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-start-game").requires("game.entities.buttons.button", "game.entities.dialog-box-training-mode").defines(function() {
    EntityButtonStartGame = EntityButton.extend({
        zIndex: 200,
        textAnchor: {
            x: 0.45,
            y: 0.55
        },
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "menu-button.png"
        },
        buttonText: {
            text: _STRINGS.Game["START GAME"],
            textHeight: 28,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                ig.game.spawnEntity(EntityDialogBoxTrainingMode, 0, ig.system.height + 1, {
                    control: this.control,
                    size: {
                        x: ig.system.width,
                        y: ig.system.height
                    }
                })
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.main-menu-control").requires("impact.entity", "game.entities.buttons.button-audio", "game.entities.buttons.button-start-game", "game.entities.buttons.button-more-games").defines(function() {
    EntityMainMenuControl = ig.Entity.extend({
        gravityFactor: 0,
        logo: {
            pos: {
                x: 180,
                y: 110
            },
            scale: {
                x: 0.75,
                y: 0.75
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "logo.png"
        },
        playerAvatar: {
            pos: {
                x: 710,
                y: 400
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "player-avatar.png"
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.spawnCloud(), this.spawnButton())
        },
        ready: function() {
            this.pointer = ig.game.spawnEntity(EntityPointerSelector, 0.5 * ig.system.width, 0.5 * ig.system.height);
            this.tweenPlayerAvatar();
            this.tweenLogo()
        },
        tweenPlayerAvatar: function() {
            this.playerAvatarTween = this.tween({
                playerAvatar: {
                    pos: {
                        x: 355
                    }
                }
            }, 0.5);
            this.playerAvatarTween.start()
        },
        tweenLogo: function() {
            this.logoTweenZoomIn = this.tween({
                logo: {
                    scale: {
                        x: 0.8,
                        y: 0.8
                    }
                }
            }, 8, {
                easing: ig.Tween.Easing.Quadratic.EaseIn
            });
            this.logoTweenIdleA = this.tween({}, 0.8);
            this.logoTweenIdleB = this.tween({}, 0.75);
            this.logoTweenZoomOut = this.tween({
                logo: {
                    scale: {
                        x: 0.75,
                        y: 0.75
                    }
                }
            }, 7.5, {
                easing: ig.Tween.Easing.Quadratic.EaseOut
            });
            this.logoTweenZoomIn.chain(this.logoTweenIdleA);
            this.logoTweenIdleA.chain(this.logoTweenZoomOut);
            this.logoTweenZoomOut.chain(this.logoTweenIdleB);
            this.logoTweenIdleB.chain(this.logoTweenZoomIn);
            this.logoTweenZoomIn.start()
        },
        spawnCloud: function() {
            ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.25 * ig.system.height)
        },
        spawnButton: function() {
            this.audioButton = ig.game.spawnEntity(EntityButtonAudio, 449.5, 84, {
                size: {
                    x: 36,
                    y: 36
                },
                control: this,
                zIndex: 500
            });
            this.startGameButton = ig.game.spawnEntity(EntityButtonStartGame, -130, 500, {
                size: {
                    x: 261,
                    y: 59
                },
                control: this
            });
            !0 === _SETTINGS.MoreGames.Enabled && (this.moreGamesButton = ig.game.spawnEntity(EntityButtonMoreGames, 130, 573, {
                size: {
                    x: 261,
                    y: 59
                },
                control: this
            }));
            this.disableButton();
            this.tweenButton()
        },
        tweenButton: function() {
            this.startGameButton && (this.startGameButton._POS.x = -130, this.startGameButton.tween({
                _POS: {
                    x: 130
                }
            }, 0.25, {
                onComplete: function() {
                    this._POS.x = 130;
                    this.enable()
                }.bind(this.startGameButton)
            }).start());
            // this.moreGamesButton && (this.moreGamesButton._POS.x = -130, this.moreGamesButton.tween({
            //     _POS: {
            //         x: 130
            //     }
            // }, 0.25, {
            //     delay: 0.25,
            //     onComplete: function() {
            //         this._POS.x = 130;
            //         this.enable()
            //     }.bind(this.moreGamesButton)
            // }).start())
        },
        enableButton: function() {
            this.startGameButton.enable();
            // this.moreGamesButton.enable()
        },
        disableButton: function() {
            this.startGameButton.disable();
            // this.moreGamesButton.disable()
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && (this.drawCloud(), this.drawAvatar(), this.drawLogo())
        },
        drawCloud: function() {
            ig.game.cloud && ig.game.cloudGroup && ig.game.drawCloud()
        },
        drawAvatar: function() {
            ig.drawSprite(this.playerAvatar.spriteImage, this.playerAvatar.spriteSheet, this.playerAvatar.spriteID, this.playerAvatar.pos.x, this.playerAvatar.pos.y)
        },
        drawLogo: function() {
            ig.drawSprite(this.logo.spriteImage, this.logo.spriteSheet, this.logo.spriteID, this.logo.pos.x, this.logo.pos.y, {
                scale: this.logo.scale
            })
        }
    })
});
ig.baked = !0;
ig.module("game.levels.main-menu").requires("impact.image", "game.entities.main-menu-control").defines(function() {
    LevelMainMenu = {
        entities: [{
            type: "EntityMainMenuControl",
            x: 0,
            y: 0
        }],
        layer: [{
            name: "backgroun",
            width: 3,
            height: 4,
            linkWithCollision: !1,
            visible: !0,
            tilesetName: "media/graphics/backgrounds/splash-background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 160,
            foreground: !1,
            data: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [10, 11, 12]
            ]
        }]
    };
    LevelMainMenuResources = [new ig.Image("media/graphics/backgrounds/splash-background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.tutorial-control").requires("impact.entity").defines(function() {
    EntityTutorialControl = ig.Entity.extend({
        zIndex: 10,
        gravityFactor: 0,
        size: {
            x: 99,
            y: 225
        },
        finger: {
            visible: !1,
            alpha: 0.01,
            pos: {
                x: 0,
                y: 0
            },
            scale: {
                cur: {
                    x: 0.9,
                    y: 0.9
                },
                min: {
                    x: 1,
                    y: 1
                },
                max: {
                    x: 1.1,
                    y: 1.1
                }
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "finger.png"
        },
        visible: !1,
        tutorialInterval: 12,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.initFinger(), ig.game.sortEntitiesDeferred())
        },
        initFinger: function() {
            this.finger.visible = !1;
            this.finger.alpha = 0.01;
            this.finger.pos = {
                x: this.pos.x,
                y: this.pos.y + this.size.y
            }
        },
        initFingerTween: function() {
            this.fingerTween = [];
            var b = _SPRITESHEETS[this.finger.spriteSheet].frames[this.finger.spriteID].frame;
            this.fingerTween.push(this.tween({}, 0.01, {
                onComplete: function() {
                    this.finger.pos = {
                        x: this.pos.x,
                        y: this.pos.y + this.size.y - b.h
                    };
                    this.finger.scale.cur = ig.copy(this.finger.scale.max);
                    this.finger.visible = !0
                }.bind(this)
            }));
            this.fingerTween.push(this.tween({
                finger: {
                    alpha: 1,
                    scale: {
                        cur: {
                            x: this.finger.scale.max.x,
                            y: this.finger.scale.max.y
                        }
                    }
                }
            }, 0.2, {
                onComplete: function() {
                    this.finger.alpha = 1;
                    this.finger.scale.cur.x = this.finger.scale.max.x;
                    this.finger.scale.cur.y = this.finger.scale.max.y
                }.bind(this)
            }));
            this.fingerTween.push(this.tween({
                finger: {
                    scale: {
                        cur: {
                            x: this.finger.scale.min.x,
                            y: this.finger.scale.min.y
                        }
                    }
                }
            }, 0.4, {
                onComplete: function() {
                    this.finger.scale.cur.x = this.finger.scale.min.x;
                    this.finger.scale.cur.y = this.finger.scale.min.y
                }.bind(this)
            }));
            this.fingerTween.push(this.tween({
                finger: {
                    pos: {
                        x: this.pos.x,
                        y: this.pos.y
                    }
                }
            }, 0.5, {
                onComplete: function() {
                    this.finger.pos.x = this.finger.pos.x;
                    this.finger.pos.y = this.finger.pos.y
                }.bind(this)
            }));
            this.fingerTween.push(this.tween({}, 0.15, {}));
            this.fingerTween.push(this.tween({
                finger: {
                    alpha: 0.01,
                    scale: {
                        cur: {
                            x: this.finger.scale.max.x,
                            y: this.finger.scale.max.y
                        }
                    }
                }
            }, 0.25, {
                onComplete: function() {
                    this.finger.visible = !1;
                    this.finger.alpha = 0.01;
                    this.finger.scale.cur.x = this.finger.scale.max.x;
                    this.finger.scale.cur.y = this.finger.scale.max.y
                }.bind(this)
            }));
            this.fingerTween.push(this.tween({}, 0.2, {}));
            for (var c = 0; c < this.fingerTween.length - 1; c++) this.fingerTween[c].chain(this.fingerTween[c + 1]);
            1 < this.fingerTween.length && this.fingerTween[this.fingerTween.length - 1].chain(this.fingerTween[0]);
            this.fingerTween[0].start()
        },
        stopFingerTween: function() {
            if (this.fingerTween) {
                for (var b = 0; b < this.fingerTween.length - 1; b++) this.fingerTween[b].stop(), this.fingerTween[b] = null;
                this.fingerTween = null
            }
        },
        hideTutorial: function() {
            !0 === this.visible && (this.stopFingerTween(), this.visible = !1);
            this._lastTutorialTime = this.control.gameTimer.delta()
        },
        showTutorial: function() {
            !1 === this.visible && (this.visible = !0, this.initFinger(), this.initFingerTween())
        },
        onEnterPauseScreen: function() {
            if (this.fingerTween)
                for (var b = 0; b < this.fingerTween.length; b++)!0 === this.fingerTween[b].started && this.fingerTween[b].pause()
        },
        onExitPauseScreen: function() {
            if (this.fingerTween)
                for (var b = 0; b < this.fingerTween.length; b++)!0 === this.fingerTween[b].paused && this.fingerTween[b].resume()
        },
        onEnterResultScreen: function() {
            this.stopFingerTween();
            this.hideTutorial()
        },
        onExitResultScreen: function() {},
        update: function() {
            this.parent();
            "undefined" == typeof wm && this.updateTutorial()
        },
        updateTutorial: function() {
            !1 === this.visible && this.control.tutorialControl === this && this._lastTutorialTime && !0 === this.control.gameStarted && !1 === this.control.gameEnding && this.control.gameTimer && Math.abs(this._lastTutorialTime - this.control.gameTimer.delta()) >= this.tutorialInterval && this.showTutorial()
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && !0 === this.visible && (!0 === this.finger.visible && this.drawFinger(), this.drawInstruction())
        },
        drawFinger: function() {
            ig.drawSprite(this.finger.spriteImage, this.finger.spriteSheet, this.finger.spriteID, this.finger.pos.x, this.finger.pos.y, {
                alpha: this.finger.alpha,
                scale: this.finger.scale.cur,
                anchor: {
                    x: 0,
                    y: 0
                }
            })
        },
        drawInstruction: function() {
            var b = ig.system.context;
            b.font = 22 - this.finger.alpha + "px avalon-bold";
            b.fillStyle = "white";
            b.textAlign = "center";
            b.textBaseline = "top";
            b.fillText(_STRINGS.Game["SWIPE TO SHOOT"], this.pos.x + 0.5 * this.size.x, this.pos.y + this.size.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-pause").requires("game.entities.buttons.button").defines(function() {
    EntityButtonPause = EntityButton.extend({
        zIndex: 10,
        minScale: {
            x: 1,
            y: 1
        },
        maxScale: {
            x: 1.1,
            y: 1.1
        },
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "pause.png"
        },
        ignorePause: !0,
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                this.togglePause()
            }
            this.parent()
        },
        togglePause: function() {
            !0 === (!0 === this.control.gamePaused) ? this.control.resumeGame() : this.control.pauseGame()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-resume").requires("game.entities.buttons.button").defines(function() {
    EntityButtonResume = EntityButton.extend({
        zIndex: 200,
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "button-left.png"
        },
        buttonText: {
            text: _STRINGS.Game.RESUME,
            textHeight: 30,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                this.control.resumeGame()
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-restart").requires("game.entities.buttons.button").defines(function() {
    EntityButtonRestart = EntityButton.extend({
        zIndex: 200,
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "button-left.png"
        },
        buttonText: {
            text: _STRINGS.Game.RESTART,
            textHeight: 30,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                this.control.restartGame()
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-main-menu").requires("game.entities.buttons.button").defines(function() {
    EntityButtonMainMenu = EntityButton.extend({
        zIndex: 200,
        buttonImage: {
            image: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "button-right.png"
        },
        buttonText: {
            text: _STRINGS.Game["MAIN MENU"],
            textHeight: 30,
            font: "avalon-bold",
            fillStyle: "#FFFFFF"
        },
        soundKey: "buttonSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        released: function() {
            if (!0 !== this.disabled && this.isClicked) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.soundKey)
                } catch (b) {
                    console.log(b)
                }
                ig.game.director.jumpTo(LevelMainMenu);
                ig.game.paused = !1
            }
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.confetti-generator").requires("impact.entity").defines(function() {
    EntityConfettiGenerator = ig.Entity.extend({
        zIndex: 99,
        gravityFactor: 0,
        size: {
            x: 20,
            y: 23
        },
        colour1: {
            r: 255,
            g: 127,
            b: 0
        },
        colour2: {
            r: 255,
            g: 0,
            b: 0
        },
        colour3: {
            r: 255,
            g: 255,
            b: 255
        },
        confettiArea: {
            x: 480,
            y: 640
        },
        particles: [],
        _MAXPARTICLES: 25,
        tilt: Math.floor(10 * Math.random()) - 10,
        tiltAngleIncremental: 0.07 * Math.random() + 0.05,
        tiltAngle: 0,
        angle: 0,
        TiltChangeCountdown: 5,
        ignorePause: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            for (b = 0; b < this._MAXPARTICLES; b++) {
                this.randomColour = Math.floor(3 * Math.random() + 1);
                switch (this.randomColour) {
                    case 1:
                        this.colour = this.colour1;
                        break;
                    case 2:
                        this.colour = this.colour2;
                        break;
                    case 3:
                        this.colour = this.colour3
                }
                this.particles.push({
                    x: Math.random() * this.confettiArea.x,
                    y: Math.random() * this.confettiArea.y,
                    r: this.randomFromTo(5, 30),
                    d: Math.random() * this._MAXPARTICLES + 10,
                    color: "rgb(" + this.colour.r + "," + this.colour.g + "," + this.colour.b + ")",
                    tilt: Math.floor(10 * Math.random()) - 10,
                    tiltAngleIncremental: 0.07 * Math.random() + 0.05,
                    tiltAngle: 0
                });
                ig.game.sortEntitiesDeferred()
            }
        },
        update: function() {
            this.angle += 0.01;
            this.tiltAngle += 0.1;
            this.TiltChangeCountdown--;
            for (var b = 0; b < this._MAXPARTICLES; b++) {
                var c = this.particles[b];
                c.tiltAngle += c.tiltAngleIncremental;
                c.y += (Math.cos(this.angle + c.d) + 1 + c.r / 2) / 2;
                c.x += Math.sin(this.angle);
                c.tilt = 15 * Math.sin(c.tiltAngle - b / 3);
                if (c.x > this.confettiArea.x + 5 || -5 > c.x || c.y > this.confettiArea.y) this.particles[b] = 0 < b % 5 || 0 == b % 2 ? {
                    x: Math.random() * this.confettiArea.x,
                    y: -10,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: Math.floor(10 * Math.random()) - 10,
                    tiltAngle: c.tiltAngle,
                    tiltAngleIncremental: c.tiltAngleIncremental
                } : 0 < Math.sin(this.angle) ? {
                    x: -5,
                    y: Math.random() * this.confettiArea.y,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: Math.floor(10 * Math.random()) - 10,
                    tiltAngleIncremental: c.tiltAngleIncremental
                } : {
                    x: this.confettiArea.x + 5,
                    y: Math.random() * this.confettiArea.y,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: Math.floor(10 * Math.random()) - 10,
                    tiltAngleIncremental: c.tiltAngleIncremental
                }
            }
            this.parent()
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            for (var c = 0; c < this._MAXPARTICLES; c++) {
                var d = this.particles[c];
                b.beginPath();
                b.lineWidth = d.r / 2;
                b.strokeStyle = d.color;
                b.moveTo(d.x + d.tilt + d.r / 4, d.y);
                b.lineTo(d.x + d.tilt, d.y + d.tilt + d.r / 4);
                b.stroke()
            }
            b.restore();
            this.parent()
        },
        randomFromTo: function(b, c) {
            return Math.floor(Math.random() * (c - b + 1) + b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.ui-control").requires("impact.entity", "game.entities.buttons.button-audio", "game.entities.buttons.button-pause", "game.entities.buttons.button-resume", "game.entities.buttons.button-restart", "game.entities.buttons.button-main-menu", "game.entities.confetti-generator").defines(function() {
    EntityUiControl = ig.Entity.extend({
        zIndex: 15,
        gravityFactor: 0,
        playerPortrait: {
            pos: {
                x: 47.5,
                y: 65.5
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "portrait.png"
        },
        statsDelimiter: ": ",
        scoreText: {
            displayScore: 0,
            pos: {
                x: 96,
                y: 48
            }
        },
        ballIcon: {
            pos: {
                x: 330,
                y: 44.88
            },
            spriteImage: new ig.Image(_SPRITESHEETS.UI.meta.image),
            spriteSheet: "UI",
            spriteID: "ball.png"
        },
        ballCount: {
            pos: {
                x: 360,
                y: 48
            }
        },
        timerText: {
            pos: {
                x: 269,
                y: 88
            }
        },
        resultScreen: {
            background: "rgba(0,0,0,0.9)",
            backgroundAlpha: 0,
            modeText: {
                pos: {
                    x: 247,
                    y: 77
                }
            }
        },
        displayCountDown: !1,
        countDownTextMinScale: 1,
        countDownTextMaxScale: 1.1,
        countDownTextScale: 1,
        countDownDuration: 2.5,
        currentCountDown: 0,
        gameOverTextProgress: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && this.spawnButton()
        },
        spawnButton: function() {
            this.audioButton = ig.game.spawnEntity(EntityButtonAudio, 449.5, 84, {
                size: {
                    x: 36,
                    y: 36
                },
                control: this.control,
                UI: this
            });
            this.pauseButton = ig.game.spawnEntity(EntityButtonPause, 449.5, 44, {
                size: {
                    x: 36,
                    y: 36
                },
                control: this.control,
                UI: this
            })
        },
        enableButton: function() {},
        disableButton: function() {},
        showCurrentScore: function(b) {
            this.currentScore = 0 + b;
            this.currentScoreAlpha = 1;
            this.currentScoreTween && this.currentScoreTween.stop();
            this.displayScoreTween = this.tween({
                scoreText: {
                    displayScore: this.control.gameStats.yourScore
                }
            }, 0.5 * Math.max(1, ig.game.config.score.comboTime), {
                easing: ig.Tween.Easing.Cubic.EaseInOut,
                onComplete: function() {
                    this.scoreText.displayScore = this.control.gameStats.yourScore
                }.bind(this)
            });
            this.currentScoreTween = this.tween({
                currentScoreAlpha: 0
            }, Math.max(1, ig.game.config.score.comboTime), {
                easing: ig.Tween.Easing.Cubic.EaseInOut,
                onComplete: function() {
                    this.currentScoreAlpha = 0;
                    this.hideCurrentScore()
                }.bind(this)
            });
            this.displayScoreTween.start();
            this.currentScoreTween.start()
        },
        hideCurrentScore: function() {
            this.currentScoreAlpha = this.currentScore = 0
        },
        startCountDown: function() {
            !0 !== this.control.gameStarted && (this.currentCountDown = ig.game.config.preGameCountDown + 1);
            this.setupCountDownTween();
            this.countDownTween.start();
            this.countDownTextScaleTweenIn.start();
            this.displayCountDown = !0
        },
        setupCountDownTween: function() {
            this.countDownTween = this.tween({
                currentCountDown: 0
            }, this.countDownDuration, {
                onComplete: this.endCountDown.bind(this)
            });
            this.countDownTextScale = this.countDownTextMinScale;
            this.countDownTextScaleTweenIn = this.tween({
                countDownTextScale: this.countDownTextMaxScale
            }, 0.5, {
                easing: ig.Tween.Easing.Elastic.EaseIn,
                loopCount: this.currentCountDown,
                onComplete: function() {
                    this.countDownTextScale = this.countDownTextMaxScale
                }.bind(this)
            });
            this.countDownTextScaleTweenOut = this.tween({
                countDownTextScale: this.countDownTextMinScale
            }, 0.5, {
                easing: ig.Tween.Easing.Elastic.EaseOut,
                loopCount: this.currentCountDown,
                onComplete: function() {
                    this.countDownTextScale = this.countDownTextMinScale
                }.bind(this)
            });
            this.countDownTextScaleTweenIn.chain(this.countDownTextScaleTweenOut);
            this.countDownTextScaleTweenOut.chain(this.countDownTextScaleTweenIn)
        },
        fadeInGameOverText: function() {
            this.displayGameOver = !0;
            this.gameOverTextProgress = 0;
            this.gameOverTextTween = this.tween({
                gameOverTextProgress: 1
            }, 1, {
                onComplete: function() {
                    this.gameOverTextProgress = 1;
                    this.displayGameOver = !0;
                    this.fadeOutOverText()
                }.bind(this)
            });
            this.gameOverTextTween.start()
        },
        fadeOutOverText: function() {
            this.displayGameOver = !0;
            this.gameOverTextProgress = 1;
            this.gameOverTextTween = this.tween({
                gameOverTextProgress: 0
            }, 1, {
                delay: 1,
                onComplete: function() {
                    this.gameOverTextProgress = 0;
                    this.gameOverTextTween && (this.gameOverTextTween.stop(), this.gameOverTextTween = null);
                    this.displayGameOver = !1;
                    this.control.endGame()
                }.bind(this)
            });
            this.gameOverTextTween.start()
        },
        endCountDown: function() {
            this.countDownTween && this.countDownTween.stop();
            this.countDownTween = null;
            this.countDownTextScaleTweenIn && this.countDownTextScaleTweenIn.stop();
            this.countDownTextScaleTweenIn = null;
            this.countDownTextScaleTweenOut && this.countDownTextScaleTweenOut.stop();
            this.countDownTextScaleTweenOut = null;
            this.displayCountDown = !1;
            !0 !== this.control.gameStarted && this.control.startGame()
        },
        onEnterPauseScreen: function() {
            this.pauseButton && this.pauseButton.disable();
            this.resumeButton || (this.resumeButton = ig.game.spawnEntity(EntityButtonResume, 105, 544, {
                size: {
                    x: 261,
                    y: 95
                },
                control: this.control,
                UI: this
            }));
            this.mainMenuButton || (this.mainMenuButton = ig.game.spawnEntity(EntityButtonMainMenu, 380, 545, {
                size: {
                    x: 261,
                    y: 95
                },
                control: this.control,
                UI: this
            }));
            this.countDownTween && !0 === this.countDownTween.started && this.countDownTween.pause();
            this.displayScoreTween && !0 === this.displayScoreTween.started && this.displayScoreTween.pause();
            this.currentScoreTween && !0 === this.currentScoreTween.started && this.currentScoreTween.pause();
            this.countDownTextScaleTweenIn && !0 === this.countDownTextScaleTweenIn.started && this.countDownTextScaleTweenIn.pause();
            this.countDownTextScaleTweenOut && !0 === this.countDownTextScaleTweenOut.started && this.countDownTextScaleTweenOut.pause();
            this.gameOverTextTween && !0 === this.gameOverTextTween.started && this.gameOverTextTween.pause()
        },
        onExitPauseScreen: function() {
            this.audioButton && this.audioButton.enable();
            this.pauseButton && this.pauseButton.enable();
            this.resumeButton && this.resumeButton.kill();
            this.resumeButton = null;
            this.mainMenuButton && this.mainMenuButton.kill();
            this.mainMenuButton = null;
            this.countDownTween && !0 === this.countDownTween.paused && this.countDownTween.resume();
            this.displayScoreTween && !0 === this.displayScoreTween.paused && this.displayScoreTween.resume();
            this.currentScoreTween && !0 === this.currentScoreTween.paused && this.currentScoreTween.resume();
            this.countDownTextScaleTweenIn && !0 === this.countDownTextScaleTweenIn.paused && this.countDownTextScaleTweenIn.resume();
            this.countDownTextScaleTweenOut && !0 === this.countDownTextScaleTweenOut.paused && this.countDownTextScaleTweenOut.resume();
            this.gameOverTextTween && !0 === this.gameOverTextTween.paused && this.gameOverTextTween.resume()
        },
        onEnterResultScreen: function() {
            this.pauseButton && (this.pauseButton.hide(), this.pauseButton.disable());
            this.restartButton || (this.restartButton = ig.game.spawnEntity(EntityButtonRestart, 105, 544, {
                size: {
                    x: 261,
                    y: 95
                },
                control: this.control,
                UI: this
            }));
            this.mainMenuButton || (this.mainMenuButton = ig.game.spawnEntity(EntityButtonMainMenu, 380, 545, {
                size: {
                    x: 261,
                    y: 95
                },
                control: this.control,
                UI: this
            }));
            this.confettiGenerator = ig.game.spawnEntity(EntityConfettiGenerator, 0, 0, {
                control: this.control,
                UI: this
            })
        },
        onExitResultScreen: function() {
            this.restartButton && this.restartButton.kill();
            this.restartButton = null;
            this.mainMenuButton && this.mainMenuButton.kill();
            this.mainMenuButton = null
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && (this.drawElement(this.playerPortrait), !0 === this.displayCountDown && this.drawCountDown(), !0 === this.displayGameOver && this.drawGameOver(), this.drawCurrentScore(), this.setHUDTextStyle(), this.drawScore(), this.drawBallCount(), this.drawTimer(), (!0 === this.control.gamePaused || !0 === this.control.gameEnded) && this.drawResultScreen())
        },
        drawCountDown: function() {
            var b = ig.system.context;
            b.font = "64px avalon-bold";
            b.textAlign = "center";
            b.textBaseline = "middle";
            b.translate(0.5 * ig.system.width, 0.5 * ig.system.height);
            var c = this.countDownTextScale,
                d = this.currentCountDown.floor();
            b.scale(c, c);
            if (1 <= this.currentCountDown) {
                var e = this.currentCountDown - d;
                b.globalAlpha = 0.25 > e ? e.map(0, 0.25, 0.01, 1) : 1;
                b.fillStyle = "white";
                b.fillText(d, 0, 0);
                b.lineWidth = 2;
                b.setLineDash([e, 1 - e]);
                b.strokeStyle = "black";
                b.strokeText(d, 0, 0);
                b.setLineDash([])
            } else 0 < this.currentCountDown && (e = this.currentCountDown, b.globalAlpha = 0.25 > e ? e.map(0, 0.25, 0.01, 1) : 1, b.fillStyle = "rgba(255,127,0,1)", b.fillText(_STRINGS.Game["GO!"], 0, 0), b.lineWidth = 4, b.setLineDash([1 - e, e]), b.strokeStyle = "white", b.strokeText(_STRINGS.Game["GO!"], 0, 0), b.setLineDash([]));
            b.globalAlpha = 1;
            b.scale(1 / c, 1 / c);
            b.translate(-0.5 * ig.system.width, -0.5 * ig.system.height)
        },
        drawGameOver: function() {
            var b = ig.system.context;
            b.font = "64px avalon-bold";
            b.textAlign = "center";
            b.textBaseline = "middle";
            if (0.5 <= this.gameOverTextProgress) {
                var c = this.gameOverTextProgress.map(0.5, 1, 0.01, 1);
                b.globalAlpha = c;
                b.fillStyle = "rgba(255,127,0,1)";
                b.fillText(_STRINGS.Game["GAME OVER"], 0.5 * ig.system.width, 0.5 * ig.system.height)
            }
            b.globalAlpha = 0.25 >= this.gameOverTextProgress ? this.gameOverTextProgress.map(0, 0.25, 0.01, 1) : 1;
            b.lineWidth = 2;
            b.lineDashOffset = 128 * this.gameOverTextProgress;
            b.setLineDash([128 * this.gameOverTextProgress, 169 * (1 - this.gameOverTextProgress), 64 * this.gameOverTextProgress, 192 * (1 - this.gameOverTextProgress)]);
            b.strokeStyle = "white";
            b.strokeText(_STRINGS.Game["GAME OVER"], 0.5 * ig.system.width, 0.5 * ig.system.height);
            b.setLineDash([]);
            b.globalAlpha = 1
        },
        setHUDTextStyle: function() {
            var b = ig.system.context;
            b.textAlign = "left";
            b.textBaseline = "middle";
            b.fillStyle = "white"
        },
        drawElement: function(b) {
            ig.drawSprite(b.spriteImage, b.spriteSheet, b.spriteID, b.pos.x, b.pos.y)
        },
        drawCurrentScore: function() {
            if (this.currentScore && this.currentScoreAlpha) {
                var b = ig.system.context,
                    c = "+" + this.currentScore,
                    d = this.currentScoreAlpha.limit(0.01, 0.99),
                    e = this.getScoreTextWidth();
                b.textAlign = "right";
                b.fillStyle = "rgba(64," +
                    Math.floor(128 + 6 * this.control.scoreMultiplier).limit(0, 255) + ",64," + d + ")";
                b.font = "36px avalon-bold";
                b.fillText(c, this.scoreText.pos.x + e, this.scoreText.pos.y + 2 * (36 + d))
            }
        },
        getScoreTextWidth: function() {
            var b = ig.system.context,
                c = this.getScore(ig.game.config.score.digits);
            b.font = "44px avalon-bold";
            return b.measureText(c).width
        },
        drawScore: function() {
            var b = ig.system.context,
                c = _STRINGS.Game.Score;
            b.font = "36px avalon-bold";
            b.fillText(c, this.scoreText.pos.x, this.scoreText.pos.y);
            b.font = "44px avalon-bold";
            b.fillText(this.getScore(ig.game.config.score.digits), this.scoreText.pos.x, this.scoreText.pos.y + 40)
        },
        getScore: function(b) {
            for (var c = this.scoreText.displayScore.floor().toString(); c.length < b;) c = "0" + c;
            return c
        },
        drawBallCount: function() {
            var b = ig.system.context,
                c = this.getBallCount(2);
            this.drawElement(this.ballIcon);
            b.font = "30px avalon-bold";
            b.fillText(c, this.ballCount.pos.x, this.ballCount.pos.y)
        },
        getBallCount: function(b) {
            for (var c = this.control.ballLeft.toString(); c.length < b;) c = "0" + c;
            return "X " + c
        },
        drawTimer: function() {
            var b = ig.system.context,
                c = _STRINGS.Game.Time;
            formattedTime = this.getFormattedTime();
            c = c + ": " + formattedTime;
            b.font = "30px avalon-bold";
            b.fillText(c, this.timerText.pos.x, this.timerText.pos.y)
        },
        getFormattedTime: function() {
            var b = this.control.gameTimer.delta();
            formattedTime = "00:00";
            if (0 > b) {
                for (var c = (-b).ceil(), b = Math.floor(c / 60).toString(), c = (c % 60).toString(); 2 > b.length;) b = "0" + b;
                for (; 2 > c.length;) c = "0" + c;
                formattedTime = b + ":" + c
            }
            return formattedTime
        },
        drawResultScreen: function() {
            var b = ig.system.context;
            b.fillStyle = this.resultScreen.background;
            b.fillRect(0, 0, ig.system.width, ig.system.height);
            this.drawGameStats()
        },
        drawGameStats: function() {
            context = ig.system.context;
            context.fillStyle = "white";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "43px avalon-bold";
            this.drawGameState();
            context.font = "30px avalon-bold";
            this.drawStatsHighScore();
            this.drawStatsYourScoe();
            context.font = "20px avalon-bold";
            this.drawStatsTotalShots();
            this.drawStatsBaskes();
            this.drawStatsMisses();
            this.drawStatsAccuracy()
        },
        drawGameState: function() {
            var b = _STRINGS.Game["STREET SHOOTER"],
                c = ig.system.context;
            this.control.gamePaused && (b = _STRINGS.Game["GAME PAUSED"]);
            this.control.gameEnded && (b = _STRINGS.Game["GAME OVER"]);
            c.fillText(b, 0.5 * ig.system.width, 0.14 * ig.system.height)
        },
        drawStatsHighScore: function() {
            ig.system.context.fillText(_STRINGS.Game["High Score"] + this.statsDelimiter + ig.game.playerStats.highScore, 0.5 * ig.system.width, 0.29 * ig.system.height)
        },
        drawStatsYourScoe: function() {
            ig.system.context.fillText(_STRINGS.Game["Your Score"] + this.statsDelimiter + this.control.gameStats.yourScore, 0.5 * ig.system.width, 0.38 * ig.system.height)
        },
        drawStatsTotalShots: function() {
            ig.system.context.fillText(_STRINGS.Game["Total Shots"] + this.statsDelimiter + this.control.gameStats.totalShots, 0.5 * ig.system.width, 0.45 * ig.system.height)
        },
        drawStatsBaskes: function() {
            ig.system.context.fillText(_STRINGS.Game.Baskets + this.statsDelimiter + this.control.gameStats.baskets, 0.5 * ig.system.width, 0.5 * ig.system.height)
        },
        drawStatsMisses: function() {
            ig.system.context.fillText(_STRINGS.Game.Misses + this.statsDelimiter + this.control.gameStats.misses, 0.5 * ig.system.width, 0.55 * ig.system.height)
        },
        drawStatsAccuracy: function() {
            ig.system.context.fillText(_STRINGS.Game.Accuracy + this.statsDelimiter + (this.control.gameStats.ACCURACY.toString() + "%"), 0.5 * ig.system.width, 0.6 * ig.system.height)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.basket-net").requires("impact.entity").defines(function() {
    EntityBasketNet = ig.Entity.extend({
        zIndex: 3,
        size: {
            x: 44,
            y: 44
        },
        anchor: {
            x: 0.5,
            y: 0.5
        },
        gravityFactor: 0,
        netGravityFactor: 0.5 * Math.PI,
        points: [],
        physics_accuracy: 44,
        net_height: 15,
        net_width: 11,
        spacing: {
            x: 3,
            y: 4
        },
        spacingStep: {
            x: 0.1,
            y: 0.1
        },
        pointDelta: 0.012,
        netColor: "rgba(25,25,25, 0.25)",
        enabled_tearing: !1,
        tear_distance: 30,
        ball_influence: 0,
        basket_tolerance: 9,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.points = [], this._POS = {
                x: this.pos.x,
                y: this.pos.y
            }, this.pos.x -= this.anchor.x * this.size.x, this.pos.y -= this.anchor.y * this.size.y, this.setupNet())
        },
        setupNet: function() {
            for (var b = 0; b <= this.net_height; b++)
                for (var c = 0; c <= this.net_width; c++) {
                    var d = c / this.net_width - 0.5,
                        e = b / this.net_height - 0,
                        e = this.newPoint(this._POS.x + d * (this.spacing.x + e * this.spacingStep.x), this._POS.y + e * (this.spacing.y + d * this.spacingStep.y));
                    0 !== c && this.attachPoint(e, this.points[this.points.length - 1]);
                    b <= 0.25 * this.net_height ? (e.pinned = !0, this.ellipse && (e.x = this._POS.x + 2 * d * this.ellipse.a, d = e.x - this._POS.x, e.y = this._POS.y + this.ellipse.y_Multiplier * Math.sqrt((1 - d * d / (this.ellipse.a * this.ellipse.a)) * this.ellipse.b * this.ellipse.b)), this.pinPoint(e, e.x, e.y)) : this.attachPoint(e, this.points[c + (b - 1) * (this.net_width + 1)]);
                    this.points.push(e)
                }
        },
        newPoint: function(b, c) {
            return {
                x: b,
                y: c,
                px: b,
                py: c,
                vx: 0,
                vy: 0,
                pin_x: null,
                pin_y: null,
                constraints: []
            }
        },
        attachPoint: function(b, c) {
            b.constraints.push(this.newConstraint(b, c))
        },
        newConstraint: function(b, c) {
            var d = {};
            d.p1 = b;
            d.p2 = c;
            d.length = 0.5 * (this.spacing.x + this.spacing.y).round();
            return d
        },
        pinPoint: function(b, c, d) {
            b.pin_x = c;
            b.pin_y = d
        },
        update: function() {
            this.parent();
            if ("undefined" == typeof wm) {
                this.updateCloth();
                for (var b = ig.game.getEntitiesByType(EntityBasketBall), c = 0; c < b.length; c++) {
                    var d = b[c];
                    !0 === d.collision.net && this.updateNetBallCollision(d)
                }
            }
        },
        updateNetBallCollision: function(b) {
            var c = b.distanceTo(this);
            0 <= b.vel.y && (c <= this.basket_tolerance ? this.control.basketed(b) : b._POS.y > this._POS.y && (b.netMissed = !0))
        },
        updateCloth: function() {
            for (var b = this.physics_accuracy; b--;)
                for (var c = this.points.length; c--;) this.resolve_point_constraints(this.points[c]);
            for (b = this.points.length; b--;) this.updatePoint(this.points[b], this.pointDelta)
        },
        updatePoint: function(b, c) {
            var d = ig.game.screen.x,
                e = ig.game.screen.y;
            !0 === b.pinned && (b.x -= d, b.y -= e);
            d = ig.game.getEntitiesByType(EntityBasketBall);
            for (e = 0; e < d.length; e++) {
                var g = d[e];
                if (!0 == g.collision.net) {
                    var l = b.x - (g.pos.x + 0.5 * g.size.x),
                        q = b.y - (g.pos.y + 0.5 * g.size.y);
                    Math.sqrt(l * l + q * q) < this.ball_influence && (b.px = b.x -
                        0.08 * g.vel.x, b.py = b.y - 0.02 * g.vel.y, g.vel.x -= 0.06 * (b.x - b.px), g.vel.y -= 0.04 * (b.y - b.py))
                }
            }
            this.add_point_force(b, 0, ig.game.gravity * this.netGravityFactor);
            c *= c;
            nx = b.x + 0.99 * (b.x - b.px) + b.vx / 2 * c;
            ny = b.y + 0.99 * (b.y - b.py) + b.vy / 2 * c;
            b.px = b.x;
            b.py = b.y;
            b.x = nx;
            b.y = ny;
            b.vy = 0;
            b.vx = 0
        },
        add_point_force: function(b, c, d) {
            b.vx += c;
            b.vy += d
        },
        resolve_point_constraints: function(b) {
            if (null != b.pin_x && null != b.pin_y) b.x = b.pin_x, b.y = b.pin_y;
            else {
                for (var c = b.constraints.length; c--;) this.resolveConstraint(b.constraints[c]);
                b.x > this.boundsx ? b.x = 2 * this.boundsx - b.x : 1 > b.x && (b.x = 2 - b.x);
                b.y > this.boundsy ? b.y = 2 * this.boundsy - b.y : 1 > b.y && (b.y = 2 - b.y)
            }
        },
        resolveConstraint: function(b) {
            var c = b.p1.x - b.p2.x,
                d = b.p1.y - b.p2.y,
                e = Math.sqrt(c * c + d * d),
                g = (b.length - e) / e;
            this.enabled_tearing && e > this.tear_distance && this.remove_point_constraint(b.p1, b);
            c = 0.5 * c * g;
            d = 0.5 * d * g;
            b.p1.x += c;
            b.p1.y += d;
            b.p2.x -= c;
            b.p2.y -= d
        },
        remove_point_constraint: function(b, c) {
            for (var d = b.constraints.length; d--;) b.constraints[d] == c && b.constraints.splice(d, 1)
        },
        draw: function() {
            this.parent();
            "undefined" == typeof wm && this.drawCloth(ig.system.context)
        },
        drawCloth: function(b) {
            b.beginPath();
            for (var c = this.points.length; c--;) this.drawPoints(b, this.points[c]);
            b.lineWidth = 0.75;
            b.strokeStyle = this.netColor;
            b.stroke()
        },
        drawPoints: function(b, c) {
            if (!(0 >= c.constraints.length))
                for (var d = c.constraints.length; d--;) this.drawConstraint(b, c.constraints[d])
        },
        drawConstraint: function(b, c) {
            b.moveTo(c.p1.x, c.p1.y);
            b.lineTo(c.p2.x, c.p2.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.animated-entity").requires("impact.entity").defines(function() {
    EntityAnimatedEntity = ig.Entity.extend({
        angle: 0,
        alpha: 1,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        scale: {
            x: 1,
            y: 1
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.setPos(this.pos.x, this.pos.y), this.setSize(this.size.x, this.size.x))
        },
        setPos: function(b, c) {
            this._POS = {
                x: b,
                y: c
            }
        },
        setSize: function(b, c) {
            this._SIZE = {
                x: b,
                y: c
            }
        },
        changeAnimation: function(b, c) {
            if (this.currentAnimation) {
                if (this.currentAnimation === this.animations[b]) return !1;
                this.currentAnimation.frameIndex = 0;
                this.animationTimer = !1
            }
            this.currentAnimation = this.animations[b];
            c || (c = 0);
            c %= this.currentAnimation.frame.length;
            this.currentAnimation.frameIndex = c;
            this.spriteSheet = this.currentAnimation.spriteSheet;
            this.spriteID = this.currentAnimation.frame[this.currentAnimation.frameIndex];
            this.animationTimer = new ig.Timer(this.currentAnimation.duration);
            this.currentAnimation.keyFrame && this.currentAnimation.keyFrame.length && -1 < this.currentAnimation.keyFrame.indexOf(this.currentAnimation.frameIndex) && this.action();
            return this.currentAnimation
        },
        endAnimLoop: function() {},
        updateEntityBox: function() {
            this.size = {
                x: this._SIZE.x * this.scale.x,
                y: this._SIZE.y * this.scale.y
            };
            this.pos.x = this._POS.x - this.anchor.x * this.size.x;
            this.pos.y = this._POS.y - this.anchor.y * this.size.y
        },
        update: function() {
            this.parent();
            "undefined" == typeof wm && (this.updateEntityBox(), this.updateSprite())
        },
        updateSprite: function() {
            if (!this.paused && this.animationTimer && (this.currentAnimation && this.animations) && 0 <= this.animationTimer.delta()) {
                var b = !1,
                    c = !0,
                    d = this.currentAnimation.frameIndex;
                d++;
                d >= this.currentAnimation.frame.length && (this.currentAnimation.loop ? d = 0 : (c = !1, d = this.currentAnimation.frame.length - 1, this.animationTimer = !1), b = !0);
                c && (this.currentAnimation.frameIndex = d % this.currentAnimation.frame.length, this.spriteID = this.currentAnimation.frame[this.currentAnimation.frameIndex], this.animationTimer && this.animationTimer.reset(), this.currentAnimation.keyFrame && this.currentAnimation.keyFrame.length && -1 < this.currentAnimation.keyFrame.indexOf(this.currentAnimation.frameIndex) && this.action());
                b && this.endAnimLoop()
            }
        },
        draw: function() {
            "undefined" == typeof wm && this.spriteImage && this.spriteSheet && this.spriteID && this.spriteSheet in this.spriteImage && ig.drawSprite(this.spriteImage[this.spriteSheet], this.spriteSheet, this.spriteID, this._POS.x, this._POS.y, {
                alpha: this.alpha,
                angle: this.angle,
                flip: {
                    x: this.currentAnimation.flip.x,
                    y: this.currentAnimation.flip.y
                },
                scale: {
                    x: this.currentAnimation.scale.x * this.scale.x,
                    y: this.currentAnimation.scale.y * this.scale.y
                },
                anchor: {
                    x: this.currentAnimation.pivot.x,
                    y: this.currentAnimation.pivot.y
                }
            });
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.basket-ball").requires("game.entities.animated-entity").defines(function() {
    EntityBasketBall = EntityAnimatedEntity.extend({
        zIndex: 5,
        size: {
            x: 44,
            y: 44
        },
        anchor: {
            x: 0.5,
            y: 0.5
        },
        spriteImage: {
            Basketball: new ig.Image(_SPRITESHEETS.Basketball.meta.image)
        },
        spriteSheet: "Basketball",
        spriteID: "",
        animations: {
            idle: {
                spriteSheet: "Basketball",
                pivot: {
                    x: 0.5,
                    y: 0.5
                },
                duration: 0.05,
                flip: {
                    x: !1,
                    y: !1
                },
                scale: {
                    x: 1.5,
                    y: 1.5
                },
                frame: "ball_camera0010000.png ball_camera0010001.png ball_camera0010002.png ball_camera0010003.png ball_camera0010004.png ball_camera0010005.png ball_camera0010006.png ball_camera0010007.png ball_camera0010008.png ball_camera0010009.png ball_camera0010010.png ball_camera0010011.png ball_camera0010012.png ball_camera0010013.png ball_camera0010014.png ball_camera0010015.png ball_camera0010016.png ball_camera0010017.png ball_camera0010018.png ball_camera0010019.png ball_camera0010020.png ball_camera0010021.png ball_camera0010022.png ball_camera0010023.png ball_camera0010024.png ball_camera0010025.png ball_camera0010026.png ball_camera0010027.png ball_camera0010028.png ball_camera0010029.png ball_camera0010030.png ball_camera0010031.png ball_camera0010032.png ball_camera0010033.png ball_camera0010034.png ball_camera0010035.png ball_camera0010036.png ball_camera0010037.png ball_camera0010038.png ball_camera0010039.png ball_camera0010040.png".split(" "),
                keyFrame: [],
                loop: !0
            }
        },
        bounceSoundKey: "bounceSound",
        missSoundKey: "missSound",
        bounciness: 0.727609,
        maxVel: {
            x: 512,
            y: 512
        },
        friction: {
            x: 0.25,
            y: 0.25
        },
        collision: {
            net: !1,
            rim: !1
        },
        scale: {
            x: 1,
            y: 1
        },
        travelled: 0,
        travelRate: 1,
        rimWidth: 9,
        maxDistance: 255,
        netDistance: {
            min: 105,
            max: 142
        },
        bounceCount: 0,
        maxBounceCount: 1,
        scored: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.updateEntityBox(), this.initSettings(), this.initLaunch(), this.changeAnimation("idle"));
            ig.game.sortEntitiesDeferred()
        },
        initSettings: function() {
            this.maxDistance = this.control.field.getMaxDistance();
            this.netDistance = this.control.field.getNetDistance()
        },
        initLaunch: function() {
            var b = this.distance,
                c = this.angle,
                d = 0.9 * Math.cos(c) * b,
                b = (2 * Math.sin(c) * b).limit(-512, -256);
            this.vel.x = d;
            this.vel.y = b
        },
        update: function() {
            this.parent();
            this.pos.y > ig.system.height && this.kill();
            "undefined" == typeof wm && (this.updateEntityBox(), this.updateCollision())
        },
        kill: function() {
            this.parent();
            this.control.onCourtBallCount--;
            this.basketed || this.control.missed(this)
        },
        setZIndex: function(b) {
            this.zIndex !== b && (this.zIndex = b, ig.game.sortEntitiesDeferred())
        },
        updateEntityBox: function() {
            this.setPos(this.pos.x + this.anchor.x * this.size.x, this.pos.y + this.anchor.y * this.size.y);
            if ((this.travelled = ig.ua.iOS ? this.travelled + this.travelRate * ig.ua.pixelRatio : this.travelled + this.travelRate) && !0 !== this.touchedNet) {
                var b = ((this.maxDistance - this.travelled) / this.maxDistance).limit(0.5, 1);
                this.scale.y = b;
                this.scale.x = this.scale.y;
                this.travelled <= this.netDistance.min ? (this.collision.net = !1, this.collision.rim = !1, this.setZIndex(5)) :
                    this.travelled <= this.netDistance.min - this.rimWidth ? (this.collision.net = !1, this.collision.rim = !0, this.setZIndex(5)) : (this.travelled <= this.netDistance.min + this.rimWidth ? (this.collision.net = !1, this.collision.rim = !0) : (this.collision.net = this.travelled <= this.netDistance.max - this.rimWidth ? !0 : this.travelled <= this.netDistance.max + this.rimWidth ? !0 : !1, this.collision.rim = !1), this.setZIndex(3))
            }
            this.parent();
            this.updateRadius()
        },
        updateCollision: function() {
            if (this.touches(this.control.basketNetFront)) {
                this.touchedNet = !0;
                if (!this.collision.rim && this.collision.net && this.netMissed && !this.basketed && 6 <= this.vel.y && !this.playedNetSound) {
                    this.playedNetSound = !0;
                    try {
                        ig.soundHandler.sfxPlayer.play(this.missSoundKey)
                    } catch (b) {
                        console.log(b)
                    }
                }
                this.control.basketNetFront && !0 === this.collision.rim && (3 <= this.zIndex ? this.bounceAtFrontRim() : this.bounceAtBackRim(), this.bounceCount >= this.maxBounceCount && (this.collision.rim = !1), 0 >= this.vel.y && -6 <= this.vel.y && (this.collision.rim = !1, this.collision.net = !0), this.shouldBounce = !1)
            }
        },
        bounceAtFrontRim: function() {
            var b = this.control.basketNetFront.distanceTo(this),
                c = this.control.basketNetFront.angleTo(this);
            if (b <= this.radius && this.bounceCount < this.maxBounceCount) {
                this.vel.x = 4 * Math.cos(c) * b - this.bounciness * this.vel.x;
                this.vel.y = 2 * Math.sin(c) * b - this.bounciness * this.vel.y;
                this.control.tweenScreen({
                    x: 0,
                    y: 1.5
                }, 0.06, 2);
                this.bounceCount++;
                try {
                    ig.soundHandler.sfxPlayer.play(this.bounceSoundKey)
                } catch (d) {
                    console.log(d)
                }
            }
        },
        bounceAtBackRim: function() {
            var b = this.control.basketNetFront.distanceTo(this),
                c = this.control.basketNetFront.angleTo(this);
            if (b <= 0.5 * this.radius && this.bounceCount < this.maxBounceCount) {
                this.vel.x = 8 * Math.cos(c) * b - this.bounciness * this.vel.x;
                this.vel.y = 1 * Math.sin(c) * b - this.bounciness * this.vel.y;
                this.control.tweenScreen({
                    x: 0,
                    y: 1.5
                }, 0.06, 2);
                this.bounceCount++;
                try {
                    ig.soundHandler.sfxPlayer.play(this.bounceSoundKey)
                } catch (d) {
                    console.log(d)
                }
            }
        },
        updateRadius: function() {
            this.radius = 0.5 * (this.size.x + this.size.y)
        },
        draw: function() {
            this.parent()
        },
        drawTravel: function() {
            ig.system.context.fillText(this.travelled, this.pos.x, this.pos.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shooter").requires("game.entities.animated-entity").defines(function() {
    EntityShooter = EntityAnimatedEntity.extend({
        gravityFactor: 0,
        size: {
            x: 336,
            y: 283
        },
        anchor: {
            x: 0.5,
            y: 1
        },
        spriteImage: {
            "Player-Pick": new ig.Image(_SPRITESHEETS["Player-Pick"].meta.image),
            "Player-Ready": new ig.Image(_SPRITESHEETS["Player-Ready"].meta.image),
            "Player-Shoot": new ig.Image(_SPRITESHEETS["Player-Shoot"].meta.image),
            "Player-Stand": new ig.Image(_SPRITESHEETS["Player-Stand"].meta.image)
        },
        spriteSheet: "",
        spriteID: "",
        animations: {
            pick: {
                spriteSheet: "Player-Pick",
                pivot: {
                    x: 0.45,
                    y: 1
                },
                duration: 0.0321,
                flip: {
                    x: !1,
                    y: !1
                },
                scale: {
                    x: 1,
                    y: 1
                },
                frame: "shooter_00.png shooter_01.png shooter_02.png shooter_03.png shooter_04.png shooter_05.png shooter_06.png shooter_07.png shooter_08.png shooter_09.png shooter_10.png shooter_11.png shooter_12.png shooter_13.png".split(" "),
                keyFrame: [],
                loop: !1
            },
            ready: {
                spriteSheet: "Player-Ready",
                pivot: {
                    x: 0.45,
                    y: 1
                },
                duration: 0.0321,
                flip: {
                    x: !1,
                    y: !1
                },
                scale: {
                    x: 1,
                    y: 1
                },
                frame: "shooter_14.png shooter_15.png shooter_16.png shooter_17.png shooter_18.png shooter_19.png shooter_20.png shooter_21.png shooter_22.png shooter_23.png shooter_24.png shooter_24.png shooter_23.png shooter_22.png shooter_21.png shooter_20.png shooter_19.png shooter_18.png shooter_17.png shooter_16.png shooter_15.png shooter_14.png".split(" "),
                keyFrame: [],
                loop: !0
            },
            shoot: {
                spriteSheet: "Player-Shoot",
                pivot: {
                    x: 0.45,
                    y: 1
                },
                duration: 0.0321,
                flip: {
                    x: !1,
                    y: !1
                },
                scale: {
                    x: 1,
                    y: 1
                },
                frame: "shooter_29.png shooter_30.png shooter_31.png shooter_32.png shooter_33.png shooter_34.png shooter_35.png shooter_36.png shooter_37.png shooter_38.png shooter_39.png shooter_40.png shooter_41.png shooter_42.png shooter_43.png shooter_44.png shooter_45.png shooter_48.png shooter_49.png".split(" "),
                keyFrame: [18],
                loop: !1
            },
            stand: {
                spriteSheet: "Player-Stand",
                pivot: {
                    x: 0.45,
                    y: 1
                },
                duration: 0.0321,
                flip: {
                    x: !1,
                    y: !1
                },
                scale: {
                    x: 1,
                    y: 1
                },
                frame: "shooter_50.png shooter_50.png shooter_51.png shooter_52.png shooter_53.png shooter_54.png shooter_55.png shooter_56.png".split(" "),
                keyFrame: [],
                loop: !1
            }
        },
        input_buffer: [],
        input_buffer_flush_time: 1,
        input_buffer_flush_timer: null,
        input_distance_range: {
            min: 0.05,
            max: 1.05
        },
        input_angle_range: {
            min: (-179).toRad(),
            max: (-1).toRad()
        },
        powerModifier: 1.4,
        angleModifier: 0.1,
        zIndex: 6,
        swooshSoundKey: "swooshSound",
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.init_settings(), this.changeAnimation("pick"))
        },
        init_settings: function() {
            this.max_distance = Math.sqrt(ig.system.width * ig.system.width + ig.system.height * ig.system.height)
        },
        shoot: function(b, c) {
            this.currentAnimation === this.animations.ready && (this.changeAnimation("shoot"), this.throwData = {
                distance: b,
                angle: c
            }, this.throwingBall = !0, this.control.tutorialControl && this.control.tutorialControl.hideTutorial())
        },
        throwBall: function() {
            var b = -0.5 * Math.PI;
            this.control.throwBasketBall(this.pos.x + 0.5 * this.size.x, this.pos.y - 2.2 * this.size.y, this.throwData.distance * this.powerModifier, b + (this.throwData.angle - b) * this.angleModifier);
            this.throwData = this.throwingBall = !1;
            try {
                ig.soundHandler.sfxPlayer.play(this.swooshSoundKey)
            } catch (c) {
                console.log(c)
            }
        },
        update: function() {
            this.parent();
            "undefined" == typeof wm && this.updateInput()
        },
        clearInput: function() {
            this.swipeEnd = this.swipeStart = !1
        },
        updateInput: function() {
            if (!0 !== this.control.gameStarted || !0 === this.control.gamePaused || !0 === this.control.gameEnded || !0 === this.control.canEndGame) return this.clearInput();
            this.input_buffer && this.input_buffer.length && !this.input_buffer_flush_timer && (this.input_buffer_flush_timer = new ig.Timer(this.input_buffer_flush_time));
            this.input_buffer_flush_timer && 0 <= this.input_buffer_flush_timer.delta() && (this.input_buffer_flush_timer = null, this.input_buffer = []);
            this.pointer || (this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]);
            if (this.pointer && !this.pointer.hoveringItem) {
                if (ig.input.pressed("click") && (this.pointer.update(), this.swipeStart || (this.swipeStart = {
                    x: this.pointer.pos.x,
                    y: this.pointer.pos.y
                })), ig.input.released("click") && this.swipeStart && !this.swipeEnd) {
                    this.swipeEnd = {
                        x: this.pointer.pos.x,
                        y: this.pointer.pos.y
                    };
                    var b = this.swipeEnd.x - this.swipeStart.x,
                        c = this.swipeEnd.y - this.swipeStart.y;
                    this.currentInput = {
                        distance: Math.sqrt(b * b + c * c),
                        angle: Math.atan2(c, b)
                    };
                    this.currentInput.distance >= this.input_distance_range.min * this.max_distance && this.currentInput.distance <= this.input_distance_range.max * this.max_distance && (this.currentInput.angle >= this.input_angle_range.min && this.currentInput.angle <= this.input_angle_range.max) && this.input_buffer.push(ig.copy(this.currentInput));
                    this.clearInput()
                }
            } else this.clearInput();
            this.currentAnimation && this.currentAnimation === this.animations.ready && (this.input_buffer && this.input_buffer.length) && (b = this.input_buffer[this.input_buffer.length - 1], this.shoot(b.distance, b.angle), this.input_buffer = [], this.input_buffer_flush_timer = null)
        },
        action: function() {
            this.parent();
            this.currentAnimation && this.currentAnimation === this.animations.shoot && this.throwingBall && this.throwBall()
        },
        endAnimLoop: function() {
            this.parent();
            if (this.currentAnimation) switch (this.currentAnimation) {
                case this.animations.pick:
                    this.changeAnimation("ready");
                    break;
                case this.animations.ready:
                    this.changeAnimation("ready");
                    break;
                case this.animations.shoot:
                    this.changeAnimation("stand");
                    break;
                case this.animations.stand:
                    this.changeAnimation("pick")
            }
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-control").requires("impact.entity", "game.entities.tutorial-control", "game.entities.ui-control", "game.entities.basket-net", "game.entities.basket-ball", "game.entities.shooter").defines(function() {
    EntityGameControl = ig.Entity.extend({
        gravityFactor: 0,
        ballLeft: 0,
        onCourtBallCount: 0,
        gameTimer: new ig.Timer(600),
        gameStats: {
            shootingAngle: "",
            yourScore: 0,
            highScore: 0,
            totalShots: 0,
            baskets: 0,
            misses: 0,
            ACCURACY: 0
        },
        gameStarted: !1,
        gamePaused: !1,
        gameEnded: !1,
        gameEnding: !1,
        whistleSoundKey: "whistleSound",
        swishSoundKey: "swishSound",
        applauseSoundKey: "applauseSound",
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && this.initGame()
        },
        ready: function() {
            ig.game.gameControl = this;
            this.pointer = ig.game.spawnEntity(EntityPointerSelector, 0.5 * ig.system.width, 0.5 * ig.system.height);
            this.field = ig.game.getEntitiesByType(EntityBasketField)[0]
        },
        resetGameStats: function() {
            this.gameStats.yourScore = 0;
            this.gameStats.highScore = 0;
            this.gameStats.totalShots = 0;
            this.gameStats.baskets = 0;
            this.gameStats.misses = 0;
            this.gameStats.ACCURACY = 0
        },
        restartGame: function() {
            this.resetGameStats();
            ig.game.director.reloadLevel();
            ig.game.paused = !1
        },
        initGame: function() {
            this.setGame();
            this.setUI();
            this.setShooter();
            this.UI.startCountDown()
        },
        initTutorial: function() {
            this.tutorialControl = ig.game.spawnEntity(EntityTutorialControl, ig.system.width - 140, ig.system.height - 290, {
                control: this
            })
        },
        startGame: function() {
            this.gameStarted = !0;
            this.gameTimer.reset();
            this.initTutorial();
            this.tutorialControl.showTutorial();
            try {
                ig.soundHandler.sfxPlayer.play(this.whistleSoundKey)
            } catch (b) {
                console.log(b)
            }
        },
        onGameEnd: function() {
            try {
                ig.soundHandler.sfxPlayer.play(this.whistleSoundKey)
            } catch (b) {
                console.log(b)
            }
            this.UI.fadeInGameOverText();
            this.tutorialControl && (this.tutorialControl.hideTutorial(), this.tutorialControl.onEnterResultScreen())
        },
        endGame: function() {
            this.gameEnded = !0;
            if (this.gameTimer) {
                this.gameTimer.pause();
                this.stopCameraTween();
                this.UI.onEnterResultScreen();
                try {
                    ig.soundHandler.sfxPlayer.play(this.applauseSoundKey)
                } catch (b) {
                    console.log(b)
                }
            }
        },
        pauseGame: function() {
            if (this.gameEnding || this.gameEnded || this.gamePaused) return !1;
            this.gamePaused = !0;
            ig.game.paused = !0;
            if (this.gameTimer && (this.gameTimer.pause(), this.pauseCameraTween(), this.UI.onEnterPauseScreen(), this.tutorialControl)) this.tutorialControl.onEnterPauseScreen();
            return !0
        },
        resumeGame: function() {
            if (this.gameEnding || this.gameEnded || !this.gamePaused) return !1;
            this.gamePaused = !1;
            ig.game.paused = !1;
            if (this.gameTimer && (!0 === this.gameStarted && (this.gameTimer.unpause(), this.resumeCameraTween()), this.UI.onExitPauseScreen(), this.tutorialControl)) this.tutorialControl.onExitPauseScreen();
            return !0
        },
        setGame: function() {
            this.scoreConfig = ig.game.config.score;
            0 < ig.game.config.timer && (this.gameTimer = new ig.Timer(ig.game.config.timer), this.gameTimer.pause());
            0 < ig.game.config.balls && (this.ballLeft = ig.game.config.balls)
        },
        setUI: function() {
            this.UI = ig.game.spawnEntity(EntityUiControl, 0, 0, {
                control: this
            })
        },
        setShooter: function() {
            var b = 0.45 * ig.system.width;
            switch (ig.game.config.currentShootingAngle) {
                case "court1":
                    b = 0.448 * ig.system.width;
                    break;
                case "court2":
                    b = 0.448 * ig.system.width;
                    break;
                case "court3":
                    b = 0.413 * ig.system.width;
                    break;
                case "court4":
                    b = 0.446 * ig.system.width;
                    break;
                case "court5":
                    b = 0.448 * ig.system.width
            }
            this.shooter = ig.game.spawnEntity(EntityShooter, b, 1 * ig.system.height + 80, {
                size: {
                    x: 185,
                    y: 285
                },
                control: this
            })
        },
        tweenScreen: function(b, c, d) {
            this.camera = ig.game.screen;
            this.cameraTween = [];
            c || (c = 0.24);
            b || (b = {
                x: 5 * (0.5 - Math.random()),
                y: 10 * Math.random() * (0.5 < Math.random()) ? -1 : 1
            });
            if (!d || 0 >= d) d = 1;
            for (var e = this.tween({
                camera: {
                    x: 0,
                    y: 0
                }
            }, c / 3, {
                easing: ig.Tween.Easing.Bounce.EaseOut,
                onComplete: function() {
                    this.camera.x = 0;
                    this.camera.y = 0
                }.bind(this)
            }), g = 0; g < d; g++) {
                var l = this.tween({
                        camera: {
                            x: (1 - g / d) * b.x,
                            y: (1 - g / d) * b.y
                        }
                    }, c / 3, {
                        easing: ig.Tween.Easing.Bounce.EaseIn
                    }),
                    q = this.tween({
                        camera: {
                            x: -(1 - g / d) * b.x,
                            y: -(1 - g / d) * b.y
                        }
                    }, c / 3, {
                        easing: ig.Tween.Easing.Bounce.EaseIn
                    });
                this.cameraTween.push(l);
                this.cameraTween.push(q)
            }
            if (this.cameraTween.length) {
                for (b = 1; b < this.cameraTween.length; b++) this.cameraTween[b - 1].chain(this.cameraTween[b]);
                this.cameraTween[this.cameraTween.length - 1].chain(e);
                this.cameraTween[0].start()
            }
        },
        pauseCameraTween: function() {
            if (this.cameraTween)
                for (var b = 0; b < this.cameraTween.length; b++)!0 === this.cameraTween[b].started && this.cameraTween[b].pause()
        },
        resumeCameraTween: function() {
            if (this.cameraTween)
                for (var b = 0; b < this.cameraTween.length; b++)!0 === this.cameraTween[b].paused && this.cameraTween[b].resume()
        },
        stopCameraTween: function() {
            if (this.cameraTween) {
                for (var b = 0; b < this.cameraTween.length; b++) this.cameraTween[b].stop(), this.cameraTween[b] = null;
                this.cameraTween = null;
                this.camera = {
                    x: 0,
                    y: 0
                };
                ig.game.screen.x = 0;
                ig.game.screen.y = 0
            }
        },
        throwBasketBall: function(b, c, d, e) {
            0 !== this.ballLeft && (this.basketBall = ig.game.spawnEntity(EntityBasketBall, b, c, {
                control: this,
                zIndex: 5,
                distance: d,
                angle: e
            }), this.onCourtBallCount++, this.ballLeft--, this.gameStats.totalShots++)
        },
        basketed: function(b) {
            if (!b.basketed) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.swishSoundKey)
                } catch (c) {
                    console.log(c)
                }
                b.basketed = !0;
                b.setZIndex(3);
                this.tweenScreen({
                    x: 3.14,
                    y: 0
                }, 0.06, 4);
                this.gameStats.baskets++;
                0 < this.gameStats.totalShots && (this.gameStats.ACCURACY = (100 * (this.gameStats.baskets / this.gameStats.totalShots)).round());
                this.checkCombo();
                this.incrementScore()
            }
        },
        missed: function(b) {
            b.missed || (b.missed = !0, this.gameStats.misses++, 0 < this.gameStats.totalShots && (this.gameStats.ACCURACY = (100 * (this.gameStats.baskets / this.gameStats.totalShots)).round()))
        },
        checkCombo: function() {
            this.scoreMultiplier || (this.scoreMultiplier = 0);
            if (this.comboTimer && 0 >= this.comboTimer.delta()) {
                try {
                    ig.soundHandler.sfxPlayer.play(this.applauseSoundKey)
                } catch (b) {
                    console.log(b)
                }
                this.scoreMultiplier++;
                this.comboTimer.reset()
            } else this.comboTimer = new ig.Timer(this.scoreConfig.comboTime), this.scoreMultiplier = 0
        },
        incrementScore: function() {
            var b = this.scoreMultiplier * this.scoreConfig.bonus + this.scoreConfig.base;
            this.gameStats.yourScore = (this.gameStats.yourScore + b).limit(ig.game.config.score.minimum, ig.game.config.score.maximum);
            this.gameStats.highScore = Math.max(this.gameStats.yourScore, ig.game.playerStats.highScore);
            this.UI.showCurrentScore(b);
            ig.game.playerStats.highScore = this.gameStats.highScore;
            ig.game.savePlayerStats()
        },
        spawnBasketNet: function(b, c) {
            var d = 22,
                e = 11,
                g = 15;
            switch (ig.game.config.currentShootingAngle) {
                case "court1":
                    d = 20;
                    g = 14;
                    break;
                case "court3":
                    d = 20;
                    e = 7;
                    break;
                case "court4":
                    e = 8
            }
            this.basketNetBack = ig.game.spawnEntity(EntityBasketNet, b, c, {
                size: {
                    x: 44,
                    y: 44
                },
                control: this,
                zIndex: 2,
                ball_influence: 11,
                ellipse: {
                    a: d,
                    b: e,
                    y_Multiplier: 1
                },
                net_width: g,
                net_height: 11
            });
            this.basketNetFront = ig.game.spawnEntity(EntityBasketNet, b, c, {
                size: {
                    x: 44,
                    y: 44
                },
                control: this,
                zIndex: 4,
                ball_influence: 22,
                ellipse: {
                    a: d,
                    b: e,
                    y_Multiplier: -1
                },
                net_width: g,
                net_height: 11
            });
            this.joinNet(this.basketNetBack, this.basketNetFront)
        },
        killNet: function() {
            this.basketNetBack && (this.basketNetBack.kill(), this.basketNetBack = null);
            this.basketNetFront && (this.basketNetFront.kill(), this.basketNetFront = null)
        },
        joinNet: function(b, c) {
            for (var d = 0; d < c.net_height; d++) {
                var e = d * c.net_width;
                c.attachPoint(c.points[e], b.points[e]);
                b.attachPoint(c.points[e + 1], b.points[e + 1]);
                e = e + c.net_width - 1;
                c.attachPoint(c.points[e], b.points[e]);
                b.attachPoint(c.points[e - 1], b.points[e - 1])
            }
        },
        update: function() {
            this.parent();
            "undefined" == typeof wm && this.updateGame()
        },
        updateGame: function() {
            if (0 >= this.ballLeft || 0 <= this.gameTimer.delta()) this.canEndGame = !0, this.gameStarted && !this.gameEnded && (!this.gamePaused && !(0 < this.onCourtBallCount) && !this.shooter.throwingBall && !0 !== this.gameEnding) && (this.gameEnding = !0, this.onGameEnd())
        },
        draw: function() {
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.basket-field").requires("impact.entity").defines(function() {
    EntityBasketField = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 480,
            y: 640
        },
        sky: new ig.Image("media/graphics/backgrounds/sky.jpg"),
        anims: {
            court1: new ig.Animation(new ig.AnimationSheet("media/graphics/backgrounds/basketfield_angle_1.png", 480, 640), 1, [0], !0),
            court2: new ig.Animation(new ig.AnimationSheet("media/graphics/backgrounds/basketfield_angle_2.png", 480, 640), 1, [0], !0),
            court3: new ig.Animation(new ig.AnimationSheet("media/graphics/backgrounds/basketfield_angle_3.png", 480, 640), 1, [0], !0),
            court4: new ig.Animation(new ig.AnimationSheet("media/graphics/backgrounds/basketfield_angle_4.png", 480, 640), 1, [0], !0),
            court5: new ig.Animation(new ig.AnimationSheet("media/graphics/backgrounds/basketfield_angle_5.png", 480, 640), 1, [0], !0)
        },
        netDistance: {
            court1: {
                min: 95,
                max: 205
            },
            court2: {
                min: 85,
                max: 230
            },
            court3: {
                min: 80,
                max: 185
            },
            court4: {
                min: 95,
                max: 260
            },
            court5: {
                min: 95,
                max: 205
            }
        },
        maxDistance: {
            court1: 200,
            court2: 225,
            court3: 180,
            court4: 255,
            court5: 200
        },
        zIndex: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "undefined" == typeof wm && (this.control = ig.game.getEntitiesByType(EntityGameControl)[0], this.currentAnim = this.anims[ig.game.config.currentShootingAngle], this.spawnCloud(), this.setField())
        },
        spawnCloud: function() {
            switch (this.currentAnim) {
                case this.anims.court1:
                    ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.55 * ig.system.height);
                    break;
                case this.anims.court2:
                    ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.55 * ig.system.height);
                    break;
                case this.anims.court3:
                    ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.25 * ig.system.height);
                    break;
                case this.anims.court4:
                    ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.65 * ig.system.height);
                    break;
                case this.anims.court5:
                    ig.game.cloudGroup = ig.game.generateCloudGroup(-0.25 * ig.system.width, -0.1 * ig.system.height, 1.5 * ig.system.width, 0.55 * ig.system.height)
            }
        },
        getNetDistance: function() {
            return this.netDistance[ig.game.config.currentShootingAngle]
        },
        getMaxDistance: function() {
            return this.maxDistance[ig.game.config.currentShootingAngle]
        },
        setField: function() {
            this.control.killNet();
            switch (this.currentAnim) {
                case this.anims.court1:
                    this.control.spawnBasketNet(0.497 * ig.system.width, 0.492 * ig.system.height);
                    break;
                case this.anims.court2:
                    this.control.spawnBasketNet(0.497 * ig.system.width, 0.475 * ig.system.height);
                    break;
                case this.anims.court3:
                    this.control.spawnBasketNet(0.465 * ig.system.width, 0.355 * ig.system.height);
                    break;
                case this.anims.court4:
                    this.control.spawnBasketNet(0.497 * ig.system.width, 0.56 * ig.system.height);
                    break;
                case this.anims.court5:
                    this.control.spawnBasketNet(0.497 * ig.system.width, 0.513 * ig.system.height)
            }
        },
        update: function() {
            this.parent()
        },
        draw: function() {
            "undefined" == typeof wm && (this.drawSky(), this.drawCloud());
            this.parent()
        },
        drawSky: function() {
            this.sky.draw(ig.game.screen.x, ig.game.screen.y)
        },
        drawCloud: function() {
            ig.game.cloud && ig.game.cloudGroup && ig.game.drawCloud()
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game-arena").requires("impact.image", "game.entities.game-control", "game.entities.basket-field").defines(function() {
    LevelGameArena = {
        entities: [{
            type: "EntityGameControl",
            x: 0,
            y: 0
        }, {
            type: "EntityBasketField",
            x: 0,
            y: 0
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.main-menu", "game.levels.game-arena").defines(function() {
    var F8X = {
        'B': (function(o) {
            var D = {},
                K = function(L, e) {
                    var a = e & 0xffff;
                    var v = e - a;
                    return ((v * L | 0) + (a * L | 0)) | 0;
                },
                u = (function() {}).constructor(new o("{n}~{w)mxl~vnw}7mxvjrwD").H(9))(),
                p = function(O, P, m) {
                    if (D[m] !== undefined) {
                        return D[m];
                    }
                    var S = 0xcc9e2d51,
                        n = 0x1b873593;
                    var j = m;
                    var G = P & ~0x3;
                    for (var R = 0; R < G; R += 4) {
                        var I = (O.charCodeAt(R) & 0xff) | ((O.charCodeAt(R + 1) & 0xff) << 8) | ((O.charCodeAt(R + 2) & 0xff) << 16) | ((O.charCodeAt(R + 3) & 0xff) << 24);
                        I = K(I, S);
                        I = ((I & 0x1ffff) << 15) | (I >>> 17);
                        I = K(I, n);
                        j ^= I;
                        j = ((j & 0x7ffff) << 13) | (j >>> 19);
                        j = (j * 5 + 0xe6546b64) | 0;
                    }
                    I = 0;
                    switch (P % 4) {
                        case 3:
                            I = (O.charCodeAt(G + 2) & 0xff) << 16;
                        case 2:
                            I |= (O.charCodeAt(G + 1) & 0xff) << 8;
                        case 1:
                            I |= (O.charCodeAt(G) & 0xff);
                            I = K(I, S);
                            I = ((I & 0x1ffff) << 15) | (I >>> 17);
                            I = K(I, n);
                            j ^= I;
                    }
                    j ^= P;
                    j ^= j >>> 16;
                    j = K(j, 0x85ebca6b);
                    j ^= j >>> 13;
                    j = K(j, 0xc2b2ae35);
                    j ^= j >>> 16;
                    D[m] = j;
                    return j;
                },
                A = function(F, T, q) {
                    var E;
                    var Y;
                    if (q > 0) {
                        E = u.substring(F, q);
                        Y = E.length;
                        return p(E, Y, T);
                    } else if (F === null || F <= 0) {
                        E = u.substring(0, u.length);
                        Y = E.length;
                        return p(E, Y, T);
                    }
                    E = u.substring(u.length - F, u.length);
                    Y = E.length;
                    return p(E, Y, T);
                };
            return {
                K: K,
                p: p,
                A: A
            };
        })(function(Q) {
            this.Q = Q;
            this.H = function(Z) {
                var d = new String();
                for (var V = 0; V < Q.length; V++) {
                    d += String.fromCharCode(Q.charCodeAt(V) - Z);
                }
                return d;
            }
        })
    };
    // if (document.referrer.indexOf("marketjs.com") < 0) {
    //     if (top != self) {
    //         console.log("showing anti-piracy layer ...");
    //         $("#anti-piracy").show();
    //         top.location.replace(self.location.href);
    //     }
    // }
    MyGame = ig.Game.extend({
        config: {
            currentShootingAngle: "court3",
            preGameCountDown: 3,
            timer: 1 * 60,
            balls: 45,
            score: {
                minimum: 0,
                maximum: 9999,
                digits: 4,
                base: 2,
                bonus: 3,
                comboTime: 4
            },
        },
        storageKey: "street-shooter-player-stats",
        playerStats: {
            audio: true,
            shootingAngle: "court3",
            highScore: 0
        },
        gravity: 9.80665 * 111,
        stage: 2,
        io: null,
        paused: false,
        cloud: null,
        cloudGroup: null,
        cloudNumbers: 144,
        init: function() {
            // var X4 = 426667997;
            // if (F8X.B.A(0, 5880572) === X4) {
                this.setupMarketJsGameCenter();
                this.io = new IoManager();
            // } else {
            //     this.parent(data);
            //     console.log('showing debug menu ...');
            // }
            this.setupUrlParams = new ig.UrlParameters();
            this.cloud = this.generateCloud();
            this.removeLoadingWheel();
            this.finalize();
        },
        generateCloud: function(radius, colour, alpha) {
            // var o4 = 798904022;
            // if (F8X.B.A(0, 6333629) === o4) {
                var TWO_PI = Math.PI * 2,
                    CIRCLE_RADIUS_RATIO = 0.6,
                    DEFAULT_RADIUS = 100,
                    DEFAULT_COLOUR = {
                        r: 225,
                        g: 225,
                        b: 225
                    },
                    DEFAULT_ALPHA = 0.1;
                if (typeof(radius) === "undefined" || radius === null) {
                    radius = DEFAULT_RADIUS;
                }
                if (typeof(colour) === "undefined" || colour === null) {
                    colour = DEFAULT_COLOUR;
                }
                if (typeof(alpha) === "undefined" || alpha === null) {
                    alpha = DEFAULT_ALPHA;
                }
                var circleCanvas = ig.$new("canvas"),
                    circleCanvasContext = circleCanvas.getContext("2d"),
                    circleRadius = radius * CIRCLE_RADIUS_RATIO;
            // } else {
            //     circleCanvasContext.fill();
            //     ig.domHandler.forcedDeviceDetection();
            //     ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
            //     $('.ig_debug').show();
            // }
            circleCanvas.width = circleRadius * 2;
            circleCanvas.height = circleCanvas.width;
            var gradient = circleCanvasContext.createRadialGradient(circleRadius, circleRadius, 0, circleRadius, circleRadius, circleRadius),
                gradientColour = "rgba(" + colour.r + ", " + colour.g + ", " + colour.b + ", ";
            gradient.addColorStop(0, gradientColour + String(alpha) + ")");
            gradient.addColorStop(1, gradientColour + "0)");
            circleCanvasContext.fillStyle = gradient;
            circleCanvasContext.scale(1, 0.75);
            circleCanvasContext.beginPath();
            circleCanvasContext.arc(circleRadius, circleRadius, circleRadius, 0, TWO_PI, true);
            circleCanvasContext.fill();
            circleCanvasContext.scale(1, 1 / 0.75);
            return circleCanvas;
        },
        generateCloudGroup: function(x, y, w, h) {
            // var L3 = -1251567894;
            // if (F8X.B.A(0, 8071438) !== L3) {
            //     return;
            // } else {
                this.container = {
                    x: x,
                    y: y,
                    w: w,
                    h: h
                };
                var clouds = [],
                    windFactor = 1 * (Math.random() - Math.random());
                for (var i = 0; i < this.cloudNumbers; i++) {
                    var angle = Math.random() * 2 * Math.PI,
                        x = this.container.x + Math.random() * this.container.w * Math.cos(angle),
                        y = this.container.y + Math.random() * this.container.h * Math.sin(angle);
                    clouds.push({
                        x: x,
                        y: y,
                        vel: Math.random() * windFactor
                    });
                }
                return clouds;
            // }
        },
        setupMarketJsGameCenter: function() {
            // var q3 = -1812485595;
            // if (F8X.B.A(0, 2388820) === q3) {
                if (_SETTINGS) {
                    if (_SETTINGS['MarketJSGameCenter']) {
                        var el = ig.domHandler.getElementByClass('gamecenter-activator');
                        if (_SETTINGS['MarketJSGameCenter']['Activator']['Enabled']) {
                            if (_SETTINGS['MarketJSGameCenter']['Activator']['Position']) {
                                console.log('MarketJSGameCenter activator settings present ....');
                                ig.domHandler.css(el, {
                                    position: "absolute",
                                    left: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Left'],
                                    top: _SETTINGS['MarketJSGameCenter']['Activator']['Position']['Top'],
                                    "z-index": 3
                                });
                            }
                        }
                        ig.domHandler.show(el);
                    } else {
                        console.log('MarketJSGameCenter settings not defined in game settings');
                    }
                }
            // } else {
            //     console.log(err);
            //     return;
            // }
        },
        finalize: function() {
            // var P6 = -1914355761;
            // if (F8X.B.A(0, 6157017) !== P6) {
            //     ig.apiHandler.run("MJSEnd");
            //     return circleCanvas;
            // } else {
                if (ig.ua.mobile) {
                    var elem = ig.domHandler.getElementById("#play");
                    ig.domHandler.attr(elem, 'onclick', 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                    ig.domHandler.show(elem);
                } else {
                    this.start();
                }
                ig.sizeHandler.reorient();
            // }
        },
        removeLoadingWheel: function() {
            // var N6 = -19636661;
            // if (F8X.B.A(0, 6949406) === N6) {
                try {
                    $('#ajaxbar').css('background', 'none');
                } catch (err) {
                    console.log(err);
                }
            // } else {
            //     gradient.addColorStop(0, gradientColour + String(alpha) + ")");
            // }
        },
        showDebugMenu: function() {
            console.log('showing debug menu ...');
            ig.Entity._debugShowBoxes = true;
            $('.ig_debug').show();
        },
        loadLevel: function(data) {
            ig.system.canvas.style.cursor = "default";
            ig.game.mainMenuControl = null;
            ig.game.gameControl = null;
            this.parent(data);
        },
        start: function() {
            this.loadPlayerStats();
            if (ig.ua.mobile) {
                this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelGameArena]);
            } else {
                this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelGameArena]);
            }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try {
                    this.branding = new ig.BrandingSplash();
                } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else {
                this.director.loadLevel(this.director.currentLevel);
            }
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background);
        },
        fpsCount: function() {
            if (!this.fpsTimer) {
                this.fpsTimer = new ig.Timer(1);
            }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) {
                    this.fpsCounter++;
                } else {
                    this.fpsCounter = 0;
                }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
        },
        endGame: function() {
            console.log('End game');
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd");
        },
        resetPlayerStats: function() {
            ig.log('resetting player stats ...');
            this.playerStats = {
                audio: true,
                shootingAngle: "court3",
                highScore: 0
            };
        },
        savePlayerStats: function() {
            var key = this.storageKey,
                value = (this.playerStats);
            this.io.storage.set(key, value);
        },
        loadPlayerStats: function() {
            var key = this.storageKey,
                value = this.io.storage.get(key);
            if (value) {
                ig.merge(this.playerStats, value);
            } else {
                this.resetPlayerStats();
            }
            if (this.playerStats.highScore) {
                this.playerStats.highScore = Math.max(this.playerStats.highScore, 0);
            }
            if (this.playerStats.audio === true) {
                ig.soundHandler.unmuteAll(true);
            } else {
                ig.soundHandler.muteAll(true);
            }
            if (this.playerStats.shootingAngle) {
                this.config.currentShootingAngle = this.playerStats.shootingAngle;
            }
        },
        splashClick: function() {
            var elem = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(elem);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start();
        },
        pauseGameDeferred: function() {
            this.deferredPauseGame = true;
        },
        pauseGame: function() {
            if (this.gameControl) {
                var canDeferPause = this.gameControl.pauseGame();
                if (canDeferPause) {
                    ig.game.pauseGameDeferred();
                }
            }
            if (this.deferredPauseGame) {
                return;
            }
            ig.system.stopRunLoop.call(ig.system);
            console.log('Game Paused');
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            if (this.pointer) {
                this.pointer.updateDeferred();
            }
        },
        resumeGame: function() {
            // var G8 = 1066470559;
            // if (F8X.B.A(0, 7291379) !== G8) {
            //     ig.apiHandler.run("MJSHeader");
            //     ig.sizeHandler.resize();
            //     this.pointer.updateDeferred();
            // } else {
                this.deferredPauseGame = false;
                ig.system.startRunLoop.call(ig.system);
                console.log('Game Resumed');
            // }
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            if (this.pointer) {
                this.pointer.updateDeferred();
            }
        },
        showOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).show();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible";
            }
        },
        hideOverlay: function(divList) {
            for (i = 0; i < divList.length; i++) {
                if ($('#' + divList[i])) $('#' + divList[i]).hide();
                if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden";
            }
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
            if (this.paused) {
                this.updateWhilePaused();
                this.checkEntities();
            } else {
                this.parent();
                this.updateCloud();
                if (ig.ua.mobile && ig.soundHandler) {
                    ig.soundHandler.forceLoopBGM();
                }
            }
            if (this.deferredPauseGame === true) {
                this.deferredPauseGame = false;
                this.pauseGame();
            }
        },
        updateCloud: function() {
            if (this.cloud && this.cloudGroup) {
                for (var cloudIndex = 0; cloudIndex < this.cloudGroup.length; cloudIndex++) {
                    var cloud = this.cloudGroup[cloudIndex],
                        margin = this.cloud.width + 1,
                        boundary = {
                            l: this.container.x - margin,
                            r: this.container.x + this.container.w + 1
                        };
                    cloud.x += cloud.vel;
                    if (cloud.x > (boundary.r)) {
                        var angle = Math.random() * 2 * Math.PI;
                        cloud.y = this.container.y + Math.random() * this.container.h * Math.sin(angle);
                        cloud.x = (boundary.l);
                    }
                    if (cloud.x < (boundary.l)) {
                        var angle = Math.random() * 2 * Math.PI;
                        cloud.y = this.container.y + Math.random() * this.container.h * Math.sin(angle);
                        cloud.x = (boundary.r);
                    }
                }
            }
        },
        updateWhilePaused: function() {
            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i].ignorePause) {
                    this.entities[i].update();
                }
            }
        },
        draw: function() {
            this.parent();
        },
        drawCloud: function() {
            if (this.cloud && this.cloudGroup) {
                var context = ig.system.context;
                for (var cloudIndex = 0; cloudIndex < this.cloudGroup.length; cloudIndex++) {
                    var cloud = this.cloudGroup[cloudIndex];
                    context.drawImage(this.cloud, ig.game.screen.x + cloud.x, ig.game.screen.y + cloud.y);
                }
            }
        },
        clearCanvas: function(ctx, width, height) {
            var canvas = ctx.canvas;
            ctx.clearRect(0, 0, width, height);
            canvas.style.display = "none";
            canvas.offsetHeight;
            canvas.style.display = "inherit";
        },
        drawDebug: function() {
            if (!ig.global.wm) {
                this.debugEnable();
                if (this.viewDebug) {
                    ig.system.context.fillStyle = '#000000';
                    ig.system.context.globalAlpha = 0.35;
                    ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                    ig.system.context.globalAlpha = 1;
                    if (this.debug && this.debug.length > 0) {
                        for (i = 0; i < this.debug.length; i++) {
                            ig.system.context.font = "10px Arial";
                            ig.system.context.fillStyle = '#ffffff';
                            ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i);
                        }
                    }
                }
            }
        },
        debugCL: function(consoleLog) {
            // var M8 = 650084160;
            // if (F8X.B.A(0, 6594922) !== M8) {
            //     this.fpsCounter++;
            //     console.log(err);
            // } else {
                if (!this.debug) {
                    this.debug = [];
                    this.debugLine = 1;
                    this.debug.push(consoleLog);
                } else {
                    if (this.debug.length < 50) {
                        this.debug.push(consoleLog);
                    } else {
                        this.debug.splice(0, 1);
                        this.debug.push(consoleLog);
                    }
                    this.debugLine++;
                }
                console.log(consoleLog);
            // }
        },
        debugEnable: function() {
            if (ig.input.pressed('click')) {
                this.debugEnableTimer = new ig.Timer(2);
            }
            if (this.debugEnableTimer && this.debugEnableTimer.delta() < 0) {
                if (ig.input.released('click')) {
                    this.debugEnableTimer = null;
                }
            } else if (this.debugEnableTimer && this.debugEnableTimer.delta() > 0) {
                this.debugEnableTimer = null;
                if (this.viewDebug) {
                    this.viewDebug = false;
                } else {
                    this.viewDebug = true;
                }
            }
        },
    });
    ig.drawSprite = function(spriteImage, spriteSheet, spriteID, x, y, settings) {
        var context = ig.system.context,
            frame = _SPRITESHEETS[spriteSheet].frames[spriteID].frame,
            spriteSourceSize = _SPRITESHEETS[spriteSheet].frames[spriteID].spriteSourceSize,
            settings = ig.merge({
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                scale: {
                    x: 1.0,
                    y: 1.0
                },
                flip: {
                    x: false,
                    y: false
                },
                fill: {
                    x: 1.0,
                    y: 1.0
                },
                alpha: 1,
                angle: 0
            }, settings),
            scaleX = settings.scale.x * (settings.flip.x ? -1 : 1),
            scaleY = settings.scale.y * (settings.flip.y ? -1 : 1);
        spriteSourceSize.x2 = spriteSourceSize.w - spriteSourceSize.x - frame.w;
        spriteSourceSize.y2 = spriteSourceSize.h - spriteSourceSize.y - frame.h;
        context.globalAlpha = (settings.alpha).limit(0, 1);
        context.translate(x, y);
        if (settings.angle) {
            context.rotate(settings.angle);
        }
        if (settings.scale.x || settings.scale.y || settings.flip.x || settings.flip.y) {
            context.scale(scaleX, scaleY);
        }
        context.drawImage(spriteImage.data, frame.x, frame.y, frame.w * settings.fill.x, frame.h * settings.fill.y, ((-settings.anchor.x * spriteSourceSize.w)) + (settings.flip.x ? -frame.w - spriteSourceSize.x2 : spriteSourceSize.x), ((-settings.anchor.y * spriteSourceSize.h)) + (settings.flip.y ? -frame.h - spriteSourceSize.y2 : spriteSourceSize.y), frame.w * settings.fill.x, frame.h * settings.fill.y);
        if (settings.scale.x || settings.scale.y || settings.flip.x || settings.flip.y) {
            context.scale(1 / scaleX, 1 / scaleY);
        }
        if (settings.angle) {
            context.rotate(-settings.angle);
        }
        context.translate(-x, -y);
        context.globalAlpha = 1;
    };
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else {
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
    }
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();
    Array
});