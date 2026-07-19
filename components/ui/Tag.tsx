export function Tag({ label }: { readonly label: string }) {
  return (
    <span className="rounded-full border border-line bg-ink/60 px-3 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-mint/50 hover:text-mint">
      {label}
    </span>
  );
}
