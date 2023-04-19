import { DataTypeSchema } from '../dataType/dataTypeSchema';
import { IQuantityVariable, IQuantity } from './quantity.d';

interface DeclareQuantity {
  __declare__: true;
  mode: 'global' | 'const' | 'variable';
  name: string;
  dataTypes?: DataTypeSchema[];
  value?: IQuantity;
}

interface IQuantityAssignment {
  __assignment__: true;
  left: IQuantityVariable;
  right: IQuantity;
}

interface CodeProcessReturn {
  __return__: true;
  quantity?: IQuantity;
}

interface CondIf {
  __if__: true;
  ifs: [IQuantity, IQuantity];
  else: IQuantity;
}

type CodeProcess = DeclareQuantity | IQuantityAssignment | CodeProcessReturn;
