import { Link } from 'react-router';
import BannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div style={{ width: '95%' }}
            className="hero bg-blueviolet-100 rounded-bl-2xl rounded-br-2xl mx-auto mb-20 lg:mb-[30rem]">
            <div className="hero-content text-center text-white py-20 md:pb-28 lg:pb-52">
                <div className="w-4/5 mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <Link to="/dashboard">
                        <button className="btn btn-primary px-8 py-5 rounded-full text-blueviolet-100 bg-white text-xl font-bold hover:bg-blue-300 hover:text-blue-900 mb-10">Shop Now</button>
                    </Link>
                    <figure className='relative w-full'>
                        <img src={BannerImg} className='w-full lg:h-[35rem] lg:absolute rounded-2xl outline-2 outline-offset-[15px] '></img>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Banner;