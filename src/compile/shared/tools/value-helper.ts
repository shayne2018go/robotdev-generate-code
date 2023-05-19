import { isRdData, rdDataIsTable } from '@/compile/syntax/vue/shared/bind-parse/shared/helper';

function isTable(value?: CodeSchema.DataValueArgument) {
  return value && isRdData(value) && rdDataIsTable(value);
}

const valueHelper = { isTable };
export default valueHelper;
