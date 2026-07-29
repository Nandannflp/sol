import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var originalFetch = window.fetch;
                var descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
                if (descriptor && !descriptor.set) {
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return originalFetch; },
                    set: function(val) { /* ignore */ },
                    configurable: true,
                    enumerable: true
                  });
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
