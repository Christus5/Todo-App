import React from 'react';
import './Grid.css';


const Grid = props => {
    const { dataSource, Card } = props;
    const renderCards = dataSource.map(data => <Card key={data.title} data={data}/>)

    return (
        <div className={'grid'}>
            {renderCards}
        </div>
    );
};


export default Grid;