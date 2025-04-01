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

        // Open in a new tab
        const newTab = window.open();
        if (!newTab) {
          return;
        }
        newTab.document.write(
          '<img src="' + imgData + '" style="max-width: 100%;">'
        );
        newTab.document.title = "Download Image";
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
