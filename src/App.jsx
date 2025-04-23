import "./App.css";
import person_1 from "./assets/person_1.png";
import person_2 from "./assets/person_2.png";
import person_3 from "./assets/person_3.png";
import person_4 from "./assets/person_4.png";
import person_5 from "./assets/person_5.png";
import Card from "./Card.jsx";
import arrow from "./assets/arrow up right.svg";
import bgImage from "./assets/Background_decor@2x.png";

function App() {
  const people = [
    {
      name: "Liam Novak",
      job: "Software Engineer",
      img: person_1,
      color: "#C1B6F8",
    },
    {
      name: "Sophia Moretti",
      job: "Business Development Manager",
      img: person_2,
      color: "#EDACD2",
    },
    {
      name: "Ethan Rossi",
      job: "Business Development Manager",
      img: person_3,
      color: "#9DC4F8",
    },
    {
      name: "Isabella Ricci",
      job: "UX Designer",
      img: person_4,
      color: "#F8D8B0",
    },
    {
      name: "Noah Conti",
      job: "Content Creator",
      img: person_5,
      color: "#86E7D4",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen font-sora bg-[#FFFEFE]">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-3/4 h-3/4 grid grid-cols-1 m-5 overflow-hidden  bg-no-repeat bg-top-left bg-[#F3F4F6] rounded-2xl sm:grid-cols-3   md:grid-cols-4"
      >
        <div className=" pb-5 sm:col-span-3 lg:col-span-2 pt-7 pl-8 flex flex-col gap-2  ">
          <span className="text-[#263FA9] text-[14px] sm:text-[16px]">
            Our team
          </span>
          <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold">
            Meet the brain
          </h1>
          <p className="text-[14px] sm:text-[16px] text-left text-[#394150]">
            We are proud to have them as part of our community and look forward
            to continuing to push the boundaries of what's possible in the world
            of digital art.
          </p>
        </div>
        {people.map((person) => {
          return (
            <Card
              name={person.name}
              image={person.img}
              job={person.job}
              color={person.color}
            />
          );
        })}
        <div className="pt-40 content-end pb-7 pl-8 text-[14px] gap lg:row-start-2">
          <div className="flex gap-2">
            <p className="text-[#394150] font-bold"> See all members</p>
            <img className="size-5" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
