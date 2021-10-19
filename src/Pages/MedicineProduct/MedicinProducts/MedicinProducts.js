
import useMedicine from "../../Hooks/LoadMedicine";
import MedicinProduct from "../MedicinProduct/MedicinProduct";




const MedicinProducts = () => {
    const [medicine] = useMedicine();
    return (
        <div>
            <div className="">
                <img className="w-100" src="./image/banar/4.jpg" alt="" />
                <h3 className="fs-3 mx-3  fw-bold p-4  text-dark " >Medicines </h3>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4 p-3">
                        {medicine.map(Medicine => (

                            <MedicinProduct
                                key={Medicine.key}
                                medicine={Medicine}
                            ></MedicinProduct>

                        ))
                        }

                    </div>
                </div>
            </div>



        </div>
    );
};

export default MedicinProducts;