import { findByIdService } from "../../services/product.service"
import ApiError from "../../ApiError/apiError"

export default async (productId: string) => {

    if(!await findByIdService(productId)){
        throw new ApiError({
            errorCode: 'PRODUCT_DONT_EXIST'
        })
    }
    
    return findByIdService(productId);
}