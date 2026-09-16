'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, Send, ClipboardList, CheckCircle2, ArrowRight, Minimize2, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import { useEnquiry } from '@/context/EnquiryContext';

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function EnquiryDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, clearEnquiry } = useEnquiry();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'expanded' | 'sidebar'>('expanded');

  // Disable body scroll strictly on mobile if needed, but rely on lenis prevent otherwise
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  // Reset to expanded when opened
  useEffect(() => {
    if (isDrawerOpen) {
      setViewMode('expanded');
      setErrorMsg(null);
    }
  }, [isDrawerOpen]);

  // Prepare stringified items for the hidden input
  const itemsDetails = items.map(item => 
    `${item.brand ? `[${item.brand}] ` : ''}${item.name} (${item.variant || 'Standard'}) - Qty: ${item.quantity}`
  ).join('\n');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (items.length === 0) {
      setErrorMsg("SYSTEM ALERT: Your cargo hold is empty. Load equipment before hailing us.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMsg(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (!response.ok) throw new Error('Network failure');
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        clearEnquiry();
        closeDrawer();
      }, 3000);
    } catch (error) {
      console.error(error);
      setErrorMsg("NEURAL LINK SEVERED. Transmission failed. Reconnect and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isExpanded = viewMode === 'expanded';

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className={`fixed inset-0 z-[90] transition-colors duration-500 ${isExpanded ? 'bg-zinc-900/60 dark:bg-black/80 backdrop-blur-md' : 'bg-zinc-900/40 dark:bg-black/60 backdrop-blur-sm'}`}
          />
          
          {/* Main Container */}
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className={`fixed z-[110] bg-white dark:bg-[#050505] border border-zinc-200 dark:border-white/10 rounded-[2rem] flex overflow-hidden shadow-2xl ${
              isExpanded 
                ? 'inset-0 m-auto w-[95vw] max-w-6xl h-[90vh] max-h-[800px] flex-col md:flex-row' 
                : 'top-4 right-4 bottom-4 w-[calc(100%-2rem)] max-w-[480px] flex-col'
            }`}
          >
            
            {/* Left Side: Editorial Typography & Brand Presence (Only in Expanded Mode) */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '40%' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="hidden md:flex bg-zinc-50 dark:bg-[#020202] border-r border-zinc-200 dark:border-white/10 p-12 flex-col relative overflow-hidden shrink-0 items-center text-center"
                >
                  {/* Background Accent */}
                  <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                  <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-cyan-500/10 rounded-2xl inline-flex mb-8 items-center justify-center">
                        <ClipboardList className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <motion.h2 layout className="font-heading font-black text-6xl text-zinc-900 dark:text-white leading-[0.9] tracking-tighter mb-6 whitespace-nowrap text-center">
                        YOUR<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">ENQUIRY</span><br/>
                        BOARD
                      </motion.h2>
                      <motion.p layout className="font-body text-zinc-500 dark:text-white/50 text-lg leading-relaxed max-w-sm text-center mx-auto">
                        Review your selected industrial equipment and submit a request for quotation. Our engineering team will respond with competitive pricing within 24 hours.
                      </motion.p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-8 w-full flex justify-center">
                    <div className="flex items-center justify-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-white/30 whitespace-nowrap">
                      <span>Authorized Dealers</span>
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      <span>Pan-India Supply</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right Side: Items & Form */}
            <motion.div 
              layout
              className={`h-full flex flex-col bg-white dark:bg-[#050505] shrink-0 ${isExpanded ? 'w-full md:w-[60%]' : 'w-full'}`}
            >
              
              {/* Header */}
              <div className={`flex items-center justify-between border-zinc-100 dark:border-white/5 bg-white/50 dark:bg-[#050505]/50 backdrop-blur-md relative z-10 ${isExpanded ? 'p-6 md:p-8 md:pl-12 mb-0' : 'p-6 border-b'}`}>
                
                {/* Title Area */}
                <div className={`flex items-center gap-4 ${isExpanded ? 'md:opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="p-2.5 bg-cyan-500/10 rounded-2xl">
                    <ClipboardList className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="font-heading font-black text-lg text-zinc-900 dark:text-white uppercase tracking-widest leading-none">
                      My Enquiry
                    </h2>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mt-1">
                      {items.length} {items.length === 1 ? 'Item' : 'Items'} Added
                    </p>
                  </div>
                </div>

                {/* Controls (Toggle + Close) */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setViewMode(isExpanded ? 'sidebar' : 'expanded')} 
                    className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-zinc-50 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-all shadow-sm"
                    title={isExpanded ? "Collapse to Sidebar" : "Expand to Full View"}
                  >
                    {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={closeDrawer} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-50 dark:bg-white/5 text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10 transition-all shadow-sm"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className={`flex-grow overflow-y-auto relative scroll-smooth custom-scrollbar ${isExpanded ? 'px-6 md:px-12 pb-12' : 'px-6 pb-6'}`} data-lenis-prevent="true">
                {items.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-zinc-500 dark:text-white/40 space-y-5 p-8 min-h-[400px]"
                  >
                    <div className="w-24 h-24 rounded-full bg-zinc-50 dark:bg-white/5 flex items-center justify-center border border-zinc-100 dark:border-white/10">
                      <ClipboardList className="w-8 h-8 opacity-40" />
                    </div>
                    <div className="text-center">
                      <p className="font-heading font-black text-xl text-zinc-900 dark:text-white tracking-tight mb-2 uppercase">Empty Board</p>
                      <p className="font-body text-sm text-zinc-500 dark:text-white/50 max-w-[250px] mx-auto">Add industrial equipment to your enquiry board to request a quote.</p>
                    </div>
                    <Link href="/products" onClick={closeDrawer} className="mt-6 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-mono font-bold text-[10px] uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
                      Browse Catalog <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ) : (
                  <div className={`space-y-8 ${isExpanded ? 'pt-0' : 'pt-6 pb-10'}`}>
                    {/* Item List */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        {isExpanded && <h3 className="font-heading font-black text-sm text-zinc-900 dark:text-white uppercase tracking-widest hidden md:block">Selected Products</h3>}
                        <button onClick={clearEnquiry} className="text-[10px] font-mono font-bold text-red-500 hover:text-red-600 uppercase tracking-widest flex items-center gap-1 ml-auto">
                          <Trash2 className="w-3 h-3" /> Clear All
                        </button>
                      </div>
                      
                      <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                          visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="space-y-3"
                      >
                        <AnimatePresence mode="popLayout">
                          {items.map((item) => (
                            <motion.div 
                              layout
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              key={item.id} 
                              className={`flex ${isExpanded ? 'items-center justify-between' : 'flex-col'} p-4 md:p-5 bg-zinc-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/10 rounded-2xl group hover:border-cyan-500/30 transition-all duration-300`}
                            >
                              <div className={`flex justify-between items-start ${isExpanded ? 'flex-1 pr-6' : 'mb-3'}`}>
                                <div className={isExpanded ? '' : 'pr-4'}>
                                  <h3 className="font-bold text-zinc-900 dark:text-white text-sm md:text-base tracking-tight leading-tight mb-1">{item.name}</h3>
                                  <p className="text-[10px] text-zinc-500 dark:text-white/50 font-mono inline-flex items-center gap-1.5 bg-white dark:bg-black/50 px-2 py-0.5 rounded-md border border-zinc-100 dark:border-white/5 mt-1">
                                    {item.brand && (
                                      <>
                                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">{item.brand}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-white/20" />
                                      </>
                                    )}
                                    <span>{item.category}</span>
                                    {item.variant && (
                                      <>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-white/20" />
                                        <span>{item.variant}</span>
                                      </>
                                    )}
                                  </p>
                                </div>
                                {!isExpanded && (
                                  <button onClick={() => removeItem(item.id)} className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                                    <X className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                              
                              <div className={`flex items-center gap-6 ${isExpanded ? '' : 'justify-between mt-1'}`}>
                                <div className="flex items-center gap-2 bg-white dark:bg-black/40 rounded-full p-1 border border-zinc-200/50 dark:border-white/5 shadow-sm">
                                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" disabled={item.quantity <= 1}>
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="font-mono text-xs font-bold w-6 text-center text-zinc-900 dark:text-white">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                                {isExpanded && (
                                  <button onClick={() => removeItem(item.id)} className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition-all -ml-2">
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Form Section */}
                    <div className="pt-6 border-t border-zinc-100 dark:border-white/10">
                      <div className="mb-6">
                        <h3 className={`font-heading font-black text-zinc-900 dark:text-white tracking-tight ${isExpanded ? 'text-2xl' : 'text-lg uppercase'}`}>
                          {isExpanded ? 'Finalize Request' : 'Request Quote'}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-white/50 mt-1">
                          {isExpanded ? 'Enter your corporate details to receive an official quotation.' : 'We typically respond within 2-4 hours.'}
                        </p>
                      </div>
                      
                      {isSuccess ? (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center flex flex-col items-center justify-center space-y-3 ${isExpanded ? 'py-12' : ''}`}
                        >
                          <div className={`${isExpanded ? 'w-20 h-20' : 'w-12 h-12'} rounded-full bg-emerald-500/10 flex items-center justify-center`}>
                            <CheckCircle2 className={`${isExpanded ? 'w-10 h-10' : 'w-6 h-6'} text-emerald-500`} />
                          </div>
                          <div>
                            <p className={`text-emerald-700 dark:text-emerald-400 font-bold mb-1 ${isExpanded ? 'text-xl' : 'text-sm'}`}>Request Sent Successfully</p>
                            <p className={`text-emerald-600/80 dark:text-emerald-400/80 mx-auto ${isExpanded ? 'text-sm max-w-sm' : 'text-xs max-w-[200px]'}`}>Our sales team will contact you shortly.</p>
                          </div>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4" data-netlify="true" name="product-enquiry" netlify-honeypot="bot-field">
                          <input type="hidden" name="form-name" value="product-enquiry" />
                          <input type="hidden" name="enquiry-items" value={itemsDetails} />
                          <p className="hidden">
                            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                          </p>
                          
                          {errorMsg && (
                            <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-mono font-bold uppercase tracking-widest text-center">
                              {errorMsg}
                            </motion.div>
                          )}
                          
                          <div className={`grid gap-4 ${isExpanded ? 'grid-cols-2' : 'grid-cols-1'}`}>
                            <div className="space-y-1">
                              <label htmlFor="name" className="block text-[9px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest pl-1">Full Name *</label>
                              <input required type="text" id="name" name="name" className="w-full bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm" placeholder="e.g. Rajesh Kumar" />
                            </div>
                            
                            <div className="space-y-1">
                              <label htmlFor="company" className="block text-[9px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest pl-1">Company Name</label>
                              <input type="text" id="company" name="company" className="w-full bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm" placeholder="e.g. Bharat Engineering" />
                            </div>
                          </div>
                          
                          <div className={`grid gap-4 ${isExpanded ? 'grid-cols-2' : 'grid-cols-2'}`}>
                            <div className="space-y-1">
                              <label htmlFor="phone" className="block text-[9px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest pl-1">Phone *</label>
                              <input required type="tel" id="phone" name="phone" className="w-full bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm" placeholder="Phone" />
                            </div>
                            <div className="space-y-1">
                              <label htmlFor="email" className="block text-[9px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest pl-1">Email *</label>
                              <input required type="email" id="email" name="email" className="w-full bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm" placeholder="Email" />
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <label htmlFor="message" className="block text-[9px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest pl-1">Requirements</label>
                            <textarea id="message" name="message" rows={3} className="w-full bg-zinc-50 dark:bg-black/30 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none text-sm" placeholder="Any specific requirements..."></textarea>
                          </div>
                          
                          <div className={`pt-2 ${isExpanded ? 'pt-4' : ''}`}>
                            <button 
                              type="submit" 
                              disabled={isSubmitting || items.length === 0}
                              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-heading font-black text-xs uppercase tracking-widest ${isExpanded ? 'py-5 shadow-xl shadow-cyan-500/30' : 'py-4 shadow-lg shadow-cyan-500/20'} rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]`}
                            >
                              {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4" /> Submit Enquiry</>}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
