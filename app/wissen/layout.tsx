import ExitIntent from "../components/ExitIntent";

export default function WissenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ExitIntent />
    </>
  );
}
