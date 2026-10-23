import Image from "next/image";
import { company } from "@/lib/data";

export default function Logo({
  className = "h-8 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    // bg-canvas gives the blend a guaranteed local backdrop to mix against —
    // without it, "lighten" has nothing to blend with whenever an ancestor
    // (e.g. a fixed/z-indexed header) creates its own stacking context.
    <span className="inline-flex bg-canvas">
      <Image
        src="/logo.png"
        alt={company.brand}
        width={1520}
        height={624}
        priority={priority}
        // The source file has a solid black background (no alpha channel).
        // "lighten" blend mode drops pure black against bg-canvas above
        // so it reads as transparent, without needing a re-exported asset.
        className={`mix-blend-lighten ${className}`}
      />
    </span>
  );
}
