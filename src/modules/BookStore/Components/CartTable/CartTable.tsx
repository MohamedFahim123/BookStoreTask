
import { CartData } from '../../../Utils/Interfaces';
import CartTableCell from '../CartTableCell/CartTableCell';

interface CartTableProps {
    cartData: CartData | null;
    token: string | undefined;
};

export default function CartTable({ cartData, token }: CartTableProps) {
    return (
        <>
            {
                cartData?.items?.map((item, index) => (
                    item.quantity > 0 && (
                        <CartTableCell cartData={cartData} token={token} index={index} item={item} key={index} />
                    )
                ))
            }
        </>
    )
}
