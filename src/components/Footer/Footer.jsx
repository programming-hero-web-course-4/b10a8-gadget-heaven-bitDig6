
const Footer = () => {
    return (
        <footer className="w-11/12 mx-auto text-center p-10">
            {/* footer title and subtitle*/}
            <div>
                <h3 className="text-3xl font-bold mb-3">Gadget Heaven</h3>
                <p className="font-medium text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="divider"></div>
            {/* footer nav menu */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* menu 1 */}
                <nav>
                    <h6 className="text-lg font-bold mb-2">Services</h6>
                    <ul className="space-y-2">
                        <li className="link link-hover"><a href="">Product Support</a></li>
                        <li className="link link-hover"><a href="">Order Tracking</a></li>
                        <li className="link link-hover"><a href="">Shipping & Delivery</a></li>
                        <li className="link link-hover"><a href="">Returns</a></li>
                    </ul>
                </nav>
                {/* menu 2 */}
                <nav>
                    <h6 className="text-lg font-bold mb-2">Company</h6>
                    <ul className="space-y-2">
                        <li className="link link-hover"><a href="">About Us</a></li>
                        <li className="link link-hover"><a href="">Careers</a></li>
                        <li className="link link-hover"><a href="">Contact</a></li>
                    </ul>
                </nav>
                {/* menu 3 */}
                <nav>
                    <h6 className="text-lg font-bold mb-2">Legal</h6>
                    <ul className="space-y-2">
                        <li className="link link-hover"><a href="">Terms of Services</a></li>
                        <li className="link link-hover"><a href="">Privacy Policy</a></li>
                        <li className="link link-hover"><a href="">Cookie Policy</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
        //     <footer className="footer sm:footer-horizontal bg-white p-10">
        //     <nav>
        //       <h6 className="footer-title">Services</h6>
        //       <a className="link link-hover text-center">Product Support</a>
        //       <a className="link link-hover">Order Tracking</a>
        //       <a className="link link-hover">Shipping and Delivery</a>
        //       <a className="link link-hover">Returns</a>
        //     </nav>
        //     <nav>
        //       <h6 className="footer-title">Company</h6>
        //       <a className="link link-hover">About us</a>
        //       <a className="link link-hover">Contacts</a>
        //       <a className="link link-hover">Contact</a>
        //     </nav>
        //     <nav>
        //       <h6 className="footer-title">Legal</h6>
        //       <a className="link link-hover">Terms of Service</a>
        //       <a className="link link-hover">Privacy policy</a>
        //       <a className="link link-hover">Cookie policy</a>
        //     </nav>
        //   </footer>
    );
};

export default Footer;