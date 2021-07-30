import React from 'react';
import { CardContainer, Container, Grid, Image, Parag, H2, Available, Unavailable, Booked, Status, StatusUnavailable, Statusbooked } from './Houses.styles';

const Card = ({ image, id, name, bookable, booked }) => {

    return (

        <CardContainer>
            <Image src={image} alt="" />
            <Status>{bookable && <p className="mt-2">Available</p>}</Status>
            <StatusUnavailable>{!bookable && booked === 0 && <p className="pt-1 mt-2">Unavailable</p>}</StatusUnavailable>
            <Statusbooked>{!bookable && booked !== 0 && <p className="mt-2">Booked</p>}</Statusbooked>

            <div style={{ padding: '16px' }}>
                <Parag>ID: {id}</Parag>
                <H2>{name}</H2>
                {bookable && <Available>Book</Available>}
                {!bookable && booked === 0 && <Unavailable>Not Bookable</Unavailable>}
                {!bookable && booked !== 0 && <Booked className="mt-3">Booked {booked} days</Booked>}
            </div>
        </CardContainer>
    )
}

export default Card
