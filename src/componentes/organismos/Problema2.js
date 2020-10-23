import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { problema2Fetch } from "../../redux/actions";

import Container from "../../componentes/atomos/Container";

const options = [
    "-14",
    "-13",
    "-12",
    "-11",
    "-10",
    "-9",
    "-8",
    "-7",
    "-6",
    "-5",
    "-4",
    "-3",
    "-2",
    "-1",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
];


const horas = []
const mins = []
const secs = []

for (let index = 0; index < 60; index++) {
    mins[index] = "" + index;
    secs[index] = "" + index;

}
for (let index = 0; index < 24; index++) {
    horas[index] = "" + index;

}

export const Problema2 = ({ fetchConvertir, data }) => {






    const [hora, setHora] = useState("")
    const [zone, setZone] = useState("")

    const [selectHora, setSelectHora] = useState("00")
    const [selectMins, setSelectMins] = useState("00")
    const [selectSecs, setSelectSecs] = useState("00")
    const [selectUTC, setSelectUTC] = useState("-14")
    

    useEffect(() => {
        if (data != null) {
            setHora(data.time)
            setZone(data.timezone)
        }
    }, [data])
    return (
        <Container>
            <div className=" w-full grid grid-cols-3">
                <div className="h-auto w-full flex place-items-center justify-center">
                    {/* <input
                        type="time"
                        name="hora"
                        id="hora"
                        min="00:00"
                        max="11:59"
                        className="inputBig"

                        required
                    /> */}

                    <div className="w-full grid grid-cols-3 inputBig bg-white">
                        <div>
                            <select className="bg-transparent" onChange={(e) => setSelectHora(e.target.value)}>
                                {horas.map((item, index) => {
                                    return (
                                        <option key={item + index} id={item}>
                                            {item.length < 2 ? "0" : ""}{item}
                                        </option>
                                    );
                                })}
                            </select>

                        </div>
                        <div>
                            <select className="bg-transparent" onChange={(e) => setSelectMins(e.target.value)} >
                                {mins.map((item, index) => {
                                    return (
                                        <option key={item + index} id={item}>
                                            {item.length < 2 ? "0" : ""}{item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select className="bg-transparent" onChange={(e) => setSelectSecs(e.target.value)}>
                                {secs.map((item, index) => {
                                    return (
                                        <option key={item + index} id={item}>
                                            {item.length < 2 ? "0" : ""}{item}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="h-auto w-full flex place-items-center justify-center">
                    <select className="inputBig" onChange={(e) => setSelectUTC(e.target.value)}>
                        {options.map((item, index) => {
                            return (
                                <option key={item} id={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="h-auto w-full flex place-items-center justify-center">
                    <button className="btnBig text-white" onClick={() => {
                        
                        fetchConvertir({ hora: selectHora+":"+selectMins+":"+selectSecs, timezone: Number(selectUTC) })
                    }} >Calcular UTC</button>
                </div>






            </div>

            <div className="inputBig bg-white mx-auto my-5 h-64">

                <h1 className="text-center"> {hora != "" ? hora + " - " : "-- :"} {zone != "" ? zone : "--"}</h1>
            </div>

        </Container>
    )
}

const mapStateToProps = (state) => ({

    data: state.problema2Reducer.data
})

const mapDispatchToProps = (dispatch) => {

    return {

        fetchConvertir: (payload) => dispatch(problema2Fetch(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Problema2)
