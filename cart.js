let count=0;
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
    document.getElementById('total').innerText=grandTotal.toFixed(2);
}

let clearCart=()=>{
    document.getElementById('total-Products').innerText='0';
    document.getElementById('price').innerText='0';
    document.getElementById('delivery-charge').innerText='0';
    document.getElementById('total-tax').innerText='0';
    document.getElementById('total').innerText='0';
}