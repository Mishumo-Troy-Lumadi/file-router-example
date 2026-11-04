export default function RootLayout({ children }: React.PropsWithChildren) {
  return <div className="w-screen h-screen overflow-hidden">{children}</div>;
}
