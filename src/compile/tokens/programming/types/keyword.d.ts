import { keywordType } from '../const/statementType';

export namespace Keyword {
  type KeywordType = typeof keywordType;

  export interface Export {
    _keyword_: KeywordType['export'];
  }
  export interface Import {
    _keyword_: KeywordType['import'];
  }
  export interface Static {
    _keyword_: KeywordType['static'];
  }
  export interface Private {
    _keyword_: KeywordType['private'];
  }
  export interface Public {
    _keyword_: KeywordType['public'];
  }
  export interface Protected {
    _keyword_: KeywordType['protected'];
  }
  export interface Async {
    _keyword_: KeywordType['async'];
  }

  export type Unknown = Export | Import | Static | Private | Public | Protected | Async;
}
