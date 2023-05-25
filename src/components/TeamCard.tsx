export default function TeamCard(props: {
  role: string;
  description: string;
  imgUrl: string;
}) {
  return (
    <div
      className="flex w-full rounded-xl border-[1px] border-[#3a6113] p-5 items-center justify-start gap-10 bg-[#274906] bg-opacity-10 transition-all duration-300 hover:bg-[#2a490c]
    hover:bg-opacity-30 flex-col md:flex-row"
    >
      <img
        src={props.imgUrl}
        className="object-cover w-[200px] h-[200px] rounded-xl"
      />
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start">
        <h1 className="text-3xl text-white uppercase newfont">{props.role}</h1>
        <p className="text-gray-400 uppercase text-md">{props.description}</p>
      </div>
    </div>
  );
}
