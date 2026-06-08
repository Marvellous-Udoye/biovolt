import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function ExternalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbfcf7] text-[#242824]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

