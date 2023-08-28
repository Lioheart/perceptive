# Perceptive

 A Foundry VTT module to add a few loosely related vision based features, currently implemented features are:

## Door lock peeking

Allows doors to be set a lock peekable. When a player ctrl+right-clicks a lock peekable door they can see through a small hole in the door until they ctrl+right-clicks it again or move out of the interaction distance. Only one lock can be peeked at a time.

### Settings:

#### World:
- Lock peekable by default: to set doors to be peekable by default
- Standard size of lock peeks: the default size of door lockpeeks
- Stop lock peeking on movement: to stop lock peeking even if the moving token is still within the interaction distance
#### Walls:
- Can be lock peeked: to make the door peekable
- Lock peek size: to set the doorlocks peek size (in parts of the door (0-1))

## Door moving

Allows doors to be incrementally opened in either a swinging or sliding motion. Players can use the mouse wheel on the door control to slowly open or close a door.

### Settings:

#### World:
- Door standard movement type: The standard movement type of doors
- Door standard hinge position: The standard hinge positions of doors
- Standard swing speed: The standard swing speed of doors
- Standard slide speed: The standard slide speed of doors
#### Walls:
- Door movement type: The way the door can be move, can be set ton None(Standard Foundry door), Swing or Slide
- Door hinge position: Position of the doors hinge (left or right)
- Swing speed: The swing speed of the door in angles°
- Slide speed: The slide speed of the door in  parts of door size (0-1)

## General features:

### Settings:

#### World:
- Maximum Interaction Distance: to limit the distance over which players can interact with doors
- Show Perceptive walls [DEBUG]: to show the modules walls in the wall layer for debug purposes

### Compatibility:

The module should be compatible with all game systems and most modules on Foundry v11. If you encounter any bugs please [let me know](https://github.com/Saibot393/perceptive/issues).

#### Explicit compatability:
- [FoundryVTT Arms Reach](https://foundryvtt.com/packages/foundryvtt-arms-reach)/[Arms Reach](https://foundryvtt.com/packages/arms-reach):
  - Additional setting "Use Arms Reach distance": to use the "Arms Reach" distance instead of the set Interaction distance
- [Lock & Key](https://foundryvtt.com/packages/locknkey)
  - A "Peek lock" options will be shown on the lock interaction menu of Lock & Key

### Languages:

The module contains an English, and a German translation. If you want additional languages to be supported [let me know](https://github.com/Saibot393/perceptive/issues).

---

**If you have suggestions, questions, or requests for additional features please [let me know](https://github.com/Saibot393/perceptive/issues).**
