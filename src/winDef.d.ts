export {};
interface CoTChineseNameSetup {
  chinese_names_cache: {
    i18n_surnames_cn: string[];
    i18n_names_cn: string[];
    original_surnames: string[];
    original_male: string[];
    original_female: string[];
  };
  Names: {
    "surnames_cn": string[];
    "names_cn": string[];
    "surnames": string[];
    "male": string[];
    "female": string[];
    "transgender female": string[];
    "transgender male": string[];
    "nonbinary afab": string[];
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
