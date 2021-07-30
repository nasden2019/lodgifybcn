import React from 'react';
import { Container, Grid, Image, Parag, H2, Status } from './Houses.styles';
import Card from './Card'

const Houses = () => {

    const [house, setHouse] = React.useState();


    const displayHouses = async () => {
        fetch('https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house')
            .then(res => res.json())
            .then(data => setHouse(data))
    }

    React.useEffect(() => {
        displayHouses()
    }, [])


    if (!house) return <h2>Loading...</h2>


    return (
        <Container className="container">
            <div className="mb-4">
                <h1 className="mb-3 pt-5 title">Lodgify</h1>
                <h5 className="subTitle">We got the perfect Lodge for your Holidays</h5>
            </div>

            <Grid className="pl-4 gridss pl-5 ml-3">
                {
                    house && house.map(data => {
                        return <Card className="col-12" id={data.id}
                            name={data.name}
                            bookable={data.bookable}
                            booked={data.booked}
                            image={data.image}
                        />
                    })
                }

            </Grid>

        </Container >
    )
}

export default Houses
