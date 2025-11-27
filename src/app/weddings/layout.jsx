import { WeddingHeader, WeddingFooter } from "@/components/common";
import { greatVibes } from "./fonts";

export default function WeddingsLayout({ children }) {
  return (
    <div className={greatVibes.variable}>
      <WeddingHeader />
      <main>{children}</main>
      <WeddingFooter />
    </div>
  );
}
