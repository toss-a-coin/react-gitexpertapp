import {useState, useEffect} from 'react';
import {GetGifs} from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {

  const [obj, setObj] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    GetGifs( category )
      .then( imgs => {
          setObj({
            data: imgs,
            loading: false
          });
      })
  });

  return obj;

}
