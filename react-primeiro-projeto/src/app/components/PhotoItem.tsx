import { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img className="rounded-md w-full h-48" src={`/assets/${photo.url}`} alt="" />
        </div>
    );
}