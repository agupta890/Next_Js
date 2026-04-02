

const Products = async({searchParams})=>{

    const searchParam = await searchParams
    const page = searchParam?.page || 1
    const filter = searchParam?.filter || "default"
    const sort = searchParam?.sort || "all"
    
    return(
        <>
        <h1>Page {page} filter by {filter} and sort {sort}</h1>
        </>
    )
}

export default Products;