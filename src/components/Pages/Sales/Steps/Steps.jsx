import "./Steps.css";

function Steps() {
  return (
    <ul className="steps overflow-x-hidden text-sm">
      <li className="step step-primary">تایید مدیر</li>
      <li className="step step-primary">وضعیت موجودی</li>
      <li className="step">درخواست تولید</li>
      <li className="step">تامین کالا</li>
      <li className="step">زمان بندی تولید</li>
      <li className="step">در حال تولید</li>
      <li className="step">تایید کنترل کیفیت</li>
      <li className="step">بسته بندی</li>
      <li className="step">ارسال</li>
    </ul>
  );
}

export default Steps;
