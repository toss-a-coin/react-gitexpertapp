
export const GetGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=BYISqVS6KmbBkg9FmwsWAr1TsGPGaayc&q=${encodeURI(category)}&limit=5`;
  const respuesta = await fetch(url);
  const {data} = await respuesta.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url

    }
  })

  return gifs;
}
