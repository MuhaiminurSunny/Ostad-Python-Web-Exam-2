let count=0;
let promoCodes = {
    ostad10: 0.1,
    ostad5: 0.05,
  };
  let appliedPromo = null;
let addToCart=(id,price)=>{
    count+=1;
    updatePrice('price',price);
    updateTaxandCharge();
    updateTotal();
    document.getElementById("total-Products").innerText=count;
};

let getInputValue=(id)=>{
    let element=document.getElementById(id).innerText;
    let value=parseFloat(element);
    return value;
}
let setInnerText=(id,value)=>{
document.getElementById(id).innerText=value.toFixed(2);
};

let updatePrice=(id,value)=>{
    let oldprice=getInputValue(id);
    let convertPrice=parseFloat(value);
    let total=parseFloat(oldprice+convertPrice).toFixed(2);
    document.getElementById(id).innerText=total;
}

let updateTaxandCharge=()=>{
    let priceConverted=getInputValue('price');
    if (priceConverted<200){
        setInnerText('delivery-charge',30);
        setInnerText('total-tax',priceConverted*.2);
    }
   else if (priceConverted < 400) {
        setInnerText("delivery-charge", 60);
        setInnerText("total-tax", priceConverted * 0.3);
      }
     else if (priceConverted < 500) {
        setInnerText("delivery-charge", 80);
        setInnerText("total-tax", priceConverted * 0.4);
      }
      else {
        setInnerText('delivery-charge', 0);
        setInnerText('total-tax', 0);
    }
      
};

let updateTotal=()=>{
    let grandTotal=
    getInputValue('price')+getInputValue('delivery-charge')+getInputValue('total-tax');
    discount = appliedPromo ? grandTotal * promoCodes[appliedPromo] : 0;
    console.log(grandTotal);
    document.getElementById('total').innerText=(grandTotal-discount).toFixed(2);
    
}

let applyPromoCode=()=>{
    let promoCodeInput=document.getElementById('promo-code').value.trim();
    let  promoMessage=document.getElementById('promo-message');
    if(promoCodes[promoCodeInput]){
        if(appliedPromo===promoCodeInput){
            promoMessage.textContent = "Promo code already applied.";
          promoMessage.className = "error";
          return;
        }
        appliedPromo=promoCodeInput;
        
  
        promoMessage.textContent = `Promo code "${promoCodeInput}" applied successfully!`;
        promoMessage.className = "success";
       updateTotal();

    }
    else {
        promoMessage.textContent = "Invalid promo code.";
        promoMessage.className = "error";
        return parseFloat(1);
      }
}

let clearCart=()=>{
    document.getElementById('total-Products').innerText='0';
    document.getElementById('price').innerText='0';
    document.getElementById('delivery-charge').innerText='0';
    document.getElementById('total-tax').innerText='0';
    document.getElementById('total').innerText='0';
}