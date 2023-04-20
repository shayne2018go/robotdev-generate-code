import { DataTypeSchema } from '../dataType/dataTypeSchema';
import { IQuantityVariable, IQuantity } from './quantity.d';

interface DeclareQuantity {
  __declare__: true;
  mode: 'global' | 'const' | 'variable';
  name: string;
  dataTypes?: DataTypeSchema[];
  value?: IQuantity['id'];
}

interface IQuantityAssignment {
  __assignment__: true;
  left: IQuantityVariable;
  right: IQuantity['id'];
}

interface CodeProcessReturn {
  __return__: true;
  quantity?: IQuantity['id'];
}

interface CondIf {
  __if__: true;
  ifs: [IQuantity['id'], IQuantity['id']];
  else: IQuantity['id'];
}

type CodeProcess = DeclareQuantity | IQuantityAssignment | CodeProcessReturn;
