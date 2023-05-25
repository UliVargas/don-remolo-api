import { createProductService } from "../../services/product.service";
import ApiError from "../../ApiError/apiError";
import { Product } from "@prisma/client";

export default async (productData: Product) => {
    
    if(await productData.name || productData.description || productData.imgURL){
         throw new ApiError({
            errorCode: 'THE_PRODUCT_IS_NOT_CREATED'
         })
    }

    return createProductService(productData);
}