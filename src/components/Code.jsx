
import { CodeBlock } from 'react-code-block';
import { codeToTokens } from 'shiki';
import { MdContentCopy } from "react-icons/md";
import { useState,useEffect } from 'react';
import { IoMdCheckmark } from "react-icons/io";
function MyCodeBlock({ code, language, isCopy ,handleCopy }) {
    
     
  return (
    <CodeBlock code={code} language={language} className="bg-white p-6  rounded-xl shadow-lg">
      
      <CodeBlock.Code className="custom-gray p-6 rounded-xl shadow-lg relative ">
      <div className=' absolute top-4 right-4 text-white p-2 cursor-pointer '>
      <button onClick={handleCopy}>
        {isCopy ? <IoMdCheckmark className='w-4 h-4' /> :  <MdContentCopy className='w-4 h-4' />}
      </button>
     
        </div>
        <div className="table-row text-xs">
          <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CodeBlock.LineContent className="table-cell">
            <CodeBlock.Token />
          </CodeBlock.LineContent>
        </div>
      </CodeBlock.Code>
    </CodeBlock>
  );
}

export default MyCodeBlock;

// Runs preferably in a server-like environment
