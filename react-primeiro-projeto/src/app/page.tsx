"use client"

import { useState } from "react";
import { PhotoItem } from "./components/PhotoItem";
import { photoList } from "./data/photoList";
import { Modal } from "./components/Modal";

const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }



  return (
    <div className="flex items-center justify-center bg-blue-900">

      <div className="container max-w-8xl mt-20 mb-20 bg-gray-300 rounded-xl">
        <h1 className="text-center text-3xl font-bold my-10 text-black">Fotos</h1>
        <section className="container max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {photoList.map(item => (
            <PhotoItem

              key={item.id}
              photo={item}
              onClick={() => openModal(item.id)}
            />
          ))}

        </section>

        {showModal &&
          <Modal image={imageOfModal} closeModal={closeModal} />
        }
      </div>



    </div>
  );
};

export default Page;

