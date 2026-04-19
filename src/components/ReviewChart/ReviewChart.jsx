import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const ReviewChart = ({ ratings }) => {
    // 1. Recharts renders bottom-to-top by default. 
    // We reverse the array so "5 star" appears at the top of the chart!
    const chartData = [...ratings].reverse();

    // Custom Tooltip to make it look clean with Tailwind
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-base-100 p-3 shadow-lg rounded-lg border border-gray-200 text-sm">
                    <p className="font-bold text-gray-700">{payload[0].payload.name}</p>
                    <p className="text-[#ff8811]">
                        {payload[0].value.toLocaleString()} Reviews
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full h-72 bg-base-200 p-5 rounded-2xl">
            {/* ResponsiveContainer ensures it looks good on mobile and desktop */}
            <ResponsiveContainer width="100%" height="100%">
                {/* layout="vertical" turns it into a horizontal bar chart */}
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
                >
                    {/* Hide the X-axis line/numbers for a cleaner look */}
                    <XAxis type="number" hide />
                    
                    {/* YAxis displays "5 star", "4 star", etc. */}
                    <YAxis 
                        dataKey="name" 
                        type="category" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                        width={60}
                    />
                    
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    
                    {/* The actual bars. Added a nice radius to the edges */}
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={25}>
                        {chartData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                // Make the 5-star bar your brand color, and others a lighter purple/gray
                                fill={entry.name === '5 star' ? '#ff8811' : '#ff8811'} 
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;