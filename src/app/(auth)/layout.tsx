export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full h-full divide-x overflow-hidden">
      <section className="w-1/2 h-full bg-black"></section>
      <section className="w-1/2 h-full">{children}</section>
    </div>
  );
}
