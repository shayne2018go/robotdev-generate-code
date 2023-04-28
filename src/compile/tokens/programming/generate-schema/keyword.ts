import { keywordType } from '../const/statementType';
import { Keyword, KeywordTypeEnmu } from '../types/keyword';

export const keyword = {
  unknown<T extends KeywordTypeEnmu>(
    keyword: T
  ): {
    _keyword_: T;
  } {
    return {
      _keyword_: keyword,
    };
  },
  export(): Keyword.Export {
    return keyword.unknown(keywordType.export);
  },
  import(): Keyword.Import {
    return keyword.unknown(keywordType.import);
  },
  static(): Keyword.Static {
    return keyword.unknown(keywordType.static);
  },
  private(): Keyword.Private {
    return keyword.unknown(keywordType.private);
  },
  public(): Keyword.Public {
    return keyword.unknown(keywordType.public);
  },
  protected(): Keyword.Protected {
    return keyword.unknown(keywordType.protected);
  },
  async(): Keyword.Async {
    return keyword.unknown(keywordType.async);
  },
};
