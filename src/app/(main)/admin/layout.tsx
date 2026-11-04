export default function AdminLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full h-full overflow-hidden divide-x">
      <aside className="flex-none w-12 h-full bg-black"></aside>
      <div className="flex flex-col flex-auto w-full overflow-hidden divide-y">
        <nav className="flex-none w-full h-12"></nav>
        <main className="flex-auto w-full overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
