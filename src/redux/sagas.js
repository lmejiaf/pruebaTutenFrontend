import { put, take, call, all, takeEvery, fork } from 'redux-saga/effects';

import axios from "axios"

//actiontypes
import { PROBLEMA2 } from "./actionTypes"


//actions
import { problema2Failed, problema2Success } from "./actions"



//apicall


//sagas

function* fetchConversion({ payload }) {






    console.log(payload);

    // axios.post("http://localhost:9100/problema2/convertir", payload)
    // const response = yield call(
    //     axios.post,
    //     ["http://localhost:9100/problema2/convertir", payload, {
    //         headers: {

    //             'Content-Type': 'application/json',
    //             "Access-Control-Allow-Origin": "*",
    //         }
    //     }]

    // )

    // const respone;

    // const apiCall = () => {
    //     return axios.post('http://localhost:9100/problema2/convertir',
    //         payload,// only if not an object. Otherwise don't use outer {},
    //         {
    //             headers: {


    //                 'Content-Type': 'application/json',
    //                 "Access-Control-Allow-Origin": "*",

    //             }
    //         },
    //     ).then(response => response = response.data)
    //         .catch(err => {
    //             throw err;
    //         });
    // }

    try {

        const response = yield call(() =>
            axios.post('http://localhost:9100/problema2/convertir',
                payload,// only if not an object. Otherwise don't use outer {},
                {
                    headers: {


                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "*",

                    }
                },
            ))
        console.log(response.data);
        yield put(problema2Success(response.data));


    } catch (error) {
        yield put(problema2Failed(error))
        console.log(error);
    }

}





//sagaRoot
export default function* rootSaga() {
    yield all([
        takeEvery(PROBLEMA2.Fetching, fetchConversion),
        // takeEvery(SALIDA.SOLICITUD, salir),
        // takeEvery(REGISTRO.SOLICITUD, registrar),
        // takeEvery(RECUPERAR.SOLICITUD, recuperar_pwd),
        //takeEvery(ENVIAR.SOLICITUD, addPedido),
        //fork(syncEstadoSaga),
        //fork(syncProductosSaga),
    ]);
}