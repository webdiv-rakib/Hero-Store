const Information = () => {
    return (
        <div className="footer footer-horizontal footer-center bg-primary text-primary-content pb-20 pt-20 bg-gradient-to-r from-[#6b35e5] to-purple-500">
            <div>
                <h1 className="text-4xl font-extrabold">Trusted By Millions, Build For Your</h1>
            </div>
            <div className="flex justify-center items-center gap-40">
                <div>
                    <p>Total Downloads</p>
                    <h1 className="text-6xl font-extrabold">29.6M</h1>
                    <p>21% More Than Last Months</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h1 className="text-6xl font-extrabold">906K</h1>
                    <p>46% More Than Last Months</p>
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