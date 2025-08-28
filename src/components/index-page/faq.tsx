import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { email, phone } from "@/src/lib/constant";

export default function Faqs() {
  const faqs = [
    {
      q: "Who can live at Obedi Home?",
      a: "All-male residents 18 years old and above with behavioral health needs requiring support with daily living, hygiene, medication, and structured routines.",
    },
    {
      q: "Why is Obedi Home an all-male facility?",
      a: "To provide a safe, structured environment tailored to male behavioral health needs, including programs, routines, and activities that serve them best.",
    },
    {
      q: "What type of care do you provide?",
      a: "24/7 support from trained staff including: hygiene and grooming assistance, meals, housekeeping, medication management, transportation, and structured wellness activities.",
    },
    {
      q: "Do you accept Medicaid Waiver?",
      a: "Yes, Obedi Home accepts Medicaid Waiver to help support residents' care needs.",
    },
    {
      q: "Are rooms private?",
      a: "Yes, every resident has a private room to ensure comfort and personal space.",
    },
    {
      q: "How do you handle medical and behavioral health needs?",
      a: "Staff supervise medications, attend appointments, and coordinate with doctors, therapists, and caseworkers to ensure comprehensive care.",
    },
    {
      q: "Can families and guardians visit?",
      a: "Yes, we encourage family and guardian involvement. Visits can be arranged as part of the resident's care plan.",
    },
    {
      q: "How do I apply or make a referral?",
      a: `Call ${phone} or email ${email}. Our team will guide you through the admission process.`,
    },
  ];
  return (
    <section id="faqs" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-yellow-900">FAQs</h2>
        <p className="mt-2 text-yellow-700">
          Answers to common questions about Obedi Home.
        </p>
      </div>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((f, idx) => (
          <AccordionItem
            key={idx}
            value={`faq-${idx}`}
            className="border-yellow-200"
          >
            <AccordionTrigger className="text-left text-yellow-900 hover:text-yellow-700">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-yellow-700">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
