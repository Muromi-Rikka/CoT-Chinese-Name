export {};
/**
 * CoT中文姓名生成器的配置接口
 * 存储姓名数据缓存和多性别姓名列表
 * @interface CoTChineseNameSetup
 */
interface CoTChineseNameSetup {
  /**
   * 中文姓名数据缓存
   * 包含国际化和原始格式的姓名数据
   */
  chinese_names_cache: {
    /** 国际化处理后的中文姓氏列表 */
    i18n_surnames_cn: string[];
    /** 国际化处理后的中文名字列表 */
    i18n_names_cn: string[];
    /** 原始姓氏列表（未国际化处理） */
    original_surnames: string[];
    /** 原始男性名字列表（未国际化处理） */
    original_male: string[];
    /** 原始女性名字列表（未国际化处理） */
    original_female: string[];
  };
  /**
   * 多性别姓名数据集合
   * 包含不同性别和非二元性别的姓名列表
   */
  Names: {
    /** 中文姓氏列表 */
    "surnames_cn": string[];
    /** 中文名字列表 */
    "names_cn": string[];
    /** 通用姓氏列表 */
    "surnames": string[];
    /** 男性名字列表 */
    "male": string[];
    /** 女性名字列表 */
    "female": string[];
    /** 跨性别女性名字列表 */
    "transgender female": string[];
    /** 跨性别男性名字列表 */
    "transgender male": string[];
    /** 非二元性别(出生时被分配女性)名字列表 */
    "nonbinary afab": string[];
    /** 非二元性别(出生时被分配男性)名字列表 */
    "nonbinary amab": string[];
  };
}
declare global {
  const setup: CoTChineseNameSetup;

  interface Window {
    modUtils: ModUtils;
    modSC2DataManager: SC2DataManager;

    modImgLoaderHooker: ImgLoaderHooker;

    jQuery: jQuery;

    chinese_surnames: string[];
    chinese_male_names: string[];
    chinese_female_names: string[];

    i18n_to_chinese_name: () => void;
    chinese_name_to_i18n: () => void;
    source_to_chinese_name: () => void;

  }

  let Macro: {
    add: (name: string | string[], def) => any;
    delete: (name: string) => any;
    isEmpty: () => any;
    has: (name: string) => any;
    get: (name: string) => any;
  };

  interface Window {
    aaaaabbbbbccccc: (key: string) => string;
    ModWebpackExampleTs_patchLinkButton: (
      MacroRef: typeof Macro,
      ScriptingRef: typeof Scripting,
    ) => void;
  }

  const Wikifier: WikifierAPI;
  const Scripting: ScriptingAPI;

}

export interface WikifierAPI {
  new(destination: OutputDestination | null, source: string, options?: WikifierOptions): unknown;

  createExternalLink: (destination: OutputDestination, url: string, text: string) => HTMLAnchorElement;

  createInternalLink: (
    destination: OutputDestination,
    passage: string,
    text: string,
    callback: () => void,
  ) => HTMLAnchorElement;

  isExternalLink: (link: string) => boolean;

  wikifyEval: (text: string) => DocumentFragment;
}

export interface ScriptingAPI {
  parse: (rawCodeString: string) => string;

  /**
   * Evaluates the given JavaScript code and returns the result, throwing if there were errors.
   */
  evalJavaScript: (code: string) => any;

  /**
   * Evaluates the given TwineScript code and returns the result, throwing if there were errors.
   */
  evalTwineScript: (code: string) => any;
}
