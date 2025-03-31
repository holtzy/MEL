import html2canvas from "html2canvas";
import { Download } from "lucide-react";

export const DownloadButton = ({
  contentRef,
}: {
  contentRef: React.RefObject<null>;
}) => {
  const handleDownloadClick = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "downloaded-image.png";
        link.href = imgData;
        console.log("just before click!");

        link.click();
      });
    }
  };

  return (
    <div
      className="flex items-center gap-2 mr-12 cursor-pointer"
      onClick={handleDownloadClick}
    >
      <p>Télécharger</p> <Download size={14} />
    </div>
  );
};
