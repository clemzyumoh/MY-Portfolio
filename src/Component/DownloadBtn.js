import React from "react";

function DownloadLink({ url, fileName, buttonText }) {
  return (
    <a
      href={url}
      download={fileName}
      // target="_blank"
      rel="noopener noreferrer"
      className="download-button"
    >
      {buttonText}
    </a>
  );
}

export default DownloadLink;
