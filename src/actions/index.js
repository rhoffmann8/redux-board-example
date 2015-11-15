export const KEY_UP = 'KEY_UP';
export const KEY_DOWN = 'KEY_DOWN';
export const KEY_LEFT = 'KEY_LEFT';
export const KEY_RIGHT = 'KEY_RIGHT';

const KEYS = {
  38: KEY_UP,
  40: KEY_DOWN,
  37: KEY_LEFT,
  39: KEY_RIGHT
};

export function move(e) {
  return {type: KEYS[e.keyCode]};
}