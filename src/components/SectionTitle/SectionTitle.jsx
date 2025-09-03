
const SectionTitle = ({subHading, hading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8  ">
           <p className="text-yellow-600 mb-3 ">----{subHading}----</p> 
           <h2 className="text-4xl uppercase border-y-2 py-4">{hading}</h2>
        </div>
    );
};

export default SectionTitle;