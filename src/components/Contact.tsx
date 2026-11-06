import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, AlertCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from '../data/content';
import { ContactFormData } from '../types';

interface ContactProps {
  selectedServicePreset?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    bookTitle: '',
    bookGenre: '',
    serviceInterestedIn: selectedServicePreset || 'Book Promotion',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<{
    success: boolean;
    message: string;
    preparedBody?: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync if preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({
        ...prev,
        serviceInterestedIn: selectedServicePreset,
      }));
    }
  }, [selectedServicePreset]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.bookTitle.trim()) {
      newErrors.bookTitle = 'Please enter your book title or working project title.';
    }

    if (!formData.bookGenre.trim()) {
      newErrors.bookGenre = 'Please specify the genre or subject matter.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a brief description of your project goals.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(
      `Project Enquiry: "${formData.bookTitle}" - ${formData.serviceInterestedIn} (${formData.fullName})`
    );

    const preparedEmailBody = `Dear Arthur Wells Team,

I would like to discuss a book promotion and strategy collaboration.

--- AUTHOR & PROJECT DETAILS ---
Author Name: ${formData.fullName}
Author Email: ${formData.email}
Book Title: ${formData.bookTitle}
Genre: ${formData.bookGenre}
Primary Service Interested In: ${formData.serviceInterestedIn}

--- ABOUT THE PROJECT & VISION ---
${formData.projectDetails}

---
Sent via Arthur Wells Portfolio Enquiry`;

    const encodedBody = encodeURIComponent(preparedEmailBody);
    const mailtoUrl = `mailto:${BRAND_CONFIG.email}?subject=${emailSubject}&body=${encodedBody}`;

    // Open mailto client
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setSubmittedStatus({
      success: true,
      message: `Your default email client has been opened with your inquiry prepared for ${BRAND_CONFIG.email}. If your mail app did not open automatically, you can also copy the prepared inquiry below and send it directly!`,
      preparedBody: preparedEmailBody,
    });
  };

  const handleCopyInquiry = async () => {
    if (!submittedStatus?.preparedBody) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(submittedStatus.preparedBody);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
    } catch {
      // Fallback below
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = submittedStatus.preparedBody;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Text remains selectable on screen
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              START THE CONVERSATION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
            Let's Make Your Next Chapter Count.
          </h2>
          <div className="mt-4 space-y-2 text-[#252525]/80 font-light text-sm sm:text-base leading-relaxed">
            <p>
              Whether you're preparing to launch a new book, looking to improve your book's visibility, or building your author brand, we'd love to hear what you're working on.
            </p>
            <p className="font-serif italic text-base text-[#080808]">
              Tell us about your book and the vision behind it.
            </p>
          </div>
        </div>

        {/* 2-Column Contact Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries & Agency Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="p-8 bg-[#F8F7F3] border border-[#EAEAEA]">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#252525]/70 block mb-2">
                DIRECT INQUIRIES
              </span>
              <p className="font-serif text-2xl font-medium text-[#080808] mb-4">
                We Review Every Submission Personally.
              </p>
              <p className="text-xs text-[#252525]/75 leading-relaxed font-light mb-6">
                Arthur Wells accepts a limited number of author partnerships each season to ensure uncompromising focus and strategic rigor.
              </p>

              {/* Business Email Callout */}
              <div className="pt-6 border-t border-[#EAEAEA]">
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#252525]/60 mb-2 font-medium">
                  Direct Agency Email:
                </div>
                <a
                  href={`mailto:${BRAND_CONFIG.email}?subject=Author%20Inquiry%20-%20Arthur%20Wells`}
                  className="font-serif text-xl sm:text-2xl text-[#080808] hover:text-[#252525] hover:underline underline-offset-4 flex items-center gap-2 group transition-colors break-all"
                >
                  <Mail className="w-5 h-5 shrink-0 text-[#080808]" />
                  <span>{BRAND_CONFIG.email}</span>
                </a>
              </div>
            </div>

            {/* Second CTA Card */}
            <div className="p-8 border border-[#080808] bg-[#080808] text-[#F8F7F3]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#F8F7F3]/70 block mb-2 font-semibold">
                PREFERRED COMMUNICATION
              </span>
              <h3 className="font-serif text-2xl font-medium mb-3">
                Prefer an Open Email?
              </h3>
              <p className="text-xs text-[#EAEAEA]/80 font-light leading-relaxed mb-6">
                If you already have a book proposal, press kit, or manuscript synopsis ready, you can email our studio directly.
              </p>

              <a
                href={`mailto:${BRAND_CONFIG.email}?subject=Author%20Proposal%20Submission`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F8F7F3] text-[#080808] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white transition-colors"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 bg-[#FFFFFF] border border-[#EAEAEA] text-xs text-[#252525]/70 space-y-2">
              <div className="flex items-center gap-2 font-semibold uppercase tracking-wider text-[#080808]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>What Happens Next?</span>
              </div>
              <p className="font-light leading-relaxed">
                We review your book genre, current release status, and objectives within 2 business days. If there is mutual alignment, we schedule a strategic preliminary consultation.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F7F3] border border-[#080808]/20 p-8 lg:p-10 shadow-xs">
              <h3 className="font-serif text-2xl font-medium text-[#080808] mb-2 uppercase">
                Project Consultation Form
              </h3>
              <p className="text-xs text-[#252525]/70 font-light mb-8">
                Please complete all fields to help us understand your literary vision.
              </p>

              {submittedStatus && (
                <div className="mb-8 p-6 bg-[#FFFFFF] border border-[#080808] space-y-4 animate-in fade-in">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#080808]">
                        Email Application Triggered
                      </h4>
                      <p className="text-xs text-[#252525]/85 leading-relaxed font-light mt-1">
                        {submittedStatus.message}
                      </p>
                    </div>
                  </div>

                  {submittedStatus.preparedBody && (
                    <div className="pt-3 border-t border-[#EAEAEA]">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider text-[#252525]/70 font-semibold">
                          Backup: Prepared Message Text
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyInquiry}
                          className="inline-flex items-center gap-1.5 text-xs text-[#080808] font-semibold hover:underline cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Copied to Clipboard!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Prepared Text</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-[11px] bg-[#F8F7F3] p-3 border border-[#EAEAEA] text-[#252525] font-mono whitespace-pre-wrap max-h-40 overflow-y-auto">
                        {submittedStatus.preparedBody}
                      </pre>
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#080808] placeholder-[#252525]/40 focus:outline-hidden focus:ring-1 focus:ring-[#080808] ${
                        errors.fullName ? 'border-red-500' : 'border-[#EAEAEA]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. author@publisher.com"
                      className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#080808] placeholder-[#252525]/40 focus:outline-hidden focus:ring-1 focus:ring-[#080808] ${
                        errors.email ? 'border-red-500' : 'border-[#EAEAEA]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Book Title & Book Genre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="bookTitle"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                    >
                      Book Title / Project Name *
                    </label>
                    <input
                      type="text"
                      id="bookTitle"
                      value={formData.bookTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, bookTitle: e.target.value })
                      }
                      placeholder="e.g. The Architecture of Silence"
                      className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#080808] placeholder-[#252525]/40 focus:outline-hidden focus:ring-1 focus:ring-[#080808] ${
                        errors.bookTitle ? 'border-red-500' : 'border-[#EAEAEA]'
                      }`}
                    />
                    {errors.bookTitle && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.bookTitle}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="bookGenre"
                      className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                    >
                      Book Genre / Category *
                    </label>
                    <input
                      type="text"
                      id="bookGenre"
                      value={formData.bookGenre}
                      onChange={(e) =>
                        setFormData({ ...formData, bookGenre: e.target.value })
                      }
                      placeholder="e.g. Literary Fiction, Narrative Non-Fiction, Memoir"
                      className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#080808] placeholder-[#252525]/40 focus:outline-hidden focus:ring-1 focus:ring-[#080808] ${
                        errors.bookGenre ? 'border-red-500' : 'border-[#EAEAEA]'
                      }`}
                    />
                    {errors.bookGenre && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.bookGenre}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Interested In */}
                <div>
                  <label
                    htmlFor="serviceInterestedIn"
                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="serviceInterestedIn"
                    value={formData.serviceInterestedIn}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceInterestedIn: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#EAEAEA] text-sm text-[#080808] focus:outline-hidden focus:ring-1 focus:ring-[#080808] cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Comprehensive Author Engagement (Multiple Services)">
                      Comprehensive Author Engagement (Multiple Services)
                    </option>
                    <option value="Other / Advisory Consultation">
                      Other / Advisory Consultation
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] mb-2"
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: e.target.value,
                      })
                    }
                    placeholder="Share your publishing timeline, target readers, previous promotional efforts, and what you hope to achieve with Arthur Wells..."
                    className={`w-full px-4 py-3 bg-[#FFFFFF] border text-sm text-[#080808] placeholder-[#252525]/40 focus:outline-hidden focus:ring-1 focus:ring-[#080808] ${
                      errors.projectDetails ? 'border-red-500' : 'border-[#EAEAEA]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.projectDetails}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.22em] font-semibold hover:bg-[#252525] transition-all duration-200 border border-[#080808] flex items-center justify-center gap-2 cursor-pointer shadow-xs active:translate-y-px"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {isSubmitting ? 'PREPARING ENQUIRY...' : 'SEND YOUR PROJECT ENQUIRY'}
                  </span>
                </button>

                <p className="text-[11px] text-center text-[#252525]/60 font-light">
                  Submissions open your client's email application with your answers formatted directly for {BRAND_CONFIG.email}.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
