
import { createProductService } from "../../services/product.service";
// import ApiError from "../../ApiError/apiError";
import { Product } from "@prisma/client";

export default async (productData: Product) => {
    
    const createdProducts = await createProductService(productData);
    // if(!await createProduct(productData)){
    //      throw new ApiError({
    //         errorCode: 'INCORRECT_DATA'
    //      })
    // }

    return createdProducts;
}