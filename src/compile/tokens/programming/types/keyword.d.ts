export namespace Keyword {
  export interface Export {
    _keyword_: 'export';
  }
  export interface Import {
    _keyword_: 'import';
  }

  export type Unknown = Export | Import;
}
