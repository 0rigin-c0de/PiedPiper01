import ReactHtmlParser from "react-html-parser";

const DetailsBody = ({ data }) => {
  return (
    <div className="mt-8 md:mt-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-normal">
        {data.title}
      </h1>
      <img src={data.image} alt={data.title} className="mt-4 w-full " />
      <div className="mt-12 md:text-xl text-lg tracking-wider leading-relaxed text-justify">
        {ReactHtmlParser(data.body)}
      </div>
    </div>
  );
};

export default DetailsBody;
