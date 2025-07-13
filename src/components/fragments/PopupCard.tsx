import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface PopupCardProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const PopupCard: React.FC<PopupCardProps> = ({ open, onClose, children }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.2, pointerEvents: "auto" });
      gsap.fromTo(
        popupRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.2, pointerEvents: "none" });
      gsap.to(popupRef.current, { y: 100, opacity: 0, scale: 0.95, duration: 0.3, ease: "power3.in" });
    }
  }, [open]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      style={{ pointerEvents: open ? "auto" : "none", opacity: 0 }}
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="
          bg-white rounded-xl shadow-2xl
          w-[90vw] max-w-sm
          h-[70vh] max-h-[80vh]
          p-6 relative flex flex-col
          items-center
        "
        style={{ opacity: 0, overflow: "hidden" }}
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="overflow-y-auto pr-2 w-full" style={{ maxHeight: "60vh" }}>
          {children || (
            <div>
              <h2 className="text-xl font-bold mb-2">Surat Untukmu</h2>
              <p>
                Selamat ulang tahun! Semoga hari-harimu selalu bahagia dan penuh warna.
                <br />
                <br />
                (Isi surat bisa diganti sesuai kebutuhan)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupCard;