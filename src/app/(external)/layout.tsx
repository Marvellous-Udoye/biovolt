import { ExternalShell } from "@/components/external/layout-shell";

export default function ExternalLayout({ children }: { children: React.ReactNode }) {
  return <ExternalShell>{children}</ExternalShell>;
}
