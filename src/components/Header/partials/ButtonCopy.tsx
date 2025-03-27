"use client";

import { Button } from "@/components/UI/button";
import { usePathname } from "next/navigation";
import { toast, Toaster } from "sonner";

export const ButtonCopy = () => {
  const pathname = usePathname();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${pathname}`);
      toast.success("Link copiato negli appunti!");
    } catch (err) {
      toast.error("Errore durante la copia");
    }
  };

  return (
    <>
      <Button onClick={handleCopy}>Share with client</Button>
    </>
  );
};
