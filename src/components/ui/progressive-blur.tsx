import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
  className?: string;
  position?: "top" | "bottom";
  height?: string;
  blurAmount?: string;
};

/**
 * Server Component: Não utiliza hooks.
 * A cor de fundo é resolvida via CSS variable (--background).
 */
export const ProgressiveBlur = ({
  className = "",
  position = "top",
  height = "70px",
  blurAmount = "8px",
}: ProgressiveBlurProps) => {
  const isTop = position === "top";

  return (
    <div
      className={cn(
        // Estrutura Base
        "pointer-events-none fixed left-0 w-full select-none z-[100]",
        // Posicionamento
        isTop ? "top-0" : "bottom-0",
        // Fundo com Gradiente (Usando a cor de fundo do seu tema via Tailwind)
        // O background-image vai do transparente para a cor do seu site
        isTop
          ? "bg-gradient-to-b from-background to-transparent"
          : "bg-gradient-to-t from-background to-transparent",
        // Backdrop Blur (Sintaxe arbitrária para aceitar valor via prop)
        `backdrop-blur-[var(--blur-amount)]`,
        // Máscara de Oclusão (Importante para o efeito progressivo)
        isTop
          ? "[mask-image:linear-gradient(to_bottom,black_50%,transparent)]"
          : "[mask-image:linear-gradient(to_top,black_50%,transparent)]",
        className,
      )}
      style={
        {
          height,
          // Passamos o blurAmount como variável CSS para o Tailwind ler
          "--blur-amount": blurAmount,
        } as React.CSSProperties
      }
    />
  );
};
