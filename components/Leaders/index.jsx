import Leader from "./Leader";
import { H2 } from "../ui/textTypes";

export default function Leaders() {
  const images = [
    {
      url: "/about/desktop/avatar-jake.jpg",
      name: "Jake Richards",
      title: "Chief Architect",
    },
    {
      url: "/about/desktop/avatar-thompson.jpg",
      name: "Thompson Smith",
      title: "Head of Finance",
    },
    {
      url: "/about/desktop/avatar-jackson.jpg",
      name: "Jackson Rourke",
      title: "Lead Designer",
    },
    {
      url: "/about/desktop/avatar-maria.jpg",
      name: "Maria Simpson",
      title: "Senior Architect",
    },
  ];
  return (
    <>
      <div
        css={{
          display: "inline-block",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <H2 css={{ width: 0, overflow: "visible" }}>The Leaders</H2>
        <div
          css={{
            "@media (min-width: 426px)": {
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "11px",
            },
          }}
        >
          {images.map((img) => (
            <Leader
              imageUrl={img.url}
              name={img.name}
              title={img.title}
              key={img.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}
