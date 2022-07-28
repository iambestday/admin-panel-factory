import React from "react";
import "./Alert.css";

function Alert() {
  return (
    <div className="alerts alert-warning shadow-lg ">
      
        <p className="text-sm truncate">مدیر محترم لطفا آخرین پیش فاکتور صادر شده را مشاهده فرمایید</p> 
        <button className="text-sm btn btn-sm btn-ghost">بعدا</button>
        <button className="text-sm btn btn-sm btn-primary">مشاهده اکنون</button>

  
        </div>
        
  );
}

export default Alert;
