import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, 
  Sparkles, 
  Search, 
  ArrowLeft, 
  Copy, 
  Check,
  Hash,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';
import { Idea } from '../types';

const mockIdeas: Idea[] = [
  {
    id: '1',
    title: 'معرفی محصول جدید با رویکرد داستانی',
    description: 'یک پست کاروسل ۵ اسلایدی که با یک مشکل رایج شروع می‌شود و محصول شما را به عنوان راه حل نهایی معرفی می‌کند.',
    hashtags: ['#محصول_جدید', '#داستان_سرایی', '#کسب_و_کار'],
    imageUrl: 'https://picsum.photos/seed/idea1/400/400'
  },
  {
    id: '2',
    title: '۵ نکته برای افزایش بهره‌وری در محیط کار',
    description: 'یک اینفوگرافیک جذاب که نکات کلیدی برای مدیریت زمان و تمرکز را به صورت بصری نمایش می‌دهد.',
    hashtags: ['#بهره_وری', '#مدیریت_زمان', '#آموزشی'],
    imageUrl: 'https://picsum.photos/seed/idea2/400/400'
  },
  {
    id: '3',
    title: 'پشت صحنه تولید محتوا',
    description: 'یک ویدیو یا تصویر که فرآیند واقعی تولید محصولات شما را نشان می‌دهد تا اعتماد مخاطب جلب شود.',
    hashtags: ['#پشت_صحنه', '#اعتمادسازی', '#برندینگ'],
    imageUrl: 'https://picsum.photos/seed/idea3/400/400'
  },
  {
    id: '4',
    title: 'مسابقه و جایزه برای دنبال‌کنندگان',
    description: 'طراحی یک پست تعاملی برای برگزاری مسابقه که باعث افزایش نرخ تعامل و جذب فالوورهای جدید می‌شود.',
    hashtags: ['#مسابقه', '#جایزه', '#تعامل'],
    imageUrl: 'https://picsum.photos/seed/idea4/400/400'
  },
  {
    id: '5',
    title: 'نقل‌قول انگیزشی از بزرگان صنعت',
    description: 'یک طراحی مینیمال و شیک شامل یک جمله تاثیرگذار که با هویت بصری برند شما همخوانی دارد.',
    hashtags: ['#انگیزشی', '#نقل_قول', '#موفقیت'],
    imageUrl: 'https://picsum.photos/seed/idea5/400/400'
  }
];

export default function Ideas() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setIdeas([]);
    
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIdeas(mockIdeas);
    setIsGenerating(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Lightbulb className="text-amber-500" size={32} />
            ایده‌پردازی هوشمند
          </h1>
          <p className="text-slate-500 mt-2">موضوع یا کسب‌وکار خود را توصیف کنید تا هوش مصنوعی برای شما ایده بسازد.</p>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="مثال: تبلیغ کفش ورزشی برای اینستاگرام با تمرکز بر راحتی و دوام..."
            className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-lg resize-none"
          />
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="absolute bottom-4 left-4 px-8 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 disabled:opacity-50 disabled:shadow-none flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                در حال پردازش...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                تولید ایده‌ها
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={idea.imageUrl} 
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg leading-tight">{idea.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {idea.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {idea.hashtags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md flex items-center gap-1">
                      <Hash size={10} />
                      {tag.replace('#', '')}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                  <button 
                    onClick={() => copyToClipboard(idea.description, idea.id)}
                    className="flex-1 py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedId === idea.id ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    {copiedId === idea.id ? 'کپی شد' : 'کپی متن'}
                  </button>
                  <button className="flex-1 py-2 gradient-primary text-white rounded-xl text-xs font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Sparkles size={14} />
                    تولید طرح
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {!isGenerating && ideas.length === 0 && (
        <div className="py-20 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <Search size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-400">هنوز ایده‌ای تولید نشده است</h3>
          <p className="text-slate-400 mt-2">توضیحات خود را در کادر بالا بنویسید و دکمه تولید را بزنید.</p>
        </div>
      )}
    </div>
  );
}
