async function getProducts(){
    /*return window.fetch('https://services-academlo-shopping.onrender.com/').then((res)=> res.json()).then((data)=>data).catch((err)=>{console.log(err)})*/

    try {
        const res = await window.fetch('https://api.jsonbin.io/v3/b/671923adad19ca34f8bd61e0')
        const data = await res.json()
        return data.record
    } catch (error) {
        console.log(error)
    }
}
export default getProducts