export default function Footer() {
  return (
    <footer className=" flex flex-col gap-5 items-center justify-center py-10 text-xs">
      <h1 className="text-white/30">
        &copy; {new Date().getFullYear()} Darwis Shathibi. All rights reserved.
      </h1>
    </footer>
  );
}
