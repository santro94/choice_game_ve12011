let Variable = 0
let Score = 0
let Wait = 0
for (let index = 0; index < 10; index++) {
    basic.pause(100)
    Wait = 0
    basic.pause(100)
    Score = 0
    basic.pause(100)
    Variable = randint(1, 4)
    basic.pause(100)
    if (Variable == 1) {
        basic.showString("A")
        if (input.buttonIsPressed(Button.A)) {
            Wait = 1
            Score += 1
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.B)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.AB)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.isGesture(Gesture.Shake)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        }
    } else if (Variable == 2) {
        basic.showString("B")
        if (input.buttonIsPressed(Button.B)) {
            Wait = 1
            Score += 1
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.A)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.AB)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.isGesture(Gesture.Shake)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        }
    } else if (Variable == 3) {
        basic.showString("A+B")
        if (input.buttonIsPressed(Button.AB)) {
            Wait = 1
            Score += 1
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.A)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.B)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.isGesture(Gesture.Shake)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        }
    } else {
        basic.showString("Shake")
        if (input.isGesture(Gesture.Shake)) {
            Wait = 1
            Score += 1
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.A)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.B)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.AB)) {
            Wait = 1
            Score += -2
            basic.pause(100)
        }
    }
    control.waitForEvent(Wait, 1)
}
basic.showNumber(Score)
