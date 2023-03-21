import { useForm } from '../../hooks/useForm';

export const CreateProduct = () => {
    
    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>

                    <label htmlFor="prod-name">Product name:</label>
                    <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Enter product name..." />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter filament category..." />

                    <label htmlFor="levels">price:</label>
                    <input value={values.price} onChange={changeHandler} type="number" id="price" name="price" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="description">description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Product" />
                </div>
            </form>
        </section>
    );
};
