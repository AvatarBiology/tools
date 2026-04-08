/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Dna,
  Microscope,
  Calculator,
  Search,
  ClipboardCheck,
  LineChart,
  BookOpen,
  Trophy,
  ExternalLink,
  GraduationCap,
  Users,
  Code2,
  Leaf,
  AlertTriangle,
  Clock,
  LucideIcon
} from 'lucide-react';

type LinkItem = {
  name: string;
  url: string;
  icon: LucideIcon;
  desc: string;
  pending?: boolean;
  warning?: boolean;
};

type Category = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  links: LinkItem[];
};

const categories: Category[] = [
  {
    title: '學生端工具',
    description: '提供學生進行探究實作與自主學習的數位鷹架',
    icon: GraduationCap,
    color: 'from-emerald-400 to-cyan-400',
    links: [
      { name: 'SRC專題研究引導工具', url: 'https://avatarbiology-src.netlify.app/', icon: Search, desc: '引導學生進行科學專題研究的系統化工具' },
      { name: 'CER數位論證系統', url: 'https://avatarbiology-cer.netlify.app/', icon: Microscope, desc: '主張、證據、推論的科學論證寫作平台' },
      { name: '互動式 Punnett 方格計算器', url: 'https://avatarbiology.github.io/punnett-calculator/', icon: Calculator, desc: '遺傳單元：視覺化基因配對與機率計算' },
      { name: '分子演化偵探', url: 'https://avatarbiology-aasequencing.netlify.app/', icon: Dna, desc: '遺傳單元：透過胺基酸序列比對探索物種演化' },
    ]
  },
  {
    title: '教師端系統',
    description: '輔助教師評量、追蹤與分析學生學習成效',
    icon: Users,
    color: 'from-indigo-400 to-purple-400',
    links: [
      { name: '自主學習評量助手', url: 'https://avatarbiology.github.io/sdl-helper/', icon: ClipboardCheck, desc: '協助教師快速進行自主學習計畫評量' },
      { name: 'CER 論證探究 (教師端)', url: 'https://docs.google.com/spreadsheets/d/1Qo24IlZTUZ-kZ7-48_vN-uHQ07Syaxwi66-xHHfR2CU/edit?usp=sharing', icon: BookOpen, desc: '批閱與管理學生的 CER 論證內容' },
      { name: '專題評分系統-演化', url: 'https://ai.studio/apps/drive/10XcplHyEiLTjlhz-DxK3gWC_bTy8IHWa?fullscreenApplet=true', icon: ClipboardCheck, desc: '協助教師進行專題發表評分與回饋' },
    ]
  },
  {
    title: '課程講義',
    description: '結合生物學科與資訊科技的教學教材',
    icon: BookOpen,
    color: 'from-amber-400 to-orange-400',
    links: [
      { name: '鷹架式引導教學講義', url: 'https://drive.google.com/drive/folders/1BnzE-9qzCs7vVoeJuB5gCXAnDLsRNizJ?usp=sharing', icon: BookOpen, desc: '雲端講義資料夾' },
    ]
  },
  {
    title: '學生成果',
    description: '展現學生在跨領域學習中的優異表現',
    icon: Trophy,
    color: 'from-pink-400 to-rose-400',
    links: [
      { name: '競賽相關成果', url: 'https://drive.google.com/drive/folders/1QXyKiZ9rptpPt6vulyRZZDwAh75vlpms?usp=sharing', icon: Trophy, desc: '雲端成果資料夾' },
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center space-x-3 mb-6 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm"
          >
            <Leaf className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-400">×</span>
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wider">BIO-IT EDUCATION</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400"
          >
            教學設計與工具入口
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Avatar Biology | 生物與資訊科技結合的教與學
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, idx) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-100">{category.title}</h2>
                  <p className="text-sm text-slate-400 mt-1">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                {category.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.pending ? undefined : link.url}
                    target={link.pending ? undefined : "_blank"}
                    rel={link.pending ? undefined : "noopener noreferrer"}
                    className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                      link.pending 
                        ? 'bg-slate-900/30 border-slate-800/50 cursor-default' 
                        : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${link.pending ? 'bg-slate-800/50 text-slate-500' : 'bg-slate-800 text-slate-300 group-hover:text-emerald-400 transition-colors'}`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      {!link.pending && (
                        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                      )}
                      {link.pending && (
                        <Clock className="w-4 h-4 text-slate-600" />
                      )}
                    </div>
                    
                    <h3 className={`text-lg font-medium mb-2 ${link.pending ? 'text-slate-500' : 'text-slate-200 group-hover:text-white transition-colors'}`}>
                      {link.name}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed ${link.pending ? 'text-slate-600' : 'text-slate-400'}`}>
                      {link.desc}
                    </p>

                    {link.warning && (
                      <div className="mt-4 inline-flex items-center space-x-1.5 text-xs font-medium text-amber-500/80 bg-amber-500/10 px-2.5 py-1 rounded-md">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>內含個資請勿外流</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
