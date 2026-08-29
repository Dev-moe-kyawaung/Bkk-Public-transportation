import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Bot, User } from 'lucide-react';
import { getAIResponse, suggestedQuestions } from '../lib/aiResponses';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      text: 'မင်္ဂလာပါ! ကျွန်တော် Bangkok သွားလာရေး AI လမ်းညွှန်ပါ 🚆 BTS၊ MRT၊ Airport Link (သို့) ဘတ်စ်ကားလိုင်းများနှင့် ပတ်သက်၍ မေးလိုသည်များ မေးမြန်းနိုင်ပါသည်။',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: 'user', text: trimmed }]);
    setInput('');
    setTyping(true);
    const delay = 500 + Math.random() * 600;
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'ai', text: getAIResponse(trimmed) }]);
      setTyping(false);
    }, delay);
  };

  return (
    <section id="ai" className="relative py-24 bg-ink-2">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-center gap-2 text-gold-2 text-xs font-semibold uppercase tracking-widest mb-3">
          <Sparkles size={14} /> AI Assistant
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold">AI ကို ခရီးစဉ်မေးမြန်းပါ</h2>
        <p className="text-mist mt-3 max-w-2xl">
          ဘူတာအချင်းချင်း ဘယ်လိုသွားရမလဲ၊ စျေးနှုန်းဘယ်လောက်လဲ စသည်တို့ကို မြန်မာဘာသာဖြင့် မေးမြန်းနိုင်သည့်
          Rule-based လမ်းညွှန် အကူအညီစနစ်။
        </p>

        <div className="mt-8 chip bg-panel rounded-3xl overflow-hidden flex flex-col h-[560px]">
          <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold-2 flex items-center justify-center text-ink">
              <Bot size={18} />
            </span>
            <div>
              <div className="text-sm font-semibold text-paper">BKK Transit AI</div>
              <div className="text-[11px] text-jade flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-jade pulse-dot" /> Online
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'ai' && (
                  <span className="w-7 h-7 rounded-full bg-gold-2/20 text-gold-2 flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </span>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-gold-2 text-ink rounded-br-sm'
                      : 'bg-white/5 text-paper/90 rounded-bl-sm chip'
                  }`}
                >
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <span className="w-7 h-7 rounded-full bg-white/10 text-paper flex items-center justify-center shrink-0">
                    <User size={14} />
                  </span>
                )}
              </motion.div>
            ))}

            <AnimatePresence>
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2.5 items-center"
                >
                  <span className="w-7 h-7 rounded-full bg-gold-2/20 text-gold-2 flex items-center justify-center shrink-0">
                    <Bot size={14} />
                  </span>
                  <div className="chip bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-mist animate-bounce"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={endRef} />
          </div>

          <div className="px-5 py-3 flex flex-wrap gap-2 border-t border-white/10 bg-white/[0.02]">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-[11px] chip bg-white/5 hover:bg-white/10 text-mist hover:text-paper px-3 py-1.5 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="px-5 py-4 border-t border-white/10 flex items-center gap-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="မေးခွန်းရိုက်ထည့်ပါ..."
              className="flex-1 bg-white/5 chip rounded-full px-4 py-3 text-sm text-paper placeholder:text-mist/60 focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <button
              type="submit"
              className="w-11 h-11 shrink-0 rounded-full bg-gold-2 text-ink flex items-center justify-center hover:bg-gold transition-colors"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
        <p className="text-xs text-mist mt-3 text-center">
          * ဤ AI သည် rule-based simulated assistant ဖြစ်ပြီး သတင်းအချက်များကို အခြေခံအဖြစ် ပေးအပ်ခြင်းသာဖြစ်သည်။
        </p>
      </div>
    </section>
  );
}
