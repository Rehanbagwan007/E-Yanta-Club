import { Dna } from 'lucide-react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary/20 p-2 rounded-lg">
        <Dna className="text-primary" />
      </div>
      <span className="font-headline text-xl font-semibold text-foreground">
        E-Yantra PVPIT
      </span>
    </Link>
  );
};

export default Logo;
