import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | Wedgy";
  }, []);
  return (
    <main id="main-content" className="min-h-[calc(100vh-9.25rem)]">
      <h1 className="font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        CONTACT
      </h1>
      <p className="text-center mt-24 mb-24">wedgefundmusic@gmail.com</p>
    </main>
  );
}
