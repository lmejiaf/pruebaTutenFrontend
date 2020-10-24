import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Container from '../atomos/Container'


import { problema3Fetch } from "../../redux/actions";
import moment from 'moment';

export const Problema3 = ({ fetchAuth, bookings }) => {


    const [email, setEmail] = useState("testapis@tuten.cl")
    const [password, setPassword] = useState("1234")

    const [bgs, setBgs] = useState([])


    const [price, setPrice] = useState("")
    const [filter, setFilter] = useState("all")

    const app = "APP_BCK"


    useEffect(() => {

        // if (bgs != null && bgs.length == 0)
        setBgs(bookings);


    }, [bookings])

    // useEffect(() => {
    //     switch(filter){

    //         case "all":
    //             setBgs()
    //         break;
    //     }
    // }, [filter])

    return (
        <Container>
            <div className="justify-center">
                <input id="email" placeholder="testapis@tuten.cl" className="inputBig text-center" type="email" required autoComplete={false.toString()} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input id="password" placeholder="1234" className="inputBig my-3 text-center" type="password" required autoComplete={false.toString()} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btnBig text-white" onClick={() => fetchAuth({ email: email, password: password, app: app })}>Ingresar</button>
            </div>
            {bgs != null ?
                (<>
                    <div className="grid grid-cols-3 col-gap-2">
                        <select className="inputBig my-4" onChange={(e) => setFilter(e.target.value)}>
                            <option>
                                {"all"}
                            </option>
                            <option>
                                {"all with"}
                            </option>
                            <option>
                                {"="}
                            </option>
                            <option>
                                {">="}
                            </option>
                            <option>
                                {"<="}
                            </option>


                        </select>
                        <input type="number" className="inputBig my-4" placeholder="precio" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <button className="btnBig text-white my-4" onClick={() => {

                            switch (filter) {
                                case "all":
                                    setBgs(bookings);
                                    break;
                                case "all with":
                                    setBgs(bookings.filter(item => item.bookingPrice.toString() === price));
                                    break;
                                case "=":
                                    setBgs(bookings.filter(item => item.bookingPrice.toString() === price));
                                    break;
                                case ">=":
                                    setBgs(bookings.filter(item => item.bookingPrice.toString() >= price));
                                    break;
                                case "<=":
                                    setBgs(bookings.filter(item => item.bookingPrice.toString() <= price));
                                    break;
                                default:
                                    setBgs(bookings);
                                    break;
                            }

                        }}>Filtrar</button>

                    </div>
                </>)
                : (<></>)}


            <div className="grid grid-cols-2 col-gap-2">

                {bgs != null && bgs.map((item, index) => {
                    return (
                        <div key={index + item.bookingId} className="card bg-white">
                            <h1>BookingId: {item.bookingId}</h1>
                            <h1>Cliente: {item.locationId.tutenUser.firstName} {item.locationId.tutenUser.lastName}</h1>
                            <h1>Fecha de creación: {moment.unix(item.bookingTime).format("MM/DD/YY")}</h1>
                            <h1>Dirección: {item.locationId.streetAddress}</h1>
                            <h1>Precio: {item.bookingPrice}</h1>
                        </div>
                    )
                })}

            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({

    bookings: state.problema3Reducer.data
})

const mapDispatchToProps = (dispatch) => {


    return {
        fetchAuth: (payload) => dispatch(problema3Fetch(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Problema3)
