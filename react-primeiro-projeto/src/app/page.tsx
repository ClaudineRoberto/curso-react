const currentTime =  new Date().toLocaleTimeString("pt-br", {
  hour: "2-digit",
  minute: "2-digit",
});

const greeting = () => {
   if (currentTime >= "0" && currentTime < "12") {
     return "Bom dia";
   } else if (currentTime >= "12" && currentTime < "18") {
     return "Boa tarde";
   } else {
     return "Boa noite";
   }
    };

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-950 text-white w-screen h-screen flex flex-col items-center justify-center">
      <div className='text-9xl'>{currentTime}</div>
      <div className='text-5xl font-bold'>{greeting()}</div>
    </div>
  );
};



export default Page;

