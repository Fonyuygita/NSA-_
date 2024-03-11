// components/MyStyles.js
export default function MyStyles() {
    return (
      <style jsx global>{`
      body {
        background-color: #222;
        margin: 20px;
        font-family: Arial, sans-serif;
      }
      
      h1 {
        color: #333;
        font-size: 24px;
        margin-bottom: 10px;
      }
      
      p {
        color: #666;
        font-size: 16px;
        margin-bottom: 10px;
      }
      
      blockquote {
        background-color: #f9f9f9;
        border-left: 5px solid #ccc;
        padding: 10px;
        margin: 10px 0;
        font-style: italic;
      }
      
      ol {
        margin-left: 20px;
      }
      
      li {
        margin-bottom: 5px;
      }
      
      `}</style>
    );
  }
  