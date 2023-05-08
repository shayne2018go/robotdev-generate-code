function is<T extends object>(v: any, k: string): v is T {
  return k in v;
}

export const check = {
  isNode(schema: VueTemplateTypes.ChildNode): schema is VueTemplateTypes.Node {
    return is<VueTemplateTypes.Node>(schema, 'tag');
  },
  isText(schema: VueTemplateTypes.ChildNode): schema is VueTemplateTypes.Text {
    return is<VueTemplateTypes.Node>(schema, 'text');
  },
  isInsertText(schema: VueTemplateTypes.ChildNode): schema is VueTemplateTypes.InsertText {
    return is<VueTemplateTypes.Node>(schema, 'expression');
  },
};
