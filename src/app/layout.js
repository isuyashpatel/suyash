import './globals.css';

export const metadata = {
  title: 'Suyash Patel',
  description:
    'I am final year undergraduate student and a Developer with strong passion and dedication for self - improvement. I love to learn new technolgies and to create new stuffs related to Software Development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
