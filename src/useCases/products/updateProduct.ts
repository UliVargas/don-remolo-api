import { Product } from "@prisma/client";
import { updateProduct, findById } from "../../services/product.service";
import ApiError from "../../ApiError/apiError";

export default async (productId: string, updatedProduct: Product) => {

    if(!await findById(productId)){
        throw new ApiError({
            errorCode: 'PRODUCT_DONT_EXIST'
        })
    }
    
    return updateProduct(productId, updatedProduct);
}