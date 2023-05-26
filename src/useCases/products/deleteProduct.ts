import { deleteProductService } from "../../services/product.service";
import ApiError from "../../ApiError/apiError";

export default async (productId: string)=>{

    if(!await deleteProductService(productId)){
        throw new ApiError({
            errorCode: 'NO_PERMISSIONS'
        })
    }

    return deleteProductService(productId);
}