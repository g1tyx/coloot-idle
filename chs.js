/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "OK": "确定",
    "Tools": "工具",
    "Are your sure? This will reset your equipment and level, \n                getting back all gems and keeping Crystal levels": "你确定吗?这将重置你的装备和等级，取回所有宝石并保留水晶等级",
    "Art mostly made with Stable Diffusion": "艺术大多是由稳定的扩散制成的",
    "Artifact Shop": "神器商店",
    "begone coloot": "begone coloot",
    "Cancel": "取消",
    "Close": "关闭",
    "Coloot Idle developed by": "Coloot Idle 由",
    "Credits": "鸣谢",
    "Elite": "精英",
    "Enemy": "敌人",
    "Equip All": "全部装备",
    "Export ↓": "导出↓",
    "Fight Boss": "对抗Boss",
    "Font": "字体",
    "For each Level Up, you gain additional Damage and Magic Find.": "每升一级，你获得额外的伤害和魔法发现。",
    "Gems:": "宝石:",
    "Help": "帮助",
    "Higher Rarity makes it easier to find Loot with higher tiers.": "更高的稀有性让玩家更容易找到更高等级的战利品。",
    "HP:": "生命值:",
    "https://github.com/veprogames/coloot-idle": "https://github.com/veprogames/coloot-idle",
    "Idle Loot Quest": "闲置战利品任务",
    "Import ↓": "导入↓",
    "Inspirations": "灵感",
    "into the text box below\n        and click \"WIPE\".": "到下面的文本框\n并点击\“删档\”。",
    "Level": "等级",
    "Loot": "战利品",
    "Loot (": "战利品(",
    "Magic Find multiplies the stats of found Loot.": "魔法发现会将发现的战利品属性翻倍。",
    "Press Start 2P,": "按启动2P，",
    "Reset all Artifacts and get the Gems back. This will reset your Equipment and Level.\n                You will keep your Crystal Levels.": "重置所有的神器并取回宝石。这将重置你的装备和等级。你将保留你的水晶等级。",
    "Respec": "重洗",
    "Risk of Rain 2": "下雨风险2",
    "Save Management": "存档管理",
    "Spend Gems to unlock higher Tier Artifacts in the Shop.": "在商店中花费宝石解锁更高级别的神器",
    "Spent:": "花费:",
    "Strong": "强壮",
    "This will reset absolutely everything! Are you sure?\n        Type": "这将重置一切!你确定吗?\n输入",
    "Tier": "层级",
    "veprogames": "veprogames",
    "WIPE": "删档",
    "Wipe Save": "删除存档",
    "WIPE SAVE": "删除存档",
    "Manual Save": "手动保存",
    "Flee": "逃跑",
    "Crystals": "水晶",
    "Gem Prestige": "宝石声望",
    "Increases Damage dealt": "增加造成的伤害",
    "Increases Magic Find": "增加魔法发现",
    "Increases the Rarity of found Equipment": "增加装备的稀有性",
    "Invest (+": "投资(+",
    "Invest your Level into Crystals, gaining a bosst, but losing your equipment and level.": "将你的等级投资于水晶，获得一个boss，但失去你的装备和等级。",
    "Lv.": "等级",
    "Magic": "魔法",
    "OFL": "OFL",
    "Power": "力量",
    "Rarity": "稀有度",
    "To: x": "到: x",
    "Reach": "达到",
    "Buy": "购买",
    "Artifacts": "神器",
    "Artifacts (": "神器 (",
    "This process is destructive and will destroy your equipment\n            and also drain everything out of your Prestige Crystals. Are you sure?": "这个过程是破坏性的，会破坏你的装备，也会耗尽你声望水晶的所有东西。你确定吗?",
    "Turn your Levels into Gems, which can be used to buy Artifacts.": "将你的等级变成宝石，可以用来购买神器。",
    "Gems": "宝石",
    "Common": "普通",
    "Current:": "当前:",
    "Iron Fist": "铁拳",
    "Shiny Diamond": "璀璨钻石",
    "Uncommon": "罕见",
    "Shovel": "铲子",
    "all multiplicative effects.": "所有的乘法效应。",
    "before": "之前",
    "Metal Detector": "金属探测器",
    "Rare": "稀有",
    "Potion": "药水",
    "This effect is additive and is applied": "这种效果是叠加的，并且被应用",
    "This Artifacts effect strength is based on how much Equipment you scrapped and its count": "这个神器的效果强度是基于你报废的装备数量和数量",
    "This Artifacts effect strength is based on how much Artifacts you own and its tier": "此神器的效果强度取决于你拥有的神器数量及其层级",
    "Orb of Wisdom": "智慧宝珠",
    "This Artifact gets stronger based on Player Level times its count squared": "该神器的强度取决于玩家等级乘以其数量的平方",
    "Epic": "史诗",
    "Magic Wand of Thousand Colors": "千色魔杖",
    "Legendary": "传说",
    "Divine": "神圣",
    "Cosmic": "宇宙",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Source Code": "源码",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Increases Max Health by (.+) per stack.$/, '每层增加最大生命值 $1。'],
    [/^Increases Magic Find by (.+) per stack.$/, '每层增加 $1 的魔法发现。'],
    [/^Increases Equipment Rarity by (.+) per stack.$/, '每层装备稀有度提升 $1。'],
    [/^Increases Damage by (.+) per stack.$/, '每层增加 $1 的伤害。'],
    [/^Increases Player XP Gain by (.+) per stack.$/, '每层增加玩家经验增益 $1。'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Forest ([\d\.,]+)$/, '森林 $1'],
    [/^Jungle ([\d\.,]+)$/, '丛林 $1'],
    [/^Badlands ([\d\.,]+)$/, '荒野 $1'],
    [/^Deep Dungeon ([\d\.,]+)$/, '深层地牢 $1'],
    [/^Portal to Another World ([\d\.,]+)$/, '通往另一个世界的大门 $1'],
    [/^Plains ([\d\.,]+)$/, '平原 $1'],
    [/^Desert ([\d\.,]+)$/, '沙漠 $1'],
    [/^Hellscape ([\d\.,]+)$/, '地狱 $1'],
    [/^Castle ([\d\.,]+)$/, '城堡 $1'],
    [/^Cave ([\d\.,]+)$/, '洞穴 $1'],
    [/^Reach Level ([\d\.,]+)$/, '达到 $1 级'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Level ([\d\.,]+) is required$/, '需要 $1 级'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
    [/^([A-Za-z][\d\.]+)$/, '$1'],
    [/^([A-Za-z]\~[\d\.]+)$/, '$1'],
]);