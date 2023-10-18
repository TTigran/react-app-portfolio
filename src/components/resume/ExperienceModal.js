import React, { useState } from 'react';
import Modal from 'react-modal';

const ExperienceModal = ({ title, subTitle, result, des }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-full h-1/4 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
            </div>
            <div
                className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne"
                onClick={openModal} // Open the modal when the card is clicked
            >
                <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                            {title}
                        </h3>
                        <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                            {result}
                        </p>
                    </div>
                </div>
                <div className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 description">
                    {des}
                </div>
                <div>Click on me READ MORE ...</div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Card Details"
                style={{
                    overlay: {
                        backgroundColor: 'rgb(0 0 0 / var(--tw-bg-opacity));',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '10px',
                        width: '100%',
                        maxWidth: '600px',
                    },
                }}
            >
                <h1><b>{title}</b></h1>
                <p>{subTitle}</p><br/>
                <p>{des}</p>
                <br/>
                <div style={{color:"red"}}  onClick={closeModal}>
                    Close
                </div>
            </Modal>
        </div>
    );
};

export default ExperienceModal;