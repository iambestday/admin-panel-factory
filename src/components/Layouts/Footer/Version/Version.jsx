function Version() {
  return (
   
    <div className="hidden sm:block sm:m-3">
   <p className="text-sm">نسخه پریمیوم</p>
    <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  defaultChecked/>
    </div>
   
    
      <p className="text-xs">بررسی بروزرسانی ورژن 12.2.0 </p>
      <p className="text-xs">تاریخ آخرین بروزرسانی : 00/05/08 15:13 </p>
    
     </div>
  )
}

export default Version;
