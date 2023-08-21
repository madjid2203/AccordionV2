import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(1);

  return (
    <div>
      {data.map((item) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          num={data.indexOf(item) + 1}
          title={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ children, curOpen, setCurOpen, num, title, text }) {
  function clickHandle() {
    setCurOpen(curOpen === num ? null : num);
  }

  return (
    <div
      className={`item ${curOpen === num ? "open" : ""}`}
      onClick={clickHandle}
    >
      <p className="num">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{curOpen === num ? "-" : "+"}</p>
      <div
        className="content-box"
        style={curOpen === num ? {} : { display: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
