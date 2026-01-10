import { type HTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';

export interface APIResponseProps extends HTMLAttributes<HTMLDivElement> {
  status?: number;
  statusText?: string;
  response: object;
}

export function APIResponse({
  status = 200,
  statusText = 'OK',
  response,
  className,
  ...props
}: APIResponseProps) {
  const statusColor =
    status >= 200 && status < 300
      ? 'text-green-500'
      : status >= 400
      ? 'text-red-500'
      : 'text-yellow-500';

  const formatJSON = (obj: object): string => {
    return JSON.stringify(obj, null, 2);
  };

  const highlightJSON = (json: string): string => {
    return json
      .replace(/"([^"]+)":/g, '<span class="text-purple-400">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
      .replace(/: (\d+)/g, ': <span class="text-orange-400">$1</span>')
      .replace(/: (true|false|null)/g, ': <span class="text-orange-400">$1</span>');
  };

  return (
    <div
      className={cn(
        'bg-[#1a1b26] border border-[#2a2b3d] rounded-xl overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1b26] border-b border-[#2a2b3d]">
        <span className="text-sm text-muted-foreground font-mono">Response</span>
        <span className={cn('text-sm font-medium', statusColor)}>
          HTTP {status} {statusText && `- ${statusText}`}
        </span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code
            dangerouslySetInnerHTML={{ __html: highlightJSON(formatJSON(response)) }}
          />
        </pre>
      </div>
    </div>
  );
}
