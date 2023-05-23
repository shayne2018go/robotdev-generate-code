import { DBWSchema } from '@/types';

function preprocessDeclare(rdProp: DBWSchema.RdDecl): CodeSchema.Property_Protocol;
function preprocessDeclare(rdProp: DBWSchema.RdDefineProp): CodeSchema.Property_Protocol;
function preprocessDeclare(rdProp: DBWSchema.RdComponentDefineProp): CodeSchema.Property_Protocol;
function preprocessDeclare(
  rdProp: DBWSchema.RdDecl | DBWSchema.RdDefineProp | DBWSchema.RdComponentDefineProp
): CodeSchema.Property_Protocol {
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
