import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];
const Scroll = () => {
  const fullpages = [
    { text: "Section 1" },
    { text: "Section 2" },
    { text: 'Section 3' }
  ];

  const onLeave = (origin: any, destination: any, direction: any) => {
    console.log("onLeave", { origin, destination, direction });
  }

  return (
    <ReactFullpage
      navigation
      onLeave={onLeave}
      sectionsColor={[...originalColors]}
      render={comp =>
        <ReactFullpage.Wrapper>
          {fullpages.map(({ text }) => (
            <div key={text} className="section">
              <h1>{text}</h1>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      }
    />
  );
};

export default Scroll;
