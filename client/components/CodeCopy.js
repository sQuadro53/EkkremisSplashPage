import React, { useState } from "react";
import '../styles/Docs.css';

function CodeCopy({ copyText }) {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });

      return () => {isCopied ? "Copied!" : "Copy"} 
  };

  return (
    <div>
      <input type="text" className='code' value={copyText} readOnly onClick={handleCopyClick}/>
      {/* <pre> */}
          {/* <code className="language-sh">npm install {'\n'}npm run build</code> */}
        {/* </pre> */}
    </div>
  );
}

export default CodeCopy;


