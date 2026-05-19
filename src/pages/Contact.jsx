import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PageTransition from '../components/PageTransition.jsx';

function Contact() {
  return (
    <PageTransition>
      <section className="space-y-12">
        <SectionHeading title="Contact" subtitle="Get in touch" />

        <div className="grid gap-8 xl:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8 rounded-[2rem] border border-slate-800/75 bg-slate-950/80 p-8 shadow-glow">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white">Let&apos;s build something great.</h3>
              <p className="text-slate-300">Reach out for collaborations, freelance projects, or a quick chat about your next release.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-3xl border border-slate-800/75 bg-slate-900/80 p-5">
                <FaEnvelope className="mt-1 h-5 w-5 text-sky-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                  <p className="text-slate-200">alex@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-slate-800/75 bg-slate-900/80 p-5">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 text-sky-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Location</p>
                  <p className="text-slate-200">New York, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-3xl border border-slate-800/75 bg-slate-900/80 p-5">
                <FaPhoneAlt className="mt-1 h-5 w-5 text-sky-400" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Phone</p>
                  <p className="text-slate-200">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
