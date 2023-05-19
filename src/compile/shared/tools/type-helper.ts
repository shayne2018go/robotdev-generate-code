function hasTable(types?: CodeSchema.PropertyType_Protocol[]) {
  return types?.some((type) => type.type === 'table');
}

const typeHelper = { hasTable };
export default typeHelper;
