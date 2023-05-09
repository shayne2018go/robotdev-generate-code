import { directiveTypeKeys, eventTypeKeys, modifierTypeKeys, propTypeKeys } from '../const/generateSchemaType';

export type PropType = typeof propTypeKeys;

export type PropTypeEnum = (typeof propTypeKeys)[number];

export type EventType = typeof eventTypeKeys;

export type EventTypeEnum = (typeof eventTypeKeys)[number];

export type DirectiveType = typeof directiveTypeKeys;

export type DirectiveTypeEnum = (typeof directiveTypeKeys)[number];

export type ModifierType = typeof modifierTypeKeys;

export type ModifierTypeEnum = (typeof modifierTypeKeys)[number];
