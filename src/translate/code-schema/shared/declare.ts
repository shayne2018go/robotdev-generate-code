import { DBWSchema } from '@/types';
import { Identifier } from '@/types/code-schema/Identifier';

function preprocessDeclare(rdProp: DBWSchema.RdDecl): Identifier;
function preprocessDeclare(rdProp: DBWSchema.RdDefineProp): Identifier;
function preprocessDeclare(rdProp: DBWSchema.RdComponentDefineProp): Identifier;
function preprocessDeclare(
  rdProp: DBWSchema.RdDecl | DBWSchema.RdDefineProp | DBWSchema.RdComponentDefineProp
): Identifier {
  return {
    id: rdProp.id,
    name: rdProp.name!,
    key: rdProp.key!,
    desc: rdProp.desc,
    types: rdProp.types,
    extendPlatform: rdProp.extendPlatform,
  };
}

export { preprocessDeclare };
