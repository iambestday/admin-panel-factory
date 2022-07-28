import { useEffect, useState } from "react";
import { db } from "../../../../../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

function AddInvoice() {
  const [newOperator, setOperator] = useState("");
  const [newNumber, setNumber] = useState(0);
  const [newAmount, setAmount] = useState(0);

  const [invoice, setInvoice] = useState([]);
  const invoiceCollectionRef = collection(db, "sales");

  const createInvoice = async () => {
    await addDoc(invoiceCollectionRef, {
      operator: newOperator,
      number: newNumber,
      amount: newAmount,
    });
  };

  useEffect(() => {
    const getInvoice = async () => {
      const data = await getDocs(invoiceCollectionRef);
      setInvoice(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getInvoice();
  }, [invoiceCollectionRef]);

  return (
    <div className="w-full">
      <div className="flex row w-full justify-between items-center m-1">
        <p className="text-xl text">ثبت فاکتور فروش</p>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text ml-2">تغییر به پیش فاکتور</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>

      <div className="flex row w-full m-1">
        <input
          type="text"
          placeholder="نام خریدار (حقیقی/حقوقی)"
          onChange={(event) => {
            setOperator(event.target.value);
          }}
          className="input w-full max-w-xs m-2 "
        />
        <input
          type="text"
          placeholder="کد اقتصادی"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          className="input w-full max-w-xs m-2 "
        />

        <input
          type="text"
          placeholder="شماره تلفن"
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          className="input w-full max-w-xs m-2"
        />
        <input
          type="text"
          placeholder="نشانی"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          className="input w-full max-w-xs m-2 "
        />
      </div>

      <div className="overflow-x-auto my-2">
        <table className="table table-compact w-full text-right">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>کد کالا</th>
              <th>شرح کالا</th>
              <th>تعداد/مقدار</th>
              <th>واحد</th>
              <th>مبلغ واحد </th>
              <th>مبلغ کل </th>
              <th>مبلغ تخفیف </th>
              <th>مبلغ کل با تخفیف </th>
              <th>جمع مالیات و عوارض </th>
              <th>جمع مبلغ نهایی </th>
            </tr>
          </thead>
          <tbody>
            {invoice.map((invoices) => {
              return (
                <tr>
                  <th>1</th>
                  <td>{invoices.id}</td>
                  <td>{invoices.id}</td>
                  <td>{invoices.costumer}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>{invoices.operator}</td>
                  <td>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>مبلغ کل </th>
              <th>مبلغ تخفیف </th>
              <th>مبلغ کل با تخفیف </th>
              <th>جمع مالیات و عوارض </th>
              <th>جمع کل :</th>
            </tr>
          </tfoot>
        </table>
      </div>

      <button
        onClick={createInvoice}
        className="btn btn-success hover:animate-pulse"
      >
        ثبت فاکتور جدید
      </button>
    </div>
  );
}

export default AddInvoice;
