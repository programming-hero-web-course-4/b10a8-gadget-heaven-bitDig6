import { useLoaderData } from "react-router";
import { addTitle } from "../../utilities/addDynamicTittle";
import {
    ComposedChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    Scatter, ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    addTitle('Statistics');

    const products = useLoaderData();
    console.log(products);

    return (
        <div className="bg-base-300 space-y-10 pb-20">
            <div className="bg-blueviolet-100 text-white text-center py-8">
                <h3 className="text-3xl font-bold mb-4">Statistics</h3>
                <p className="lg:w-3/5 mx-auto text-base mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div style={ {width: '85%', height: '50rem', margin: '0 auto'} }
                className="bg-white py-10 rounded-xl">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={400}
                        data={products}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 300,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="product_title" scale="band" interval={0} angle={-90} textAnchor='end' dx={20} dy={60}/>
                        <YAxis dataKey="price"/>
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="price" barSize={20} fill="#413ea0" />
                        <Scatter dataKey="rating" fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Statistics;