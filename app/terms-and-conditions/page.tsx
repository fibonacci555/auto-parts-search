import React from 'react'
import { ArrowLeft, FileText, Scale, Globe, AlertTriangle, Shield, Mail, Users } from 'lucide-react'
import Link from 'next/link'

const TermsAndConditions = () => {
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
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                            <FileText className="h-8 w-8 text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                Terms and Conditions
                            </h1>
                            <p className="text-white/60 mt-2">Ecom Insider</p>
                        </div>
                    </div>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Please read these terms and conditions carefully before using our service.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-invert prose-lg max-w-none">
                    {/* Last Updated */}
                    <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                        <p className="text-white/60 text-sm">Last updated: October 05, 2025</p>
                    </div>

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-white/80 text-lg leading-relaxed">
                            Please read these terms and conditions carefully before using Our Service.
                        </p>
                    </div>

                    {/* Section: Interpretation and Definitions */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Scale className="h-5 w-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Interpretation and Definitions</h2>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Interpretation</h3>
                            <p className="text-white/80 leading-relaxed">
                                The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">Definitions</h3>
                            <p className="text-white/80 leading-relaxed mb-6">For the purposes of these Terms and Conditions:</p>
                            
                            <div className="grid gap-4">
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Country</strong> refers to: Portugal</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Ecom Insider.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Service</strong> refers to the Website.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors underline">Terms and Conditions Generator</a>.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">Website</strong> refers to Ecom Insider, accessible from <a href="https://www.ecom-insider.io/" rel="external nofollow noopener" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors underline">https://www.ecom-insider.io/</a></p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-white/90"><strong className="text-purple-300">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section: Acknowledgment */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-green-500/20">
                                <Shield className="h-5 w-5 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Acknowledgment</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                            </p>
                        </div>
                    </section>
                    {/* Section: Links to Other Websites */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-orange-500/20">
                                <Globe className="h-5 w-5 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Links to Other Websites</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                            </p>
                        </div>
                    </section>

                    {/* Section: Termination */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-red-500/20">
                                <AlertTriangle className="h-5 w-5 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Termination</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Upon termination, Your right to use the Service will cease immediately.
                            </p>
                        </div>
                    </section>
                    {/* Section: Limitation of Liability */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-yellow-500/20">
                                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                            </p>
                        </div>
                    </section>

                    {/* Section: "AS IS" and "AS AVAILABLE" Disclaimer */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-gray-500/20">
                                <Shield className="h-5 w-5 text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice.
                            </p>
                            <p className="text-white/80 leading-relaxed mb-4">
                                Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                            </p>
                        </div>
                    </section>
                    {/* Section: Governing Law & Other Legal Sections */}
                    <section className="mb-12">
                        <div className="grid gap-6">
                            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Governing Law</h3>
                                <p className="text-white/80 leading-relaxed">
                                    The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Disputes Resolution</h3>
                                <p className="text-white/80 leading-relaxed">
                                    If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">For European Union (EU) Users</h3>
                                <p className="text-white/80 leading-relaxed">
                                    If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">United States Legal Compliance</h3>
                                <p className="text-white/80 leading-relaxed">
                                    You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Severability and Waiver */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-purple-500/20">
                                <Scale className="h-5 w-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Severability and Waiver</h2>
                        </div>
                        
                        <div className="grid gap-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <h3 className="text-lg font-medium text-purple-300 mb-2">Severability</h3>
                                <p className="text-white/80 leading-relaxed">
                                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                                </p>
                            </div>
                            
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <h3 className="text-lg font-medium text-purple-300 mb-2">Waiver</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section: Changes to Terms */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-orange-500/20">
                                <FileText className="h-5 w-5 text-orange-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Changes to These Terms and Conditions</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                            </p>
                        </div>
                    </section>

                    {/* Section: Contact Us */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Mail className="h-5 w-5 text-blue-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10">
                            <p className="text-white/80 leading-relaxed mb-4">
                                If you have any questions about these Terms and Conditions, You can contact us:
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
                                <FileText className="h-5 w-5 text-white/60" />
                            </div>
                            <p className="text-white/60 text-sm">
                                Generated using <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors underline">TermsFeed Terms and Conditions Generator</a>
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

export default TermsAndConditions