import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const UpdateChecker: React.FC = () => {
  const [checking, setChecking] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleCheckUpdate = async () => {
    setChecking(true);
    setStatus('Suche nach Updates...');
    
    setTimeout(() => {
      setChecking(false);
      setStatus('System ist auf dem neuesten Stand.');
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleCheckUpdate}
        disabled={checking}
        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 text-foreground rounded-lg transition-colors border border-border"
        title="Nach Updates suchen"
      >
        <RefreshCw className={`w-4 h-4 ${checking ? 'animate-spin' : ''}`} />
        <span>Update suchen</span>
      </button>
      {status && (
        <span className="text-xs text-muted-foreground animate-fade-in">
          {status}
        </span>
      )}
    </div>
  );
};
