import React, { useCallback, useMemo } from 'react';
import './grid.css';
import Column from '../grid_columns/column';

function Grid({ gridData, grouping, userIdToData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => (
                <Column
                    key={k}
                    tickets={gridData[k]}
                    grouping={grouping}
                    groupBy={k}
                    userIdToData={userIdToData}
                />
            ))}
        </div>
    );
}

export default Grid;
