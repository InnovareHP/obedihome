import { email, phone } from "@/src/lib/constant";
import { Mail, Phone } from "lucide-react";

export default function footer() {
  return (
    <footer className="border-t border-yellow-200 bg-gradient-to-r from-yellow-600 to-amber-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-yellow-100">
        <div className="flex items-center gap-2">
          <img
            src="/icon/obedi-icon.png"
            alt="Obedi Home"
            className="h-12 w-auto"
          />
          <span>
            © {new Date().getFullYear()} Obedi Home. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${phone.replaceAll("-", "")}`}
            className="inline-flex items-center gap-1 hover:text-yellow-200 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1 hover:text-yellow-200 transition-colors"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
