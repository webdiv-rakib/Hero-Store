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
    const chartData = [...ratings].reverse();

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
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
                >
                    <XAxis type="number" hide />
                    
                    <YAxis 
                        dataKey="name" 
                        type="category" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#6b7280', fontSize: 14, fontWeight: 600 }}
                        width={60}
                    />
                    
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                    
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={25}>
                        {chartData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
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