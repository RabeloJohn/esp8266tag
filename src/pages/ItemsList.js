import listcl from './ItemsList.module.css'
import SingleItempg from '../components/SingleItem';
import { useState, useEffect, useContext } from 'react';
import { ItmCxt } from '../store/itemsContext';



function ItemListPg () {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const userItem = useContext(ItmCxt)
    console.log(userItem)



    useEffect(() => {

        setIsLoading(true);

        fetch('https://esptag-ffbd3-default-rtdb.firebaseio.com/items.json').then(response =>{
            return response.json();
        }).then(data =>{
            const itms = [];
            for (const key in data){
                const itm ={
                    id: key,
                    ...data[key]
                }
                itms.push(itm)
            } 

            setIsLoading(false);
            setLoadedItems(itms);
        });

    },[userItem]);



    if (isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    }




    return(

        <div className={listcl.myListContainer}>
            <div className={listcl.title}>My tags</div>
            <div className={listcl.listOrganiser}>
            <div className={listcl.notice}> {(loadedItems.length>0) ? null : "Click on 'New Tag' menu to add your first item"}</div>
                {loadedItems.map((ItemUnit) => {
                    return <SingleItempg Title={ItemUnit.name} Group={ItemUnit.category} Group1={ItemUnit.category1} Group2={ItemUnit.category2} Group3={ItemUnit.category3} Group4={ItemUnit.category4} K={ItemUnit.id} />
                }
                )}
            </div>
        </div>
    );
}

export default ItemListPg;