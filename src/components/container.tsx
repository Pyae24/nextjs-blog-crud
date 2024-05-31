export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" border-l border-r max-w-[1100px] flex flex-col mx-auto bg-white min-h-screen">
      {children}
    </div>
  );
}
