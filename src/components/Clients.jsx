import { useEffect } from "react";
import { useState } from "react";
import { clientsData } from "../data/clients.js";

function Clients() {

  const [currentPage, setCurrentPage] = useState(0); // Estado de página actual
  const [itemsPerPage, setItemsPerPage] = useState(1); // Por defecto, 3 reseñas por página

  useEffect(() => {
      const updateItemsPerPage = () => {
          if (window.innerWidth <= 767) {
              setItemsPerPage(1); 
          }
          
          else if (window.innerWidth >= 767 && window.innerWidth < 1280) {
              setItemsPerPage(2); 
          }
          else {
              setItemsPerPage(3);
          }
      };

      updateItemsPerPage(); 
      window.addEventListener("resize", updateItemsPerPage); 

      return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);


  const totalPages = Math.ceil(clientsData.length / itemsPerPage); 

  const startIndex = currentPage * itemsPerPage; 
  const displayedClients = clientsData.slice(startIndex, startIndex + itemsPerPage); 


  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages); 

  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  
    return (
        <section id="clients" className="scroll-mt-10 md:scroll-mt-16 clients-container bg-clients flex flex-col items-center justify-center p-4 gap-4">
            
            <h3 className="text-4xl font-bold text-center py-5 sm:text-5xl lg:text-6xl">What our clients said</h3>

            <div className="clients-items flex flex-row items-center md:gap-8 justify-center">
               {displayedClients.map((client) => (
                 <div key={client.id} className="flex flex-col gap-4 items-center justify-center p-4 border-gradient
                 w-70 h-110 sm:w-80 sm:h-120 lg:w-90 lg:h-130
                 ">
                    <img className="w-38 h-38 rounded-full object-cover border-gold border-2 sm:w-48 sm:h-48 lg:w-58 lg:h-58" src={client.picture} alt={client.name} />
                    <p className="text-lg font-semibold sm:text-xl lg:text-2xl">{client.name}</p>
                    <p className="text-white text-md sm:text-lg"><i>"{client.review}"</i></p>
                 </div>
                ))}
            </div>

      <div className="flex justify-center gap-4 mt-6 mb-11 md:text-lg xl:text-xl">
        <button onClick={handlePrev} className="cursor-pointer px-4 py-2 md:px-6 bg-gold rounded-lg text-black hover:bg-darkgold transition-all ease-in-out">Previous</button>
        <button onClick={handleNext} className="cursor-pointer px-4 py-2 md:px-6 bg-gold rounded-lg text-black hover:bg-darkgold transition-all ease-in-out">Next</button>
      </div>

        </section>
    )
}

export default Clients