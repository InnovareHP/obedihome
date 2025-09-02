import { email, phone } from "@/src/lib/constant";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
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
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <a
              href="https://share.google/PoFZP3ddyOfc1XNE3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
            >
              3036 Perry Ave SW, Wyoming, MI 49519, United States
            </a>
          </div>
          <div className="flex items-center gap-4 justify-center sm:justify-end">
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
      </div>
    </footer>
  );
}
