import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#ddc0b7] bg-[#fdf9f4]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-bold text-[#1c1c19]">mYcutter</p>
            <p className="text-sm text-[#56423b] mt-1">
              Fast, offline video editor for Mac.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/support"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#56423b] hover:text-[#9f3f1a] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <p className="text-xs text-[#8a726a] mt-8 text-center">
          © 2026 mYcutter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
