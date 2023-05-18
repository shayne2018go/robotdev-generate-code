import { relative } from '@/utils/node';
import * as t from '@babel/types';

export interface ImportedParsing {
  importPath: string;
  specifiers: (t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier)[];
}

export function parsingImportDeclaration(
  source: GlobalContext.Source,
  currentDir: string
): ImportedParsing | undefined {
  const importPath = source.packageName
    ? source.packageName
    : source.filePath
    ? relative(currentDir, source.filePath)
    : '';

  if (!importPath) {
    return;
  }

  const specifiers = [] as ImportedParsing['specifiers'];
  if (source.exportNamespace) {
    specifiers.push(t.importNamespaceSpecifier(t.identifier(source.exportNamespace)));
  } else if (source.exportName) {
    const alias = source.alias || source.exportName;
    specifiers.push(t.importSpecifier(t.identifier(alias!), t.identifier(source.exportName)));
  }

  return {
    importPath,
    specifiers,
  };
}

export function parsingImportedParsingArray(
  data: (GlobalContext.Function | GlobalContext.Component | GlobalContext.Api)[],
  currentDir: string
) {
  const importedParsingArray = data.reduce((pre, cur) => {
    if (!cur.source) {
      return pre;
    }
    const importedParsing = parsingImportDeclaration(cur.source, currentDir);

    if (!importedParsing) {
      return pre;
    }

    const isExistImportPath = pre.find((p) => p.importPath === importedParsing?.importPath);

    if (isExistImportPath) {
      const noExistSpecifiers = importedParsing.specifiers.filter(
        (spec) => !isExistImportPath.specifiers.find((espec) => isEqualSpecifier(espec, spec))
      );
      isExistImportPath.specifiers = isExistImportPath.specifiers.concat(noExistSpecifiers);
    } else {
      pre.push(importedParsing);
    }

    return pre;
  }, [] as ImportedParsing[]);
  return importedParsingArray;
}

export function isEqualSpecifier(
  left: ImportedParsing['specifiers'][number],
  right: ImportedParsing['specifiers'][number]
) {
  if (left.type !== right.type || left.local.name !== right.local.name) {
    return false;
  }
  if (t.isImportSpecifier(left) && t.isImportSpecifier(right)) {
    if (t.isIdentifier(left.imported) && t.isIdentifier(right.imported)) {
      return left.imported.name === right.imported.name;
    } else if (t.isStringLiteral(left.imported) && t.isStringLiteral(right.imported)) {
      return left.imported.value === right.imported.value;
    }
  } else if (t.isImportNamespaceSpecifier(left) && t.isImportNamespaceSpecifier(right)) {
    return left.local.name === right.local.name;
  }

  return false;
}

export function getCurrentDirByPath(path: string): string {
  return path.split('/').slice(0, -1).join('/');
}
