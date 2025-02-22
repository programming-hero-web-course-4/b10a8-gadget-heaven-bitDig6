import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";


const HomeContents = () => {
    return (
        <main className="bg-[#ECECEC] pb-36 lg:pb-28">
            <Banner></Banner>

            <section className="lg:mt-64">
                <h3 className="text-2xl lg:text-4xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h3>
                <div style={{ width: '85%', margin: '0 auto' }}
                    className="space-x-6 space-y-6">
                    <aside className="bg-white p-6 rounded-2xl w-full md:w-auto md:float-left">
                        <Categories></Categories>
                    </aside>
                    <Products></Products>
                </div>
            </section>

        </main>
    );
};

export default HomeContents;