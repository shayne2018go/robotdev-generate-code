export interface IGenerateToken {
  path: string;
  token: string;
}

function generate(tokens: IGenerateToken[], rootPath: string): Promise<void>;
function generate(tokens: IGenerateToken[], rootPath: string) {
  return new Promise<void>((resolve, reject) => {
    resolve();
  });
}

export default generate;
