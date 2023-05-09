const propType = {
  // html
  id: 'id',
  class: 'class',
  style: 'style',
  // vue
  key: 'key',
  value: 'value',
} as const;

const directiveType = {
  if: 'if',
  else: 'else',
  'else-if': 'else-if',
  show: 'show',
  for: 'for',
  model: 'model',
} as const;

const eventType = {
  click: 'click',
  dblclick: 'dblclick',
  focus: 'focus',
  blus: 'blus',
  input: 'input',
  change: 'change',
} as const;

const modifierType = {
  // 事件修饰符
  stop: 'stop',
  prevent: 'prevent',
  self: 'self',
  capture: 'capture',
  once: 'once',
  passive: 'passive',
  // 按键修饰符
  enter: 'enter',
  tab: 'tab',
  delete: 'delete',
  esc: 'esc',
  space: 'space',
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
  ctrl: 'ctrl',
  alt: 'alt',
  shift: 'shift',
  meta: 'meta',
  // other
  exact: 'exact',
} as const;

export const propTypeKeys = Object.values(propType);

export const directiveTypeKeys = Object.values(directiveType);

export const eventTypeKeys = Object.values(eventType);

export const modifierTypeKeys = Object.values(modifierType);
