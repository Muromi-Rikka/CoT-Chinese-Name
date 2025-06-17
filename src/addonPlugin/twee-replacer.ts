import type { ModBootJsonAddonPlugin } from "../types/boot.types.ts";

export const TweeReplacer: ModBootJsonAddonPlugin = {
  modName: "TweeReplacer",
  addonName: "TweeReplacerAddon",
  modVersion: "^1.6.0",
  params: [
    {
      passage: "Start",
      findString: "Start2>><</button>></span>",
      replace: "Start2>><</button>></span><<if recall('CNameModReplaceTrigger')>><<run window.i18n_to_chinese_name()>><<set $CNameModReplaceTrigger = recall('CNameModReplaceTrigger')>><<else>><<if recall('CNameModReplaceTrigger')==undefined>><<set $CNameModReplaceTrigger to true>><<run memorize('CNameModReplaceTrigger',true)>><<else>><<run window.source_to_chinese_name()>><<set $CNameModReplaceTrigger = recall('CNameModReplaceTrigger')>><</if>><</if>>",
    },
    {
      passage: "ContentOptions",
      findString: "<label><<checkbox \"$optallownpccustom\" false true autocheck>>",
      replace: "<label><<if $CNameModReplaceTrigger==undefined>><<set $CNameModReplaceTrigger = recall('CNameModReplaceTrigger')>><</if>><<if $CNameModReplaceTrigger>><input type=\"checkbox\" id=\"scales\" name=\"scales\" checked onchange=\"window.chinese_name_to_i18n();window.source_to_chinese_name();V.CNameModReplaceTrigger = false;Wikifier.wikifyEval(`<<run memorize('CNameModReplaceTrigger',false)>>`)\"><<else>><input type=\"checkbox\" id=\"scales\" name=\"scales\" onchange=\"V.CNameModReplaceTrigger = false;Wikifier.wikifyEval(`<<run memorize('CNameModReplaceTrigger',true)>>`);SugarCube.UI.restart()\"><</if>>替换i18N姓名(只修改汉化替换，不修改英文原版)(默认开启，关闭时替换英文原版姓名，需重新开档)<<button \"恢复i18n\">><<run window.chinese_name_to_i18n()>><</button>></label><br><label><<checkbox \"$optallownpccustom\" false true autocheck>>",
    },
    {
      passage: "GlobalWidgets",
      findRegex: "(?<=dfullname.*?)<<= setup\\.Names\\.names_cn\\[setup\\.Names\\.female\\.concat\\(setup\\.Names\\.male\\)\\.indexOf\\(_f\\)\\]>> <<= setup\\.Names\\.surnames_cn\\[setup\\.Names\\.surnames\\.indexOf\\(_l\\)\\]>>",
      replace: "<<= setup.Names.surnames_cn[setup.Names.surnames.indexOf(_l)]>><<= setup.Names.names_cn[setup.Names.female.concat(setup.Names.male).indexOf(_f)]>>",
    },
    {
      passage: "GlobalWidgets",
      findRegex: "(?<=\"fullname.*?)<<= setup\\.Names\\.names_cn\\[setup\\.Names\\.female\\.concat\\(setup\\.Names\\.male\\)\\.indexOf\\(_f\\)\\]>> <<= setup\\.Names\\.surnames_cn\\[setup\\.Names\\.surnames\\.indexOf\\(_l\\)\\]>>",
      replace: "<<= setup.Names.surnames_cn[setup.Names.surnames.indexOf(_l)]>><<= setup.Names.names_cn[setup.Names.female.concat(setup.Names.male).indexOf(_f)]>>",
    },
  ],
};
