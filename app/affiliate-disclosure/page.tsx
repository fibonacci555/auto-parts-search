import React from 'react'
import { ArrowLeft, DollarSign, Heart, Shield, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const AffiliateDisclosure = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.1),transparent_60%)]" />
                <div className="relative max-w-4xl mx-auto px-6 py-16">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10">
                            <DollarSign className="h-8 w-8 text-green-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent">
                                Affiliate Disclosure
                            </h1>
                            <p className="text-white/60 mt-2">Ecom Insider</p>
                        </div>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Complete transparency about how we earn commissions and our commitment to honest recommendations.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-invert prose-lg max-w-none">
                    {/* Last Updated */}
                    <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm">Last Updated: 6th October 2025</p>
                    </div>

                    {/* Transparency Statement */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-green-500/20">
                                <Shield className="h-5 w-5 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Transparency Statement</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed text-lg">
                                Ecom-insider.io participates in affiliate marketing programs. This means we earn commissions when you purchase tools or services through the links on our website.
                            </p>
                        </div>
                    </section>

                    {/* How It Works */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <DollarSign className="h-5 w-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">How It Works</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed">
                                When you click on a tool link or use a discount code from our site and make a purchase, we may receive a commission from that company at no additional cost to you. The price you pay remains the same whether you use our link or go directly to the provider.
                            </p>
                        </div>
                    </section>

                    {/* Our Commitment */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                                <Heart className="h-5 w-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Our Commitment</h2>
                        </div>
                        
                        <div className="grid gap-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <h3 className="text-lg font-medium text-purple-300 mb-2">Honest Recommendations</h3>
                                <p className="text-white/80 leading-relaxed">
                                    We only feature tools that we believe provide real value to Ecom businesses. Our rankings and recommendations are based on actual operator experience, not commission rates.
                                </p>
                            </div>
                            
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <h3 className="text-lg font-medium text-purple-300 mb-2">Exclusive Pricing</h3>
                                <p className="text-white/80 leading-relaxed">
                                    The discount codes and deals on this site are negotiated specifically for our audience. You're getting pricing that isn't publicly available elsewhere.
                                </p>
                            </div>
                            
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <h3 className="text-lg font-medium text-purple-300 mb-2">100% Transparency</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Every dollar earned through affiliate commissions is donated to charity and publicly tracked on our X/Twitter account <a href="https://x.com/patwerx" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors underline">(@patwerx)</a>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FTC Compliance */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-orange-500/20">
                                <Shield className="h-5 w-5 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">FTC Compliance</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed">
                                This disclosure is in accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
                            </p>
                        </div>
                    </section>

                    {/* No Bias */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-red-500/20">
                                <Heart className="h-5 w-5 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">No Bias</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                While we earn commissions, this does not influence our editorial decisions. Tools are ranked based on:
                            </p>
                            
                            <div className="grid gap-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <p className="text-white/90">Real operator feedback</p>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <p className="text-white/90">Performance and reliability</p>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <p className="text-white/90">Value for money</p>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <p className="text-white/90">Customer support quality</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Questions */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Mail className="h-5 w-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Questions?</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                If you have questions about our affiliate relationships or how we select and rank tools, contact us at:
                            </p>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <a href="mailto:pwbusinessmail7@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                    pwbusinessmail7@gmail.com
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 bg-black/50 backdrop-blur">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5">
                                <DollarSign className="h-5 w-5 text-white/60" />
                            </div>
                            <p className="text-white/60 text-sm">
                                Transparent affiliate relationships for your peace of mind
                            </p>
                        </div>
                        <Link 
                            href="/" 
                            className="text-white/60 hover:text-white transition-colors text-sm"
                        >
                            Back to Ecom Insider
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AffiliateDisclosure
