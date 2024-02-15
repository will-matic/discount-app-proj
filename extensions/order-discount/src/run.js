// @ts-check
import { DiscountApplicationStrategy } from "../generated/api";

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

const  DISCOUNT = {  
  discountApplicationStrategy: DiscountApplicationStrategy.Maximum,
  discounts: [{
    value:{
      percentage: {
        value: 5
      }
    },
    targets:[
      {
        orderSubtotal: {
          excludedVariantIds: []
        }
      }
    ],
    message: "5% off for Platinum Members"
  }]
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {

  console.log('test')
  const configuration = JSON.parse(
    input?.discountNode?.metafield?.value ?? "{}"
  );


  if(input.cart.buyerIdentity?.customer?.hasTags[0].hasTag && input.cart.cost.subtotalAmount.amount > 1999){
    return DISCOUNT
  }
    return EMPTY_DISCOUNT
 
};