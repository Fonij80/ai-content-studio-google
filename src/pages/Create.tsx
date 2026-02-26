import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Download, 
  Layout, 
  Type, 
  Image as ImageIcon,
  Loader2,
  Trash2,
  GripVertical
} from 'lucide-react';

const styles = [
  { id: 'minimal', name: 'مینیمال', desc: 'ساده و شیک', color: 'bg-slate-100' },
  { id: 'vibrant', name: 'پرانرژی', desc: 'رنگ‌های شاد و زنده', color: 'bg-orange-100' },
  { id: 'luxury', name: 'لوکس', desc: 'طلایی و تیره', color: 'bg-amber-900 text-white' },
];

export default function Create() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('minimal');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Mock API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    setGeneratedImages([
      'https://picsum.photos/seed/poster1/800/1000',
      'https://picsum.photos/seed/poster2/800/1000',
      'https://picsum.photos/seed/poster3/800/1000',
      'https://picsum.photos/seed/poster4/800/1000',
    ]);
    setIsGenerating(false);
    setStep(3);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <Palette className="text-blue-500" size={32} />
            تولید محتوای حرفه‌ای
          </h1>
          <p className="text-slate-500 mt-2">مراحل زیر را برای ساخت پست خود دنبال کنید.</p>
        </div>
        
        {/* Stepper */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                step === s ? 'gradient-primary text-white shadow-lg' : 
                step > s ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              {step > s ? <Check size={20} /> : s}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 space-y-8 flex-1"
            >
              <div className="space-y-4">
                <label className="block text-lg font-bold text-slate-800">عنوان یا متن اصلی پست</label>
                <textarea
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="مثلاً: جشنواره فروش تابستانه - ۵۰٪ تخفیف روی تمام محصولات..."
                  className="w-full h-32 p-6 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-lg resize-none"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-lg font-bold text-slate-800">انتخاب سبک طراحی</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {styles.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStyle(s.id)}
                      className={`p-6 rounded-2xl border-2 text-right transition-all ${
                        selectedStyle === s.id ? 'border-blue-500 bg-blue-50 ring-4 ring-blue-500/10' : 'border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-10 h-10 ${s.color} rounded-lg mb-4 flex items-center justify-center`}>
                        <ImageIcon size={20} />
                      </div>
                      <p className="font-bold text-slate-900">{s.name}</p>
                      <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-8 flex-1"
            >
              <div className="relative">
                <div className="w-32 h-32 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 animate-pulse">
                  <Sparkles size={64} />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-amber-500">
                  <Loader2 className="animate-spin" size={24} />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">در حال خلق جادو...</h2>
                <p className="text-slate-500">هوش مصنوعی ما در حال طراحی بهترین گزینه‌ها برای شماست.</p>
              </div>
              <div className="w-full max-w-md bg-slate-100 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3 }}
                  className="h-full gradient-primary"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 space-y-8 flex-1"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">طرح‌های پیشنهادی</h2>
                <p className="text-sm text-slate-500">می‌توانید ترتیب اسلایدها را تغییر دهید.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {generatedImages.map((img, i) => (
                  <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-move">
                    <img src={img} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                      <button className="p-2 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                        <GripVertical size={20} />
                      </button>
                      <button className="p-2 bg-red-500 text-white rounded-full hover:scale-110 transition-transform">
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[10px] font-bold text-slate-900">
                      {i + 1}
                    </div>
                  </div>
                ))}
                <button className="aspect-[4/5] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-all">
                  <ImageIcon size={32} />
                  <span className="text-xs font-bold">افزودن اسلاید</span>
                </button>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <Type size={20} className="text-blue-500" />
                  <span className="font-bold text-slate-800">ویرایش متن روی تصویر</span>
                </div>
                <input 
                  type="text" 
                  defaultValue={title}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          {step > 1 && step !== 2 ? (
            <button 
              onClick={prevStep}
              className="px-6 py-2.5 text-slate-600 font-bold hover:bg-slate-100 rounded-xl transition-all flex items-center gap-2"
            >
              <ArrowRight size={20} />
              مرحله قبل
            </button>
          ) : <div />}

          {step === 1 && (
            <button 
              onClick={() => { nextStep(); handleGenerate(); }}
              disabled={!title.trim()}
              className="px-10 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              تولید طرح‌ها
              <ArrowLeft size={20} />
            </button>
          )}

          {step === 3 && (
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <Download size={20} />
                دانلود فایل ZIP
              </button>
              <button className="px-10 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:scale-105 transition-all flex items-center gap-2">
                تایید و زمان‌بندی
                <ArrowLeft size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
