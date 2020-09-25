import React from "react";

const LinkBox = ({ hashid, url }) => {
  //   console.log("props", hashid);
  return (
    <div>
      <div>
        <p>{url}</p>
      </div>
      <div>
        <a href={`https://rel.ink/${hashid}`}>{`https://rel.ink/${hashid}`}</a>
        <button>COPY</button>
      </div>
    </div>
  );
};

export default LinkBox;
