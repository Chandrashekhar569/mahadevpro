import { useState } from 'react';
import { Trophy } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ResilientImage({ src, alt, title, className = '' }: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161B26] via-[#0F131C] to-[#090B10] text-zinc-400 p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Trophy className="w-8 h-8 text-amber-500/70 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium text-zinc-300 text-center">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
