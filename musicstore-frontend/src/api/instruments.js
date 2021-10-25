import { INSTRUMENT_RETRIEVE_UPTADE_API } from "../constants";
import axios from "axios";

export function getInstrumentDetail(data, onSucces, onError, onDone){
  let url = INSTRUMENT_RETRIEVE_UPTADE_API
  axios.get(url)
  .then(onSucces)
  .catch(onError)
  .then(onDone);
}

export function putInstrumentDetail(data, onSucces, onError, onDone){
  let url = INSTRUMENT_RETRIEVE_UPTADE_API.replace("<id>", data.id)
  axios.put(url, data)
  .then(onSucces)
  .catch(onError)
  .then(onDone);
}

export function delInstrumentDetail(id, onSucces, onError, onDone){
  let url = INSTRUMENT_RETRIEVE_UPTADE_API.replace("<id>", id)
  axios.delete(url)
  .then(onSucces)
  .catch(onError)
  .then(onDone);
}

export function postInstrumentDetail(data, onSucces, onError, onDone){
  let url = INSTRUMENT_RETRIEVE_UPTADE_API
  axios.post(url, data)
  .then(onSucces)
  .catch(onError)
  .then(onDone);
}
