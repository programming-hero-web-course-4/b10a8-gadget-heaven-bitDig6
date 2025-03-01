import { addTitle } from "../../utilities/addDynamicTittle";


const FAQs = () => {
    addTitle('FAQ');

    return (
        <div className="w-full bg-base-200 py-10 space-y-16">
            {/* faqs */}
            <div className="w-4/5 mx-auto space-y-6">
                {/* faq 1 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">Can I pay in installment?</div>
                    <div className="collapse-content text-sm">Yes, after you have our membership card.</div>
                </div>
                {/* faq 2 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How many products can I buy at once?</div>
                    <div className="collapse-content text-sm">You can add products in your card for total 1000$. You cannot add more than that. So, at a time you can buy products worth of 1000$</div>
                </div>
                {/* faq 3 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I buy from abroad?</div>
                    <div className="collapse-content text-sm">International Shipping is currently unavailable.</div>
                </div>
                {/* faq 4 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I return a product?</div>
                    <div className="collapse-content text-sm">Customers can return the product within 7 days of receiving the product.</div>
                </div>
                {/* faq 5 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What should I do find that my product has a defect after receiving it?</div>
                    <div className="collapse-content text-sm">If you inform us within 15 days after receiving the product, we can send you a new product without any defect and take back the product with defect. If we are unable to do so, we will return your money.</div>
                </div>
                {/* faq 6 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Can I get any service for fixing any issues with my product?</div>
                    <div className="collapse-content text-sm">We provide service for any issues for 2 years since receiving the product. But if it has any physical damage, we do not provide any service.</div>
                </div>
                {/* faq 7 */}
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">What are the payment methods?</div>
                    <div className="collapse-content text-sm">Customers can choose among various payment methods: credit/debit cards, bank transfers, mobile banking, and digital wallets. Cash on delivery is also available.</div>
                </div>
            </div>
            {/* mail us */}
            <div className="w-4/5 mx-auto mb-10">
                <h3 className="font-bold text-2xl text-center mb-2">Ask us anything</h3>
                <p className="font-semibold text-base text-center mb-4">Send an email to us <span className="text-blue-500">gadgetheaven123@gmail.com</span> for any kind of queries</p>
                <form className="flex flex-col items-center gap-5">
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <textarea className="textarea" placeholder="Ask a question"></textarea>
                </form>

            </div>
        </div>
    );
};

export default FAQs;