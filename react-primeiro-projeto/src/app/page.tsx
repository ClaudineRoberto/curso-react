import { EmojiRating } from "./components/EmojiRating";

const Page = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-950 text-white w-screen h-screen flex items-center justify-center">
      <EmojiRating rate={3.45} />
    </div>
  );
};



export default Page;
