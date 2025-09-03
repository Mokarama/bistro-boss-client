
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './featured.css'
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
  return (
    <div className='bg-image-style bg-fixed'>
      <div className=" text-white">
        <SectionTitle
          subHading={"Check it out"}
          hading={"From our menu"}
        ></SectionTitle>
      </div>

      <div className='flex gap-10 text-white mx-10 bg-slate-600 px-20 py-5 opacity-80'>
          <img className='w-2/4 h-[300px]' src={featuredImg} alt="" />

          <div className=''>
            <h3 className='text-xl'>March 20, 2025</h3>
            <p className='text-xl uppercase'>Where can get some?</p>
            <p>Our expert chefs use only the finest ingredients to create meals that satisfy every palate. Join us for a memorable dining experience and explore our special offers available on this date!</p>
            <button className=' uppercase border-b-3 rounded-2xl border-white p-2'>Read More</button>
          </div>
      </div>
    </div>
  );
};

export default Featured;
