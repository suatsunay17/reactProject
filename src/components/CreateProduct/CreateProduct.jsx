import  './CreateProduct.module.css'
import { useForm } from '../../hooks/useForm';

export const CreateProduct = ({
    onCreateProductSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        category: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreateProductSubmit);

    return (
        <div className='container'>
            <form id="create" method="POST" onSubmit={onSubmit}>
                <h1>Create Product</h1>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor='productName'>Product name:</label>
                        <h6>Product Name</h6>
                    </div>
                    <div className='col-75'>
                        <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Enter product name..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor="category">Category:</label>
                        <h6>Category</h6>
                    </div>
                    <div className='col-75'>
                        <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter product category..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor="levels">price:</label>
                        <h6>Price</h6>
                    </div>
                    <div className='col-75'>
                        <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" min="1" placeholder="1" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor="product-img">Image:</label>
                        <h6>Image</h6>
                    </div>
                    <div className='col-75'>
                        <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-25'>
                        <label htmlFor="description">description:</label>
                        <h6>Description</h6>
                    </div>
                    <div className='col-75'>
                        <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
                    </div>
                </div>
                <div className='row'>
                    <input className="btn submit" type="submit" value="Create Product" />
                </div>
            </form >
        </div>
    );
};
