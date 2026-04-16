const Information = () => {
    return (
        <div className="footer footer-horizontal footer-center bg-primary text-primary-content pb-20 md:pt-20 pt-10 bg-gradient-to-r from-[#6b35e5] to-purple-500 px-5 flex flex-col gap-10">
            <div>
                <h1 className="text-4xl font-extrabold text-center">Trusted By Millions, Built For You</h1>
            </div>

            {/* Replaced space-y-10 with standard grid and gap classes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center text-center md:gap-20">
                <div>
                    <p>Total Downloads</p>
                    <h1 className="text-6xl font-extrabold">29.6M</h1>
                    <p>21% More Than Last Month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h1 className="text-6xl font-extrabold">906K</h1>
                    <p>46% More Than Last Month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h1 className="text-6xl font-extrabold">132+</h1>
                    <p>31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Information;