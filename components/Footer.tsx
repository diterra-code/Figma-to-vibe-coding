import { Page, Twitter, Globe } from 'iconoir-react';

export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 py-8 mt-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:text-[#FF8C42] transition-colors">
            <Page className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-[#FF8C42] transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-white hover:text-[#FF8C42] transition-colors">
            <Globe className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-[#666666] text-xs">
          © 2023 Wega. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
