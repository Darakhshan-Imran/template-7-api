'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

type CopyButtonProps = {
    textToCopy: string;
};

export default function CopyButton({ textToCopy }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1 text-sm text-gray-500 transition-colors bg-gray-100 rounded-md hover:bg-gray-200"
        >
            {copied ? (
                <>
                    <Check size={16} />
                    <span>Copied!</span>
                </>
            ) : (
                <>
                    <Copy size={16} />
                    <span>Copy API URL</span>
                </>
            )}
        </button>
    );
} 