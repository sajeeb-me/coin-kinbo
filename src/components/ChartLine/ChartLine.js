import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const ChartLine = ({ crypto }) => {
    // console.log(crypto)
    return (
        <PieChart width={1000} height={420}>
            <Pie dataKey="quantity" isAnimationActive={false} data={crypto} innerRadius={80} outerRadius={180} fill="#22c55e" label />
            <Tooltip />
        </PieChart>
    )
};

export default ChartLine;