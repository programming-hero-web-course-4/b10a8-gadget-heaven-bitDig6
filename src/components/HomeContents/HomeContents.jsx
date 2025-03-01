import { addTitle } from "../../utilities/addDynamicTittle";
import Banner from "../Banner/Banner";
import CategoryAndProductContainer from "../CategoryandProductContainer/CategoryandProductContainer";

const HomeContents = () => {
    addTitle('Home');

    return (
        <main className="bg-[#ECECEC] pb-36 lg:pb-28">
            <Banner></Banner>

            <section className="lg:mt-64">
                <h3 className="text-2xl lg:text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h3>
                <CategoryAndProductContainer></CategoryAndProductContainer>
            </section>

        </main>
    );
};

export default HomeContents;