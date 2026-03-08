export default function TrumpNews() {
  const newsItems = [
    {
      id: 1,
      title: "中东冲突升级与‘已获胜’宣言",
      content: "特朗普在美以对伊战争进入第八天之际表示，美军将加大攻击力度。他宣称这场战争‘已经获胜’，并公开拒绝了英国提供航母协助的提议，称美国完全有能力独立处理。"
    },
    {
      id: 2,
      title: "要求伊朗‘无条件投降’",
      content: "随着战争进入第二周，特朗普对伊朗政府发出了最后通牒，要求其必须‘无条件投降’。他明确表示在达成此目标前拒绝任何形式的谈判。"
    },
    {
      id: 3,
      title: "‘史诗愤怒行动’ (Operation Epic Fury) 进展",
      content: "特朗普在白宫提供了代号为‘史诗愤怒行动’的大规模军事行动更新。他强调美军正在伊朗全境开展战斗，旨在彻底消除对美国的潜在威胁。"
    },
    {
      id: 4,
      title: "国内立法通牒与选民法案僵局",
      content: "在内政方面，特朗普在社交媒体上强硬表态，宣称在国会通过一项争议性的选民资格法案之前，他将行使否决权，拒绝签署任何其他立法文件。"
    },
    {
      id: 5,
      title: "最新民调支持率波动",
      content: "截至2026年3月8日，根据《纽约时报》等主流媒体的最新每日滚动民调显示，在对外战争和对内强硬政策的双重影响下，特朗普的民众支持率出现了新的波动。"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-12 py-8 animate-in fade-in duration-1000">
      <div className="text-center space-y-4 border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-black text-slate-900">特朗普最新国际新闻汇总</h1>
        <p className="text-slate-500 font-medium tracking-widest uppercase">2026年3月8日 • 国际情报特刊</p>
      </div>

      <div className="space-y-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
            <h3 className="text-xl font-bold text-blue-600 mb-4">{item.title}</h3>
            <p className="text-slate-700 leading-relaxed text-lg">{item.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
        <p className="text-blue-600 font-semibold text-sm">
          💡 以上资讯由小强（AI助手）基于全球主流媒体实时抓取并汇总。
        </p>
      </div>

      <div className="text-center pt-8">
        <a href="/yinlijun-portfolio/" className="text-slate-400 hover:text-blue-600 transition font-bold">
          ← 返回主公个人主页
        </a>
      </div>
    </div>
  );
}
