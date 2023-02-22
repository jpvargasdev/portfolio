export function isTouchDevice(): boolean {
  if (!window) return true;
  if(window.matchMedia("(pointer: coarse)").matches) {
    return true;
  }
  return false;
}